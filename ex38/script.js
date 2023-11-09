// Ex.: 38 - Usando do while, imprimir a soma dos cubos dos 10 primeiros números naturais.

let inicial = 1; // variável inicial para ser usada no loop
let somaValores = 0; // variável para somar e guardar a soma de valores

// imprimindo o cubo dos valores
do{
    let cuboValores = Math.pow(inicial, 3) // usando o método Math.pow para realizar o cálculo
    console.log(cuboValores) 
    somaValores = somaValores + cuboValores // somando o valor da variável com o cubo do valor atual da variável cuboValores
    inicial++;
}
while(inicial <= 10) 
console.log(`Soma: ${somaValores}`)