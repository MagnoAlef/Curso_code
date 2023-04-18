/**
Escreva um programa em js que permitar inserir dois valores numericos e entao calcule
o resultado das quatro operações basicas(soma,subtração,multiplicação e divisão)
Apos calcular os resultados o programa deve exibi-los na tela
 */
const num = parseFloat(prompt('Digite o primeiro numero da operação:'))
const numero = parseFloat(prompt('Digite o segundo numero da operação:'))

const soma = num + numero
const subtracao = num - numero
const multiplicação = num * numero
const divisão = num / numero
 alert(`Soma:${soma}\nSubtração:${subtracao}\nMultiplicação:${multiplicação}\nDivisão:${divisão}`)