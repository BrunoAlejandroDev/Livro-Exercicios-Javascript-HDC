// Ex.33 - Usando for, imprimir os 10 primeiros números da sequencia de Fibonacci.

// criando duas veriáveis para os dois primeiros números da sequência
let num1 = 0;
let num2 = 1;
console.log(num1)
console.log(num2)

// laço for
for(let i = 2; i < 10; i++){
    // variável para guardar o valor do próximo numero relativo a soma dos dois anteriores
    let proxNum = num1 + num2;
    console.log(proxNum);

    // atualizando os valores de num1 e num2;
    num1 = num2;
    num2 = proxNum;
}