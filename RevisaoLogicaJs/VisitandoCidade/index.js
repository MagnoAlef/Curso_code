/**
 * Escreva um programa em js que peça o nome de um turista e então 
 * pergunte se ele ja visitou alguma cidade.Caso a resposta seja sim, pergunte o 
 * nome da cidade e o armazene em uma variavel, e então continue perguntando se o turista 
 * visitou alguma outra cidade até que a resposta seja não. no fim,o
 * programa deve exibir o nome do turista , quantas cidades ele visitou
 */

//Minha solução
const nome = prompt('Qual seu nome turista:')
let opcao = prompt('Você visitou alguma cidade:[Sim]/[Nao]')
let cidades = ''
let totalCidade = 0
while(opcao === 'Sim'){
if(opcao==='Sim'){
    totalCidade = totalCidade + 1
}
    let nomeCidade = prompt('Qual o nome da cidade que você visitou:')
    opcao = prompt('Você visitou Alguma outra cidade:[Sim]/[Nao]:')
    cidades = cidades + nomeCidade + "\n"
}
alert(`O turista ${nome} Visitou o total de  ${totalCidade}  cidades foram elas\n${cidades} `)

//Solução professor
/**
 * 
const turista = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
 */