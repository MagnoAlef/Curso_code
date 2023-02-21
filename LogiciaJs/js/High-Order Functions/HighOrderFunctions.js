//Funcao que recebe outra funcao como parametro
function calcular ( a,b,operacao){
    console.log('Realizando uma operação:')
    const resultado = operacao (a,b) // substituido operacao por soma(a,b)
return resultado
}
function somar(x,y){
    console.log('Realizano uma soma.')
    return x + y
}
 console.log(calcular(3,5,somar)) // se tivesse chamando o somar com () iria pegar o resultado da funcao somar

 console.log(calcular(8,4,function(x,y){
    console.log('Realizando uma subtração')
    return x - y
 }))

 //--------------------------------------
function exibirElemento(elemento , indice , array){
    console.log({elemento,indice,array})
}

const lista = ['maça','banana','laranja','limao']

for (let i = 0; i < lista.length; i++){
exibirElemento(lista[i],i,lista)
}

// ------Foreach-----------
lista.forEach(exibirElemento)

lista.forEach(function(elemento,indice,array){
    console.log({
        elemento,
        indice,
        array
    })
})