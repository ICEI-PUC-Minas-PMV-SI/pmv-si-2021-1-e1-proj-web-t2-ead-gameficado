$(function () {
    $("#form-login").on("submit", function(event) {
        console.log("submit")
        console.log(this);
        event.preventDefault();
        submitForm($(this), function (data) {
            localStorage.setItem("usuario", data.usuario);
            location.href = "ead.html"
        })
    });
})