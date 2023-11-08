// Ex.: 37 - Usando while, imprimir a soma dos quadrados dos 10 primeiros números naturais.

let somaQuadrados = 0; // variável para armazenar o valor da soma dos quadrados
let i = 1; // variável inicial do loop

while(i <= 10){
    let quadrado = Math.pow(i,2) // uso do método Math.pow para realizar calcular a potência do atual valor de i
    console.log(quadrado)

    somaQuadrados = somaQuadrados + quadrado; // somando o valor do quadrado do número com o valor atual da variável
    i++;
}
console.log(`A soma do quadrados dos números é: ${somaQuadrados}`)