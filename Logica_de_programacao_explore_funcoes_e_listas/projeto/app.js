// let numeroSecreto = gerarNumeroAleatorio();
let numeroSecreto = 5;
let tentativas = 1;

// modificando a tag H1 do HTML utilizando JavaScript
/* let titulo = document.querySelector('h1');
titulo.innerHTML = "jogo do numero secreto"; */

//modificando a tag p do HTML utilizando JavaScript
/* let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "escolha um numero entre 1 e 10"; */

//function padão para reaproveitamento de codigo
//função com parametro
// função para exibir texto na tela
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela("h1", "Jogo do numero Secreto");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

//criando uma função para o botão
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `O numero secreto era ${numeroSecreto} você ao todo utilizou ${tentativas} ${palavraTentativa}`

        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativa);

    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou')
            exibirTextoNaTela('p', 'o numero secreto é menor que o seu chute')
        } else if (chute < numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou')
            exibirTextoNaTela('p', 'o numero secreto é maior que o seu chute')
        };
    };

    tentativas ++;

};

while (chute === numeroSecreto){
    verificarChute()
};

//função com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};

console.log(numeroSecreto);