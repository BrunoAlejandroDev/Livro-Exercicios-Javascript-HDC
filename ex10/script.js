let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))

function calcularMedia(n1, n2){
    let media = (n1+n2)/2
    console.log(media)

    if(media>=7){
        console.log('Aprovado')
    }
    else{
        console.log('Reprovado')
    }
}
calcularMedia(nota1, nota2)