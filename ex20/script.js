// Sistema de classificação de notas de alunos

function sistemasDeNotas(nota){
    if(nota === 10){
        console.log(`Sua nota foi ${nota}. Classificação A.`)
    }
    else if(nota >= 9 && nota < 10){
        console.log(`Sua nota foi ${nota}. Classificação B.`)
    }
    else if(nota >= 8 && nota < 9){
        console.log(`Sua nota foi ${nota}. Classificação C.`)
    }
    else if(nota >= 7 && nota < 8){
        console.log(`Sua nota foi ${nota}. Classificação D.`)
    }
    else{
        console.log(`Sua nota foi ${nota}. Classificação E.`)
    }
}
sistemasDeNotas(10)
sistemasDeNotas(9.5)
sistemasDeNotas(8.3)
sistemasDeNotas(7.8)
sistemasDeNotas(5)