function register(element){ // pelo meus testes os nomes tem que ser igual no html das propriedades
const username = element.children.username.value
const password = element.children.password.value
const passwordConfirmation = element.children.passwordConfirmation.value

if(password === passwordConfirmation){
    alert('Usuario ' + username + ' Registrado!')
}else{
    alert('As senhas não conferem:')
}
}

