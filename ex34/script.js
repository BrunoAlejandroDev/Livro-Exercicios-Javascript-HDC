// Ex.34 - Usando while, imprimir os números de 1 a 100, mas para múltiplos de 3 imprimir "Fizz"

let i = 1;
while(i <= 100){    
    // múltiplos de ambos
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`)
    }

    // múltiplos de 3
    else if(i % 3 === 0){
        console.log(`Fizz`)
    }

    //múltiplos de 5
    else if(i % 5 === 0){
        console.log(`buzz`)
    }
    
    // outros valores
    else{
        console.log(i)
    }
    i++;
}