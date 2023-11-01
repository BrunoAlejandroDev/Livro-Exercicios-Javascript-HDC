// Determinar o número de dias em um mês

// função para percorrer o array e determinar os dias
function quantDeDias(mes){
    switch(mes){
        case 2:
            console.log(`O mês possui 28 ou 29 dias`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(`O mês possui 30 dias`)
            break;
        default:
            console.log(`O mês possui 31 dias`)
    }
}
quantDeDias(2)
quantDeDias(4)
quantDeDias(5)
quantDeDias(1)
quantDeDias(11)