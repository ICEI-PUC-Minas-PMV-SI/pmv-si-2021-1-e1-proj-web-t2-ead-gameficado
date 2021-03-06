 
 $(function () {
    $(".avatar-select").on("click", function(event) {
        var avatars = document.getElementsByClassName("avatar-select");
        for (let index = 0; index < avatars.length; index++) {
            const element = avatars[index];
            element.classList.remove("avatar-selecionado")
        }
        this.classList.add("avatar-selecionado");
        event.preventDefault();
    });

    $("#cadastroTutorForm").on("submit", function(event) {
        event.preventDefault();
        submitForm($(this), function (data) {
            data.avatar = $(".avatar-selecionado").prop("src")

            var tutores = [];
            if(localStorage.getItem("tutores")) {
                tutores = JSON.parse(localStorage.getItem("tutores"));
                if (tutores.filter(x => x.email == data.email || x.criTuT == data.criTuT).length > 0) {
                    alert("Tutor já cadastrado no sistema!");
                    return;
                }
            }

            tutores.push(data);

            localStorage.setItem("tutores", JSON.stringify(tutores));
            location.href = "login.html";
        })
    });
})