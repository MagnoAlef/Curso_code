/**
 * Escreva um programa em js que seja capaz de calcular a tabuada de um determinado numero
 * de 1 a 20 , o programa deve começar pedindo o numero a ser usado nos calculos e entao salvar 
 * todos os resultados de multiplicações de 1 a 20 usando o numero informado dentro de uma variavel 
 * do tipo string. Depois o programa deve exibir esses resultados e finalizar.
 */
let tabuada = prompt('digite um numero:')
numero = ''
for (let i = 1 ; i <= 4 ; i ++ ){
    num = i * tabuada
   numero = numero + num +'\n'
    alert(`temos a multiplicação de ${i} x ${tabuada} = ${i*tabuada}`)
}
alert(`Temos os numeros\n ${numero}`)