/**
 * Cadastros de recrutas
 * Escreva um programa em js qaue permita salvar informações de um recruta.
 * As informações a serem salvas são:
 * O primeiro nome 
 * O sobrenome
 * O campo de estudo 
 * O ano de nascimento
 * Depois o programa deve ser exibir o nome completo do recruta seu campo de 
 * estudo e sua idade (apenas baseada no ano de nascimento)
 */
const nome = prompt('Digite seu nome:')
const sobrenome = prompt('Digite seu sobrenome:')
const estudo = prompt('Digite sua area de estudo:')
const anoNascimento = parseFloat(prompt('Digite seu ano de nascimento:'))
const anoAtual = new Date()
console.log(anoNascimento)
console.log(anoAtual)

alert(`Novo recruta: ${nome} ${sobrenome}\nCampo de estudo: ${estudo}\nIdade:${anoAtual.getFullYear()-anoNascimento}`)