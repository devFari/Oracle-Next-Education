alert('Boas vindas ao jogo do número secreto');
let potenciaDe10 = 100;
// let numeroMaximo = 10 * potenciaDe10;
let numeroSecreto = parseInt (Math.random() * potenciaDe10 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// alert (`o numero minimo é 1 o o maximo é ${numeroMaximo}`)

//enquanto o chute não for igual ao numeroSecreto
while (chute != numeroSecreto){
     chute = prompt ("escolha um numero entre 1 e 100");

     //se o chute for igual ao numerSecreto
    if (chute == numeroSecreto){
        
        break;

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

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou. O numero secreto era ${numeroSecreto}, ao todo utilizou ${tentativas} ${palavraTentativa}`);
