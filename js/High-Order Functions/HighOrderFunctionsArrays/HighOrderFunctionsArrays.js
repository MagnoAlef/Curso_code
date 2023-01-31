const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]
//Map
//const nomes = personagens.map((x) => x.nome) // meu exemplo
const nomes = personagens.map(function(personagem){ // Exemplo professor
   return personagem.nome  
} )
/*
codigo abaixo com o mesmo comportamento do map
const nomes = []
   for (let i = 0 ; i < personagens.length ; i ++){
     nomes.push(personagens[i].nome)
   }
*/
  console.log(nomes)
//------------------------------------------------  
// Filter


/*  codigo abaixo com o mesmo comportamento do filter
const orcs = []
for (let i = 0 ; i < personagens.length ; i ++){
if(personagens[i].raca === 'Orc'){
    orcs.push(personagens[i])
}   
}
console.log(orcs)
*/
 /* const filtro = personagens.filter((x)=> { // meu exemplo do filter
     return  x.raca  === 'Orc'
 })
 console.log(filtro)
*/
const orcs = personagens.filter(function (personagem){ // Exemplo professor
    return personagem.raca === 'Orc'
})
console.log(orcs)
 //-----------------------------------
 //Reduce ->  serve para tranformar um array em um outro valor
 const nivelTotal = personagens.reduce(function(valorAcumulado , personagem){
return valorAcumulado + personagem.nivel    
 },0) // 0 Valor inicial do valor Acumulado

 console.log(nivelTotal)

 const racas = personagens.reduce(function(valorAcumulado,personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
 },{})
 console.log(racas)
//---------------------------------------
//Sort -> ordenar  Porem alterar o array original
personagens.sort(function(a , b){
    return  a.nivel - b.nivel // ordem crescente -> decrescente b.nivel - a.nivel
})
console.log(personagens)