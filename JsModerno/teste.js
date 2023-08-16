const pessoa = {
    name : 'magno',
    age : 26,
    city : ['leme', 'prado']
}

const nome = pessoa.name
const idade = pessoa.age
const cidade = pessoa.city
console.log(nome,idade,cidade)

//Modelo com desestruturação

const {name,age,city} = pessoa

console.log(name,age,city)

const criarUsuario = (pessoa) =>{
return{
    nome : pessoa.name,
    idade : pessoa.age,
    cidade : pessoa.city
}
}
const pessoas = criarUsuario(pessoa)
console.log(pessoas)

const criarUsuarioDesestruct = ({name,age,city}) => {
return{
    name,
    age,
    city
}
}
const chamadaFuncao = criarUsuarioDesestruct(pessoa)
console.log(chamadaFuncao)