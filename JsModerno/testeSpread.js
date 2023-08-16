const tows = ['Prontera','Izlude','Payon','Alberta','Geffen','Morroc']

console.log(tows) // Saida ['Prontera','Izlude','Payon','Alberta','Geffen','Morroc']
console.log(...tows) // Saida Prontera Izlude Payon Alberta Geffen Morroc
console.log(...tows[0]) // Saida P r o n t e r a

// clonar objetos interaveis

const townsCopy = tows
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({tows,townsCopy}) // Ira sair o mesmo resultado o Js faz referencias do array, pode causar problemas no codigo

const townsClone = [...tows] // Criar um novo array sem referencia ao anterior
townsClone.push('Aldebaran')
console.log({tows,townsCopy , townsClone})

const towsObj = {...tows}
const towsObjClone = {...towsObj}
towsObjClone.teste = "Test"


console.log({towsObj,towsObjClone})
