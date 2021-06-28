$(function () {

    var carregarCadastro = function () {
        var tutores = JSON.parse(localStorage.getItem("tutores"));
        var alunos = JSON.parse(localStorage.getItem("alunos"));
        var usuario = JSON.parse(localStorage.getItem("usuario"));
        var perfil = "";
        var endpoint = "";
        var formId = "";
        if(tutores.filter(x => x.criTuT == usuario.criTuT || x.email == usuario.email).length > 0) {
            perfil = "tutores";
            endpoint = "../../cadastro-tutor.html";
            formId = "cadastroTutorForm";
        } else {
            perfil = "alunos";
            endpoint = "../../paginas/cadastro-aluno.html";
            formId = "cadastroAlunoForm";
        }
        $.ajax(endpoint, {
            success: function (response) {
                $("#modal-perfil-content").html($(response).find("#cadastro-div").html());
                
                $($(`#${formId}`).get(0).elements).each(function () {
                    if ($(this).prop('name') in usuario) {
                        $(this).val(usuario[$(this).prop('name')])
                    }
                });
                $("#btn-submit-cad").remove();
                $(".avatar-selecionado").removeClass("avatar-selecionado");
                var prefix = (perfil == "alunos")? "../" : "";
                $(`input[src="${prefix}${usuario.avatar.substring(usuario.avatar.indexOf('images/'))}"]`).addClass("avatar-selecionado");

                $(".avatar-select").on("click", function(event) {
                    var avatars = document.getElementsByClassName("avatar-select");
                    for (let index = 0; index < avatars.length; index++) {
                        const element = avatars[index];
                        element.classList.remove("avatar-selecionado")
                    }
                    this.classList.add("avatar-selecionado");
                    event.preventDefault();
                });

                $(`#${formId}`).on("submit", function(event) {
                    event.preventDefault();
                    submitForm($(this), function (data) {
                        data.avatar = $(".avatar-selecionado").prop("src")
            
                        var pessoa = [];
                        if(localStorage.getItem(perfil)) {
                            pessoa = JSON.parse(localStorage.getItem(perfil));

                            for (let index = 0; index < pessoa.length; index++) {
                                const x = pessoa[index];
                                if(x => x.email == data.email || x.criTuT == data.criTuT) {
                                    pessoa[index] = data;
                                }
                            }

                            data.tipo = (perfil == "tutores")? "tutor" : "aluno";
                            localStorage.setItem(perfil, JSON.stringify(pessoa));

                            localStorage.setItem("usuario", JSON.stringify(data));
                            location.reload();
                        }
                    })
                });
            
                
                $("#salvar-perfil").on("click", function() {
                    $(`#${formId}`).submit();
                });

                $("#excluir-perfil").on("click", function() {
                    var pessoa = [];
                    var newPessoa = [];
                        if(localStorage.getItem(perfil)) {
                            pessoa = JSON.parse(localStorage.getItem(perfil));

                            for (let index = 0; index < pessoa.length; index++) {
                                const x = pessoa[index];
                                if(!(x => x.email == data.email || x.criTuT == data.criTuT)) {
                                    newPessoa.push(x);
                                }
                            }
                            localStorage.setItem(perfil, JSON.stringify(newPessoa));
                            localStorage.removeItem("usuario");
                            location.reload();
                        }
                });
            }
        });
    };

    carregarCadastro();

    

});