let pokemon = 'Charmander'
function evoluir(){
    pokemon = 'Charmeleon'
}
console.log(pokemon) // Saida  'Charmander'
evoluir()
console.log(pokemon) // Saida  'Charmeleon'
//Quando uma variavel e declarada no escopo global ela pode ser alterada
//Quandp uma varaivel e declarada num escopo interno ela nao pode ser alterada
//EXEMPLO

function criarAnimal(){
    let animal = 'gato'
}
criarAnimal()
console.log(animal) // Ira da erro , porque a varivel animal , foi declarada somente no escopo da funcao
