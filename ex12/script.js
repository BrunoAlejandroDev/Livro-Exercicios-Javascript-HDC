const media = Number(prompt('Digite sua média final. Ex: 8.5'))

let situacaoFinal = function(media){
    if(media >= 7){
        alert(`Sua média é: ${media}. Você está APROVADO`)
    }
    else if(media >= 5 && media < 7){
        alert(`Sua média é: ${media}. Você está de RECUPERAÇÃO`)
    }
    else{
        alert(`Sua média é: ${media}. Você está REPROVADO`)
    }
}
situacaoFinal(media)