$(function () {
    var carregarPagina = function (pagina) {
        $.ajax(pagina, {
            success: function (response) {
                $("#pagina").html(response);
            }
        });
    };

    $('body').on('DOMSubtreeModified', '#pagina', function () {
        var titulo = $("#titulo").text();
        $("#titulo-pagina").text(titulo);
    });

    var irParaPagica = function () {
        if (window.location.hash) {
            carregarPagina("paginas/" + window.location.hash.replace("#ead-", "") + ".html")
        } else {
            carregarPagina("paginas/home.html")
        }
    }

    $("#sair").on("click", function (e) {
        localStorage.removeItem("usuario");
        location.href = "/index.html";
    });

    $(window).on('hashchange', function (e) {
        if(window.location.hash.replace("#", "").startsWith("ead-")) {
            irParaPagica();
        } else if (!window.location.hash) {
            irParaPagica();
        }
    });

    irParaPagica();
});