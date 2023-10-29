// Exercício: verificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que pode ser lida tanta da esquerda para a direira, como da direita para a esquerda

// Pedindo a palavra ao usuário
let palavra = prompt('Digite uma palavra');

// criando a função para verificar a palavra
function verificarPalindromo(palavra){
    let palavraInvertida = palavra.split('').reverse().join('') 
    // split: serve para separar a palavra em caracteres individuais.
    // reverse: serve para inverter a palavra
    // join: serve para concatenar novamente a palavra
    console.log(palavraInvertida)

    // verificar se a palavra digitada é igual a palavra invertida
    if(palavra === palavraInvertida){
        alert(`A palavra ${palavra} é um palíndromo`)
    }
    else{
        alert(`A palavra ${palavra} não é um palíndromo`)
    }
}
verificarPalindromo(palavra)