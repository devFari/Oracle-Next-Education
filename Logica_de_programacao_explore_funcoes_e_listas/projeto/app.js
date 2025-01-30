let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
// let numeroSecreto = 5;
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
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

// função para exibir a mensagem inicial
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero Secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
};

exibirMensagemInicial();

//função com retorno
// Função para gerar um numero aleatorio
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    // vai gerar um novo numero caso o numero sorteado já tenha sido escolhido
    if(listaDeNumerosSorteados.includes()){
        return gerarNumeroAleatorio();
    } else{
        // adiciona a lista numeroEscolhido o numero que foi sorteado
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };
};

// Função para limpar os campo de preenchimento
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
};

//Função reiniciar
function reiniciar(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    // Ativa o botão de 'reiniciar jogo'
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// função para reiniciar o jogo
function reiniciarJogo(){
    // Abilita o elemento
    document.getElementById('chute').removeAttribute('disabled');
    // Adiciona o atributo 'disabled'
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}

//criando uma função para fazer o jogo rodar
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `O numero secreto era ${numeroSecreto}, você ao todo utilizou ${tentativas} ${palavraTentativa}`

        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativa);

        // desativa esse botão
        document.getElementById('chute').setAttribute('disabled', true);
        // abilita o elementoo
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou')
            exibirTextoNaTela('p', 'o numero secreto é menor que o seu chute')
        } else if (chute < numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou')
            exibirTextoNaTela('p', 'o numero secreto é maior que o seu chute')
        };
    };

    // soma 1 ao numero de tentativas
    tentativas ++;
    limparCampo();

};

// forama um laço de repetição para o jogo nunca acabar
while (chute === numeroSecreto){
    verificarChute()
};