// Verificar cores de um semâforo

function verificarCorSemaforo(cor){
    if(cor === "verde"){
        console.log(`Cor: ${cor}. O semâforo está aberto. Siga em frente`)
    }
    else if(cor === "amarelo"){
        console.log(`Cor: ${cor}. Atenção, sinal amarelo. Diminua sua velocidade`)
    }
    else if(cor === 'vermelho'){
        console.log(`Cor: ${cor}. Sinal vermelho. Pare seu veículo`)
    }
    else{
        console.log(`Cor: ${cor}. Essa cor é invalida. Insira uma nova cor`)
    }
}
verificarCorSemaforo('Verde'.toLocaleLowerCase())
verificarCorSemaforo('Amarelo'.toLocaleLowerCase())
verificarCorSemaforo("vermelho".toLocaleLowerCase())
verificarCorSemaforo('azul'.toLocaleLowerCase())