const { json } = require("body-parser");
const { method } = require("lodash");

URL = "http://localhost:3000/CadastroTutor";

const cadastroForm = document.getElementById('cadastroTutorForm');

fetch(URL)
    .then(res => res.json())
    .then(cadastroTutor => {

        let arquivosCadastro = '';
        for (let i = 0; i < cadastroTutor.length; i++) {
            arquivosCadastro += `
            
            <form>
                <div>${cadastroTutor[i].dtNs}</div>
                <div>${cadastroTutor[i].nome}</div>
                <div>${cadastroTutor[i].email}</div>
                <div>${cadastroTutor[i].celular}</div>
                <div>${cadastroTutor[i].prof}</div>
                <div>${cadastroTutor[i].cidade}</div>
                <div>${cadastroTutor[i].estado}</div>
                <div>${cadastroTutor[i].criTut}</div>
                <div>${cadastroTutor[i].senha}</div>
            </form>
            `
        }

        cadastroForm.innerHTML = arquivosCadastro;
    });


const cadastroLista = document.getElementById('cadastroTutorForm');

cadastroLista.addEventListener('submit', (e) => {

    const cdTutor = JSON.stringify({

        nome: document.getElementById('nome'),
        dtNs: document.getElementById('dtNs'),
        email: document.getElementById('email'),
        ceular: document.getElementById('ceular'),
        prof: document.getElementById('prof'),
        cidade: document.getElementById('cidade'),
        estado: document.getElementById('estado'),
        criTute: document.getElementById('criTut'),
        senha: document.getElementById('senha')

    })

    fetch(URL, {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: cdTutor
    }).then(res => res.json()).then(() => location.reload())

})