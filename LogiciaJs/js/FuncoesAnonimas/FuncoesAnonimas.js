//Funcoes anonimas -> funcoes que nao tem nome
function somar (a,b){
    return a+b
}
const operacao = somar // nao estou passando () no somar ,Porque se estivesse passando estaria pegando o valor da operação da funcao

console.log(operacao(4,5))

const subtrair = function (a,b) { // caso de funcao anonima
return a - b    
}
console.log(subtrair(36,13))

//----------------------------------------------

olaMundo()
function olaMundo(){
    console.log('Olá,mundo!') // ira funcionar porque e uma funcao nomeada , mesmo estando sendo
    //declarada apos a chamada da funcao
}

const oiMundo = function (){
    console.log('Oi,Mundo!')
}
oiMundo() // tem que ser sequencial para funcionar , por ser uma funcao anonima
// Sempre declarada abaixo da criação da funcao.