const arr = ["magno","juliana","juliana","maria"]

//Adicionar Elementos no final do array -> push
arr.push("novoNome")

//Adicionar Elementos no inicio do array -> unshift
arr.unshift("novoNome")

//Remover Elementos  no final do array e retorna o resultado-> pop
arr.pop()

//Remover Elementos no comeco do array -> shift
arr.shift()

//Pesquisar por um elemento
//includes -> verificar se o elemento esta incluido no elemento
const incluir = arr.includes('magno') // devolver true ou false
console.log(incluir)

//pesquisar por indice 
//indexOf -> devolver o indice no array
const indice = arr.indexOf('magno')

//Cortar e Concatenar
//slice -> corta criar uma copia de uma parte do array
const hobbits = arr.slice(0,2) // pega o 0 ,1 o 2 fica de fora.
const outros = arr.slice(-4) //pegar elementos de tras para frente.
console.log(hobbits)
console.log(outros)

//Concatenar -> junta dois arrays
const sociedade = hobbits.concat(outros) // posso passar outros valores juntos 
console.log(sociedade)

//Substituição de Elementos
//splice -> remover elementos de um array e substituir por outros
//ela pega o indice , ver quantos tem que excluir depois desse indice , e depois substituir pelo elemento proposto
const a = sociedade.splice(indice,1,'teste')
console.log(a)

//Iterar sobre os Elementos do array
for (let i = 0 ; indice < sociedade.length;i++){
    const elemento = sociedade[i]
    console.log(`${elemento} se encontra na posição ${i}`)
}