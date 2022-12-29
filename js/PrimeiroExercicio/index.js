 var nome = window.prompt('Insira seu primeiro nome:')
 var sobrenome = window.prompt('Insira seu sobrenome:')
 var campoEstudo = window.prompt('Insira seu campo de estudo:')
 var anoNascimento = window.prompt('Insira seu ano de nascimento:')
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
const idade = anoAtual - anoNascimento
// console.log('Seu nome completo e ',nome , '', sobrenome ,'Seu campo de estudo é ', campoEstudo ,'Sua idade e ',idade)
alert(
    "Recruta cadastrado com sucesso:\n " +
    "\nnome completo: " + nome + ' ' + sobrenome +
    "\nCampo de estudo: " + campoEstudo +
    "\nidade: " + idade
)
console.log(`Seu nome completo é ${nome} ${sobrenome}, Seu campo de estudo é ${campoEstudo} e sua idade é ${idade}`)
// \n quebra de linha 