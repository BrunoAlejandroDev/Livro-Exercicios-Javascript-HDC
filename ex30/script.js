// Usando for, imprimir todos os números primos de 1 a 100

for(let i = 2; i < 20; i++){
    let isPrime = true
    for(let div = 2; div < i; div++){
        if(i % div === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i)
    }
}