
function register(element){
    const usuario = element.children.username.value
    const senha = element.children.password.value
    const confimarSenha = element.children.passwordConfirmation.value
    if(senha === confimarSenha) {
        alert("Usuario Registrado")
    }else{
        alert("As senhas nao conferem")
    }
    console.log({usuario,senha,confimarSenha})
}