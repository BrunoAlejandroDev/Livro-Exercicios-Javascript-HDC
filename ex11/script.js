const idade = Number(prompt('Digite sua idade'))

function podevotar(id){
    if(id >= 18 && id <= 70){
        alert(`Sua idade é: ${id}. Voto obrigatório!`)
    }
    else if((id >= 16 && id < 18) || (id > 70)){
        alert(`Sua idade é: ${id}. Voto facultativo!`)
    }
    else{
        alert(`Sua idade é ${id}. Você não está apto a votar`)
    }
}
podevotar(idade)