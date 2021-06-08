$(function () {
    $(".avatar-select").on("click", function(event) {
        var avatars = document.getElementsByClassName("avatar-select");
        for (let index = 0; index < avatars.length; index++) {
            const element = avatars[index];
            element.classList.remove("avatar-selecionado")
        }
        this.classList.add("avatar-selecionado");
    });

    $("#cadastroAlunoForm").on("submit", function(event) {
        event.preventDefault();
        submitForm($(this), function (data) {
            data.avatar = $(".avatar-selecionado").prop("src")

            var alunos = [];
            if(localStorage.getItem("alunos")) {
                alunos = JSON.parse(localStorage.getItem("alunos"));
                if (alunos.filter(x => x.usuario == data.usuario).length > 0) {
                    alert("Aluno já cadastrado no sistema!");
                    return;
                }
            }

            alunos.push(data);

            localStorage.setItem("alunos", JSON.stringify(alunos));

            document.location = "#ead-area-tutor";
        })
    });
})