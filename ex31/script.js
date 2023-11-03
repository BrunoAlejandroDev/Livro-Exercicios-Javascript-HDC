// Usando while, criar um programa que adivinhe um número dito pelo usuário por meio do método de busca binária.

let min = 0;
let max = 100;
let palpite;

// pedindo um número ao usuário
const numUsario = Number(prompt(`Digite um número entre ${min} e ${max}`));

while(palpite !== numUsario){
    palpite = Math.floor((min + max) / 2)  // expressão para calcular o palpite com base na metade do valor da soma entre o valor mínimo e o valor máximo

    if(palpite === numUsario){
        console.log(`Adivinhei! Seu número é: ${palpite}`)
        break;
    }
    else if(palpite < numUsario){
        min = palpite + 1;
        console.log(`Valor mínimo: ${min}`)
    }
    else{
        max = palpite - 1;
        console.log(`Valor máximo: ${max}`)
    }
}