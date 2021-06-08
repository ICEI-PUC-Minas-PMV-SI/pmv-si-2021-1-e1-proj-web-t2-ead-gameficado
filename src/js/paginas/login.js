$(function () {
    $("#form-login").on("submit", function(event) {
        event.preventDefault();
        submitForm($(this), function (data) {
            if(localStorage.getItem("tutores")) {
                var tutores = JSON.parse(localStorage.getItem("tutores"));
                var alunos = JSON.parse(localStorage.getItem("alunos"));
                if(!alunos) {
                    alunos = [];
                }

                if ((tutores.filter(x => x.criTuT == data.usuario && x.inputPassword2 == data.senha).length == 0) 
                && (alunos.filter(x => x.usuario == data.usuario && x.senha == data.senha).length == 0)) {
                    alert("Login inválido! Verifique os dados informados e tente novamente");
                    return;
                }
                
                if(tutores.filter(x => x.criTuT == data.usuario && x.inputPassword2 == data.senha).length > 0) {
                    var tutor = tutores.filter(x => x.criTuT == data.usuario && x.inputPassword2 == data.senha)[0];
                    tutor.tipo = "tutor";
                    localStorage.setItem("usuario", JSON.stringify(tutor));
                    location.href = "ead.html";
                } else {
                    var aluno = alunos.filter(x => x.usuario == data.usuario && x.senha == data.senha)[0];
                    aluno.tipo = "aluno";
                    localStorage.setItem("usuario", JSON.stringify(aluno));
                    location.href = "ead.html";
                }
                
            } else {
                alert("Login inválido! Verifique os dados informados e tente novamente");
            }
        })
    });
})