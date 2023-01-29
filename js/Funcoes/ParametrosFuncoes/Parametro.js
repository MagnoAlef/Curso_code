function dobro (a){
alert(`O dobro de ${a} = ${a * 2}`)
}
dobro(5) // o 5 se transforma no parametro passado que e o 'a'

function dizerOla (nome){
    alert(`Olá, ${nome}!`)
}
dizerOla('Magno')

function soma (a,b){
    alert(`A soma de ${a} + ${b} = ${a+b}`)
}
soma(5,4)

function criarUsuario(nome,email,senha,endereço){
    const usuario ={
        nome : nome,
        email : email,
        senha : senha ,
        endereço : endereço,
        //Obs: quando o nome da propriedade e do valor , for igual posso abreviar usando 
        //Somente o nome do valor
        //Posso usar usar valores padrao nos parametros
        //Sempre que possivel usar valores nos parametros finais
    }
    alert(`O nome do usuario é ${nome}:\nSeu email é ${email}\nSua senha é ${senha}\ne seu endereço é ${endereço}`)
}
criarUsuario('magno','magno@gmail.com','123445','Rua eunice barbosa dos santos')

function testeUsuario(nome,email,senha,endereço = 'Rua Eunice barbosa'){
    const usuario ={
        nome : nome,
        email : email,
        senha : senha ,
        endereço : endereço,
        //Obs: quando o nome da propriedade e do valor , for igual posso abreviar usando 
        //Somente o nome do valor
        //Posso usar usar valores padrao nos parametros
        //Sempre que possivel usar valores nos parametros finais
    }
    console.log(usuario)
}
testeUsuario('magno','magno@gmail.com','123445')

function testeComVariosParametros(usuario){
 

        usuario.nome,
        usuario.endereço,
        usuario.telefone,
        usuario.email,
        usuario.aniversario
    
console.log(dadosUsuario)
}
const dadosUsuario = {
    nome : 'Marcos',
    endereço : 'Leme do prado',
    telefone : '3100000',
    email : 'Marcos@gmail.com',
    aniversario : '20/10/1994',
}


 testeComVariosParametros(dadosUsuario)
function exemplo ( idade , sexo , familia ){
const teste = {
    idade : idade,
    sexo : sexo,
    familia : familia
}
console.log(teste)
 }
 exemplo("28","masculino","Barroso")