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
//Concat -> concatenar
const sociedade  = arr.concat('teste','testes1')
console.log(sociedade)

//Substituir Elementos
//splice -> remove um grupo de elementos e subtituir por outro
const a =  arr.splice(4,1 , 'superTeste') //Passa o indice de onde comecar a remover, segundo parametro quantos elementos deseja excluir, terceiro parametro o que e para substituir  
console.log(arr)
console.log(a) // Vai trazer o elemento removido

//Iterar sobre os elementos do array
for (let indice = 0 ; indice < arr.length; indice++){
    console.log(arr[indice])
}