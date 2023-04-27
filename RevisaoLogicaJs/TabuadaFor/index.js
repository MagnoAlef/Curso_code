/**
 * Escreva um programa em js que seja capaz de calcular a tabuada de um determinado numero
 * (1 a 20).O programa deve começar pedindo o número a ser usado nos calculos e então salvar 
 * todos os resultados de multipliação de 1 a 20 usando o numero informado dentro de uma variavel 
 * do tipo string.Depois o programa deve exibir esses resultados e finalizar.
 * 
 */

let numero = prompt('Digite um numero que deseja saber a tabuada de 1 a 20:')
let number = ''
for (let i = 1 ; i <= 20 ;i++ ){
    number = number + '\n' + i * numero + '-'
}
alert(number)
/**
 * Professor
const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)
 */