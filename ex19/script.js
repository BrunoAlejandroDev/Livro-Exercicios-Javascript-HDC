// Verificar se um número está dentro de um intervalo

function dentroDoIntervalo(numero, limiteMinimo, limiteMaximo){
    if(numero >= limiteMinimo && numero <= limiteMaximo){
        console.log(`O número está dentro do intervalo`)
    }
    else{
        console.log(`O número está fora do intervalo`)
    }
}
dentroDoIntervalo(10, 1, 12);
dentroDoIntervalo(5, 1, 10);
dentroDoIntervalo(15, 2, 13);