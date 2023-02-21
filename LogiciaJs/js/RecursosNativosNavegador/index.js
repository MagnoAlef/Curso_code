let nome = "Magno"

console.log(nome) 
console.error(nome)
console.warn(nome)

 window.alert(nome)  // -> mensagem de alerta

nome = window.prompt('Insira seu nome:') // -> interação com usuario

console.log(nome)

let confirmacao = window.confirm('confirma essa ação?') // -> mensagem de confirmacao

console.log(confirmacao)
 
// window objeto global do navegador
// document interação direta com os documentos html