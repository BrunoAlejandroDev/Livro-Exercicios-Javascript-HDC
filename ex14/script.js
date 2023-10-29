//Verificar se ano é bissexto. Um ano é bissexto se for dividido por 4, exceto os que são divisíveis por 100 mas não por 400

// Perguntar qual o ano
const ano = Number(prompt('Digite o ano'))

// função para verificar se o ano é bissexto
function verificarBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        alert(`O ano ${ano} é um ano bissexto`)
    }
    else{
        alert(`O ano ${ano} não é bissexto`)
    }
}
verificarBissexto(ano)