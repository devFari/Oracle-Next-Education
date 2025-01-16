alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
     chute = prompt ("escolha um numero entre 1 e 10");

     //se o chute for igual ao numerSecreto
    if (chute == numeroSecreto){
        alert("Você acertou. O numero secreto era " + numeroSecreto + ", ao todo utilizou " + tentativas + " tentativas");
    } else{
        if (chute < numeroSecreto){
            alert ("você errou, o munero secreto é maior que o seu chute.");
        } else {
            alert ("o numero secreto é menor que o seu chute");
        }

        // tentativa = tntativa + 1;
        tentativas ++;

    }
}


