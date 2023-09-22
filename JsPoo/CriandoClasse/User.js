/**
 * User, que devera possuir:
 * .um atributo fullname, atribuivel na instanciação
 * .um atributo email, atribuivel na instanciação
 * .um atributo password atribuivel ma instanciação
 * .um metodo login, que tem como parametro um email e senha e 
 * devera comparar esses parametros com o email e a senha do usuario e mostrar 
 * uma mensagem no console dizendo se o login foi bem sucedido ou não
 */

class User {
    constructor(fullname , email , password){
        this.fullname = fullname
        this.email = email
        this.password = password

    }
    login(email,senha){
        if(this.email === email && this.password === senha ){
            console.log(`${this.email} e ${this.senha} São iguais a ${email} e ${senha}`)
        }else{
            console.log('Email e senha não correspondem.')
        }

    }
}

const usuario = new User('Magno', 'Magno.alefb@gmail.com' , '12345')
console.log(usuario)

usuario.login('Magno.alefb@gmail.com','12345')
usuario.login('Magno.alefb@gmail.','12345')