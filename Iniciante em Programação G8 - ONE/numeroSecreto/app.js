alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
     chute = prompt ("escolha um numero entre 0 e 10");

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


/* if (tentativas > 1){
    alert("Você acertou. O numero secreto era " + numeroSecreto + ", ao todo utilizou " + tentativas + " tentativas");
} else{
    alert("Você acertou. O numero secreto era " + numeroSecreto + ", ao todo utilizou " + tentativas + " tentativa");
}; */ 
//todo esse if else é igual a:

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Você acertou. O numero secreto era ${numeroSecreto} ao todo utilizou ${tentativas} ${palavraTentativas}`)
