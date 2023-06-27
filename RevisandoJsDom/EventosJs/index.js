function register(ev){
    console.log(ev) // ev disponivel por causa do addEventListener
    const username = ev.currentTarget.parentNode.children.username.value
    const password = ev.currentTarget.parentNode.children.password.value
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuario' + username + 'cadastrado')
    }else{
        alert('Senhas não conferem')
    }
    //currentTarget -> alvo do evento , elemento que acionou o evento
}

const button = document.getElementById('register-button') // Pegando o botao que esta sem evento no html
//Adicionando evento no botao
button.addEventListener('click',register) //Funcao sem o () porque quero a funcao em si , não o resultado
//Primeiro parametro do addEventListener String com o evento que desejo adicionar
//Segundo parametro funcao callback -> callback funcoes que em algum momento sera chamada de volta

//Remover Eventos

function removeEvent(){
    button.removeEventListener('click' , register) // Remover um evento que seja do tipo click que tenha essa funcao associada
    alert('Evento removido.')
}

button.addEventListener('mouseenter' , function(ev){
    console.log(ev.currentTarget) 
})