// Determinar o maior valor entre 3 números

// valores para comparar
let num1 = 250;
let num2 = 250;
let num3 = 250;

// definir uma variável para guardar o valor do maior número durante a comparação
let maiorValor;

// usando condicionais para verificar qual é o maior valor
if(num1 > num2 && num1 > num3){
    maiorValor = num1;
    console.log(`O maior valor entre ${num1}, ${num2} e ${num3} é: ${maiorValor}`)
}
else if(num2 > num1 && num2 > num3){
    maiorValor = num2;
    console.log(`O maior valor entre ${num1}, ${num2} e ${num3} é: ${maiorValor}`)
}
else if(num3 > num1 && num3 > num2){
    maiorValor = num3;
    console.log(`O maior valor entre ${num1}, ${num2} e ${num3} é: ${maiorValor}`)
}
else{
    console.log(`Todos os valores são iguais.`)
}