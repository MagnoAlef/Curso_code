function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value // currentTarget evento que foi disparado | alvo do evento
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
    if(password === passwordConfirmation){
        alert('Usuario ' + username + ' Registrado!')
    }else{
        alert('As senhas não conferem:')
    }
}
const button = document.getElementById('register-button')
//Evento adicionado no botao
button.addEventListener('click',register)  // Passando a funcao sem o parentese , porque quero pegar a funcao em si, não o resultado dela


function removeListener(){
    button.removeEventListener('click',register)
    alert('Evento removido') // Remover o clique da funcao acima | clique do botao
}
button.addEventListener('mouseover',function(ev){
    console.log(ev.currentTarget) //A Ação do clique foi removida porem a de passar o mouse acima continuar funcionando
})