/**
 * Funcoes que nao possuem nomes 
 */
function somar(a,b){
    return a + b
}

const operacao = somar // Quando colocar o () to dizendo que operação e igual o resultado da funcao
//Quando tiro o parantese to dizendo que operacao e igual a funcao somar

console.log(operacao(2,4))

const subtrair = function subtracao(a,b){ // Posso tirar o subtracao , tornaria a funcao anonima
    return a-b
}
console.log(subtrair(5,3))

olaMundo()
oiMundo()
function olaMundo(){
    console.log("Ola,Mundo!") // A funcao que e nomeada ela tera sua execucao, porque as funcoes nomeadas sao jogadas para o inicio do codigo
}
const oiMundo = function(){
    console.log("Ola,Mundo!") // A funcao que nao e nomeada ira da erro de inicialização porque a chamada esta sendo primeiro que a criação da funcao
}
//Se a a chamada do oiMundo fosse apos a funcao ela iria funcionar normalmente