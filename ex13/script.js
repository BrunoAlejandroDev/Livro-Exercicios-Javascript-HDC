// Exercício para verificar IMC

const peso = Number(prompt('Digite seu peso. Ex: 65.3'))
const altura = Number(prompt('Digite sua altura. Ex: 1.67'))

function calcularIMC(peso, altura){
    let imc = peso / Math.pow(altura,2)
    console.log(imc)

    if(imc < 18.5){
        alert(`Sue IMC é: ${imc.toFixed(2)}. Abaixo do peso ideal`)
    }
    else if(imc >= 18.5 && imc < 25){
        alert(`Sue IMC é: ${imc.toFixed(2)}. Peso ideal/normal`)
    }
    else if(imc >= 25 && imc < 30){
        alert(`Sue IMC é: ${imc.toFixed(2)}. Sobrepeso`)
    }
    else{
        alert(`Sue IMC é: ${imc.toFixed(2)}. Obesidade`)
    }
}
calcularIMC(peso, altura)