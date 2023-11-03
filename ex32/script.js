// Usando do while, crie um jogo de pedra, papel e tesoura contra o computador.

// criando um array para armazenar as opções
let opcoes = ["pedra", "papel", "tesoura"]

// definindo uma variável para definir o jogo como ativo
let jogoAtivo = true;

// criando o jogo com a estrutura do while
do{
    let escolhaUsuario = prompt('Escolha sua opção: pedra, papel ou tesoura?')
    let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]

    console.log(`Você escolheu: ${escolhaUsuario}`)
    console.log(`O computador escolheu: ${escolhaComputador}`)

    // definindo os parâmetros do jogo
    if(escolhaComputador === escolhaUsuario){
        alert('Empate')
        console.log('Empate')
    }
    else if(
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') || 
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') || 
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
        ){
        alert(`Parabéns, você ganhou!`)
        //console.log(`Parabéns, você ganhou!`)
    }
    else{
        alert(`Poxa, você perdeu!`)
        //console.log(`Poxa, você perdeu!`)
    }

    // verificando se o usuário deseja jogar novamente
    let jogarNovamente = prompt('Deseja jogar novamente? Sim ou não?')
    if(jogarNovamente.toLowerCase() !== 'sim'){
        jogoAtivo = false;
    }

}while(jogoAtivo)