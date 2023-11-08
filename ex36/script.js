// Ex.: 36 - Usando for, imprimir todos os números perfeitos de 1 a 100.

for(let num = 1; num <= 100; num++){
    // variável para armazenar os divisores e fazer a soma deles
    let somaDivisores = 0;

    // loop for para dividir o número pelo seus antecessores e encontrar seus divisores
    for(let i = 1; i < num; i++){
        if(num%i === 0){
            somaDivisores += i
        }
    }
    
    // verificando se a soma dos divisores é igual ao número atual da sequência
    if(num === somaDivisores){
        console.log(num)
    }
}