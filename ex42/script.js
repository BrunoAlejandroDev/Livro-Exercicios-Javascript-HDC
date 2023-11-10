// Ex. 42 - Usando for, criar um programa que converta um número binário em decimal

// criando uma variável para receber o número decimal 
let decimal = 0;

// variável para o número binário
let binario = '1010';

// loop for para iterar sobre o binário indo da direita para a esquerda
for(let i = binario.length-1, potencia = 0; i >= 0; i--, potencia++){
    // variável decimal recebe os valores inteiros de cada elemento da variável binário
    decimal = decimal + parseInt(binario[i]) * Math.pow(2, potencia) 
    
    // cada digito binário representa uma potência de base 2, começando em 2° e indo até 2^n
}

// imprimindo o valor
console.log(`Número em decimal: ${decimal}`)