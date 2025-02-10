alert ("bem vindos ao nosso site")
/*let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";

alert ("Erro! Preencha todos os campos")*/

let nome = prompt("informe seu nome");
let idade = parseInt (prompt ("informe sua idade"));

if (idade >= 18) {
    alert("parabéns "+ nome+ ", você pode tirar a sua CNH")
};