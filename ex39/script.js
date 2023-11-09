// Ex. 39 - Usando for, criar um programa que calcule o fatorial de um número

let numero = 3; // número escolhido
let fatorial = 1; // iniciando o fatorial em 1

if(numero === 0 || numero === 1){
    console.log(1);
}
else{
    for(let i = 1; i <= numero; i++){ // definindo uma variável que vai iterar até o seu valor ser igual ao número escolhido
        fatorial*=i; // o fatorial será multiplicado por 1 até o número escolhido
    }
    console.log(fatorial)
}