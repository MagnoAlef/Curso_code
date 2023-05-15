function dobro(x){
    alert('o dobro de ' + x + 'é ' + x * 2)
}
dobro(2)

function dizerOla(name = 'Mundo'){ /** caso a chamada da funcao nao tenha parametro , posso usar um ja definido  */
    alert('Olá, ' + name + "!")
}
dizerOla('magno')

function soma(a,b){
    alert('O resultado da soma é ' + (a+b))
}
soma(7,6)

/**
 * A ordem dos parametros são muito importante
 */

function criarUsuario ( nome , email , senha , tipo =  'adm'){
    const usuario = { /**no Js o objeto que tenha ao mesmo nome da propriedade com o nome do valor pode ser abreviado -> exemplo nome: nome -> nome */
        nome: nome, // nome
        email: email, // email
        senha:senha, // senha
        tipo:tipo //tipo
    }
    console.log(usuario)
}
criarUsuario("magno", 'magno.alefb@gmail.com' , '1234' ) // Saida de forma correta

function novoUsuario( nome , tipo = 'adm', email , senha ){ // Geralmente valores padroes sao usados no final dos parametros 
    const usuario = { /**no Js o objeto que tenha ao mesmo nome da propriedade com o nome do valor pode ser abreviado -> exemplo nome: nome -> nome */
    nome: nome, // nome
    email: email, // email
    senha:senha, // senha
    tipo:tipo //tipo
}
console.log(usuario)
}
novoUsuario("magno", 'magno.alefb@gmail.com' , '1234' ) //Saida de forma incorreta

// funcao que tenha muitas parametros , tendem a ser criado objeto e passar ele como parametro
function muitosParametros( nome , telefone , endereco , aniversario , email , senha){ 
console.log( nome , telefone , endereco , aniversario , email , senha)
}
muitosParametros('nome' , 'telefone' , 'endereco' , 'aniversario' , 'email' , 'senha')


function objetoComoParametro(usuario){
    usuario.nome,
    usuario.telefone,
    usuario.endereco,
    usuario.aniversario,
    usuario.email,
    usuario.senha
    console.log( usuario.nome , usuario.telefone , usuario.endereco , usuario.aniversario , usuario.email , usuario.senha)
}
const dadosUsuario  = {
    nome:'magno',
    telefone:'31973286276',
    endereco:'Rua Eunice Barbosa dos Santos',
    aniversario:'20/10/1994',
    email:'magno.alefb@gmail.com',
    senha : 1234
}
objetoComoParametro(dadosUsuario)