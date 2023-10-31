// Verificar se uma pessoa pode dirigir com base na idade usando função

// função para verificar a idade
function verificarIdade(idade){
    // condicional para fazer o teste
    if(idade >= 18){
        console.log(`Sua idade é: ${idade}. Você pode dirigir`)
    }
    else{
        console.log(`Sua idade é: ${idade}. Você não pode dirigir`)
    }
    
    // OUTRA FORMA DE FAZER
    // let podeDirigir = (idade >= 18) ? console.log(`Sua idade é: ${idade}. Você pode dirigir`) : console.log(`Sua idade é: ${idade}. Você não pode dirigir`)
}
verificarIdade(15);
verificarIdade(21);
verificarIdade(32);