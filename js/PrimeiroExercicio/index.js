nome = window.prompt('Insira seu primeiro nome:')
sobrenome = window.prompt('Insira seu sobrenome:')
campoEstudo = window.prompt('Insira seu campo de estudo:')
anoNascimento = window.prompt('Insira seu ano de nascimento:')
idade = 2022 - anoNascimento

// console.log('Seu nome completo e ',nome , '', sobrenome ,'Seu campo de estudo é ', campoEstudo ,'Sua idade e ',idade)
console.log(`Seu nome completo é ${nome} ${sobrenome}, Seu campo de estudo é ${campoEstudo} e sua idade é ${idade}`)