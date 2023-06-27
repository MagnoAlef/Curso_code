function register(element){
console.log(element) // Saida o proprio botao Do html, usando o parenNode a saida seria a section
const username = element.children.username.value
const password = element.children.password.value
const passwordConfirmation = element.children.passwordConfirmation.value
console.log({username,password,passwordConfirmation})

if(password === passwordConfirmation){
    alert(`Usuario ${username} Confirmado`)
}else{
alert('Senhas nao conferem')
}
}