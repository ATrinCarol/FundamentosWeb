var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var mapa = document.querySelector('#mapa')
var nomeOk = false
var emailOk = false
var assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido. Digite seu nome completo.'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido.'
        txtNome.style.color = 'blue'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'blue'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'Email inválido. Digite o email correto.'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >=300) {
        txtAssunto.innerHTML = 'Texto grande. Digite no máximo 300 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso.')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '600px'
}

function mapaNormal (){
    mapa.style.width = '400x'
    mapa.style.height = '250px'
}
