// Determinar a estação do ano com base no mês. mês 12 ou antes de março: verão / março até maio: outono / junho até agosto: inverno / outros: primavera

function estacaoDoAno(mes){
    if(mes < 3 || mes === 12){
        console.log(`Mês: ${mes}\nEstação do ano: verão`)
    }
    else if(mes >= 3 && mes < 6){
        console.log(`Mês: ${mes}\nEstação do ano: outono`)
    }
    else if(mes >= 6 && mes < 9){
        console.log(`Mês: ${mes}\nEstação do ano: Inverno`)
    }
    else{
        console.log(`Mês: ${mes}\nEstação do ano: Primavera`)
    }
}

estacaoDoAno(12)
estacaoDoAno(4)
estacaoDoAno(7)
estacaoDoAno(6)
estacaoDoAno(10)