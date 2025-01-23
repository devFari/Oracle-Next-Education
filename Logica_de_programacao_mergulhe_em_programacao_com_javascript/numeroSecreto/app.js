alert('Boas vindas ao jogo do número secreto');
<<<<<<< Updated upstream:Logica_de_programacao_mergulhe_em_programacao_com_javascript/numeroSecreto/app.js
let potenciaDe10 = 100;
// let numeroMaximo = 10 * potenciaDe10;
let numeroSecreto = parseInt (Math.random() * potenciaDe10 + 1);
=======
let numeroSecreto = parseInt(Math.random() * 10 + 1);
>>>>>>> Stashed changes:numeroSecreto/app.js
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// alert (`o numero minimo é 1 o o maximo é ${numeroMaximo}`)

//enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
<<<<<<< Updated upstream:Logica_de_programacao_mergulhe_em_programacao_com_javascript/numeroSecreto/app.js
     chute = prompt ("escolha um numero entre 1 e 100");
=======
     chute = prompt ("escolha um numero entre 0 e 10");
>>>>>>> Stashed changes:numeroSecreto/app.js

     //se o chute for igual ao numerSecreto
    if (chute == numeroSecreto){
        
        break;

    } else{
        if (chute < numeroSecreto){
            alert ("você errou, o munero secreto é maior que o seu chute.");
        } else {
            alert ("o numero secreto é menor que o seu chute");
        }

        // tentativa = tentativa + 1;
        tentativas ++;

    };
};

<<<<<<< Updated upstream:Logica_de_programacao_mergulhe_em_programacao_com_javascript/numeroSecreto/app.js
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou. O numero secreto era ${numeroSecreto}, ao todo utilizou ${tentativas} ${palavraTentativa}`);
=======

/* if (tentativas > 1){
    alert("Você acertou. O numero secreto era " + numeroSecreto + ", ao todo utilizou " + tentativas + " tentativas");
} else{
    alert("Você acertou. O numero secreto era " + numeroSecreto + ", ao todo utilizou " + tentativas + " tentativa");
}; */ 
//todo esse if else é igual a:

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Você acertou. O numero secreto era ${numeroSecreto} ao todo utilizou ${tentativas} ${palavraTentativas}`)
>>>>>>> Stashed changes:numeroSecreto/app.js
