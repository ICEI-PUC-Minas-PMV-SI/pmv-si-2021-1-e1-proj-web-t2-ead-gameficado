function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function resetForm($form) {
    $($form).trigger("reset");
    $($($form).get(0).elements).each(function () {
        $(this).css("border-color", "");
    });
}

function submitForm($form, onSucess, onFail) {
    var invalids = [];
    $($form.get(0).elements).each(function () {
        if ($(this).prop('required')) {
            if (!$(this).val().length && (this.nodeName == 'INPUT' || this.nodeName == 'SELECT')) {
                invalids.push(this);
            }
        }
    });

    invalids.forEach(element => {
        $(element).css("border-color", "red");
        $(element).effect("shake");
        $(element).on("input", function () {
            $(this).css("border-color", "");
        });
    });

    if (invalids.length == 0) {
        if (onSucess) {
            onSucess(getFormData($form));
        }
    } else {
        if (onFail) {
            onFail(invalids);
        }
    }
}