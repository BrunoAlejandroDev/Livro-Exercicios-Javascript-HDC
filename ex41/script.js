// Ex. 41 - Usando wile, criar um programa que trasnforme um número decimal em um número binário

// número escolhido
let numero = 19;

// variável para armazenar o valor do número em binário
let binario = '';

while(numero > 0){
    binario = (numero % 2) + binario; // obtendo o resto da divisão do número por 2 e concatenando esse valor na variável binario

    numero = Math.floor(numero / 2) // dividindo o número sucessivas vezes por 2 para continuar pegando os próximos dígitos
}
console.log(binario)