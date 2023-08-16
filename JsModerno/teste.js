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

//Rest parametros
function sum(...number){ // sempre que usar o rest parametros , ele deve ser o ultimo na lista de parametros
    return number.reduce((accum,num) => accum + num,0) 
}
console.log(sum(1,1))
console.log(sum(1,1,2,3,4,5))