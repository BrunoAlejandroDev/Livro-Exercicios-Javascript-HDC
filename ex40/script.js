// Ex. 40 - Usando while, criar um programa que inverta uma string

// variável para armazenar a palavra escolhida
let palavra = "bruno";

// variável para armazenar a palavra invertida
let palavraInvertida = ""

// criando uma variável que recebe a palavra original e seu tamanho -1
let i = palavra.length-1;

// loop para percorrer a palavra e inverter
while(i >= 0){
    palavraInvertida = palavraInvertida + palavra[i]
    i--;
}
console.log(palavra, palavraInvertida)

/* USANDO FOR
for(let i = palavra.length-1; i >= 0; i--){
    palavraInvertida = palavraInvertida + palavra[i]
}
console.log(`Usando for: ${palavraInvertida}`)
*/

/* USANDO MÉTODO DE STRING
let palavraInvertida = palavra.split('').reverse().join('')
console.log(palavraInvertida)
*/