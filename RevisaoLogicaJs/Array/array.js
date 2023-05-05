const arr = ['magno','juliana','julia','romao','maria','cicero','israel','snoper','spaiker']
console.log(arr)
//Adicionar elementos no final do array
//push
arr.push("teste")
console.log(arr)
//Adicionar elementos no inicio do array
//unshift
arr.unshift('teste')
//Remover Elementos no final
//pop
//Posso pegar o valor atribuindo ele a uma variavel
//EX-> const ultimoElemento = arr.pop()
arr.pop()
//Remover Elementos no inicio
//shift
arr.shift()  //posso atribuir ele a uma variavel tbm

//Pesquisar por uma elemento
//includes
const includes = arr.includes('juliana')
console.log(includes)
//indexOf pesquisar pelo indice
const indice = arr.indexOf('israel')
console.log(indice)

//Cortar e Concatenar
//Slice -> cortar
//Caso usar numeros negativos o -1 e o ultimo numero, caso queira pegar todos os numeros de traz para frente e so colocar o -1
const sliceTeste = arr.slice(1,5) // Não pega o ultimo indice
console.log(sliceTeste)