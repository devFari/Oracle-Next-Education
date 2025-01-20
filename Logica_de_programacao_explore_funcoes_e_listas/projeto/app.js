let numeroSecreto = gerarNumeroAleatorio();

// modificando a tag H1 do HTML utilizando JavaScript
/* let titulo = document.querySelector('h1');
titulo.innerHTML = "jogo do numero secreto"; */

//modificando a tag p do HTML utilizando JavaScript
/* let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "escolha um numero entre 1 e 10"; */

//function padão para reaproveitamento de codigo
//função com parametro
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela("h1", "Jogo do numero Secreto");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

//criando uma função para o botão
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto)
};

//função com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10 + 1);
};