//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
// let nome = document.getElementById('amigo').value;

// Adiciona o nome à lista
function atualizerArray(){
    listaDeNomes.push(nome);
};

// função para exibir texto na tela
function exibirTexto (id, texto){
    let campo = document.querySelector(id);
    campo.innerHTML = texto;
};

//Condição para quando o campo esteja vazio
function verificarNome(){
    let nomeInformado = document.querySelector('input').value;

    if (nomeInformado == ''){
        exibirTexto('resultado', 'por favor, insira um nome valido');
        return;
    } else{
        //a programação vai aqui dentro para escoler um numero aleatorio
        exibirTexto('resultado', listaDeNomes[nomeAleatorio])
    };

};

function sortearNome(){
    let nomeAleatorio = Math.floor (Math.random() * listaDeNomes.length);

    verificarNome();
};

/* while (){
    sortearNome();
}; */