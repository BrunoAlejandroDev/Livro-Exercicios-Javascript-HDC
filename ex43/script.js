// Ex. 43 - Usando while, criar um programa que determine se um número é palíndromo ou não

// variável para o número 
let numeroOriginal = 666;

// variável para transformar o número original em uma string (facilitar manipulação)
const numeroString = numeroOriginal.toString();

// variáveis para percorrer do início ao fim da string e do fim ao início
let inicio = 0;
let fim = numeroString.length-1;

// loop de verificação
while(inicio < fim){ // ou seja, enquanto todas os caracteres do início ao fim não tiverem sido percorridas
    
    if(numeroString[inicio] !== numeroString[fim]){ // percorre cada caractere e verifica se são diferentes
        console.log(`Número não é palíndromo`)
        return false;
    }
    else{
        console.log(`Número é palíndromo`)
        return true
    }
}