const arr = ["magno","juliana","julia","maria","marcos"]

//Adicionar Elementos no final do array -> push
arr.push("novoNome")
console.log('Adicionar elemento no final',arr)

//Adicionar Elementos no inicio do array -> unshift
arr.unshift("novoNome")
console.log('Adiconar elemento no começo',arr)

//Remover Elementos  no final do array e retorna o resultado-> pop
arr.pop()
console.log('remover elemento no final do array',arr)

//Remover Elementos no comeco do array -> shift
arr.shift()
console.log('remover elemento no inicio do array',arr)

//Pesquisar por um elemento
//includes -> verificar se o elemento esta incluido no elemento
const incluir = arr.includes('magno') // devolver true ou false
console.log('pesquisar de o elemento esta incluindo no array',incluir)

//pesquisar por indice 
//indexOf -> devolver o indice no array
const indice = arr.indexOf('juliana')
console.log(indice)

//Cortar e Concatenar
//slice -> corta criar uma copia de uma parte do array
const hobbits = arr.slice(0,2) // pega o 0 ,1 o 2 fica de fora.
const outros = arr.slice(-1) //pegar elementos de tras para frente.
console.log(hobbits)
console.log('outros',outros)

//Concatenar -> junta dois arrays
const sociedade = hobbits.concat(outros) // posso passar outros valores juntos 
console.log(sociedade)

//Substituição de Elementos
//splice -> remover elementos de um array e substituir por outros
//ela pega o indice , ver quantos tem que excluir depois desse indice , e depois substituir pelo elemento proposto
const a = sociedade.splice(indice,1,"teste")
console.log('teste',sociedade)
console.log('novoTeste',a)

//Iterar sobre os Elementos do array
for (let i = 0 ; i < sociedade.length;i++){
     const elemento = sociedade[i]
     console.log(`${elemento} se encontra na posição ${i}`)
 }

 const teste = ['teste1','teste2','teste3','teste4']

 for (let i = 0 ; i < teste.length; i++){
    console.log(`${teste[i]}`)
 }