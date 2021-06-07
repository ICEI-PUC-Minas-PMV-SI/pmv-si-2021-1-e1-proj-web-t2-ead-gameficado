$(function () {
    var carregarQuestoes = function () {
        $.ajax("paginas/cadastro-atividade.html", {
            success: function (response) {
                $("#cadastro-atividade").html(response);
            }
        });
    };

    carregarQuestoes();

    $(".titulo-fase").on("click", function() {
        var qtdAtividades = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length - 1;
        var index = Math.floor(Math.random() * (qtdAtividades - 0 + 1)) + 0;
        $("#modal-body").html(document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[index].getElementsByTagName("td")[3].innerHTML);
    });
});