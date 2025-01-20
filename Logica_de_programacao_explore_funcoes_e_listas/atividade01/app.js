//baixar

// atividade 02: Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

//atividade 03: Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clicar(){
    console.log("o botão foi clicado");
};

//atividade 04: Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function alerta(){
    console.log("Eu amo JS");
};

//atividade 05: Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function ppt(){
    let cidade = prompt("informe o nome de uma cidade");
    alert (`Estive em ${cidade} e lembrei de você`)
};

//atividade 06: Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function soma(){
    let numero01 = parseInt(prompt("informe um numero inteiro"));
    let numero02 = parseInt(prompt("informe outro numero inteiro"));
    let soma = numero01 + numero02;
    alert(`A soma de ${numero01} com ${numero02} e igual a ${soma}`)
};