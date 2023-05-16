/**
 * Escopo contexto onde a variavel foi declarada
 */
let pokemom = 'Charmander' // Variaveis no escopo global pode ser usada nas funcoes

function evoluir(){
    pokemom = 'Charmeleon'
}
evoluir()
console.log(pokemom) //Saida  Charmeleon
/**
 
function criarAnimal(){
    let animal = 'Cachorro' // Variavel no escopo interno
}
criarAnimal()
console.log(animal) // Erro Animal nao definido
* 
 */
// function avalirNota(nota){
//     if(nota > 60){
//         var aprovado = true
//         let situacao = "Aprovado"
//     }else{
//         var aprovado = false
//         let situacao = "Reprovado"
//     }
//     console.log(nota)
//     console.log(aprovado)
//     console.log(situacao)
//     // var fica disponivel no escopo mais externo , Tentar evitar o uso dele
// }
// avalirNota(83)
// avalirNota(49)
