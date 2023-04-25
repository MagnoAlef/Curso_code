/**
 * Escreva um programa em js que comece perguntando pela quantidade inicial de dinheiro
 * disponivel e então mostre na tela essa quantidade juntamente com as opções de adicionar e 
 * remover dinheiro e uma opção de Sair.Ao clicar na opção de adicionar dinheiro o programa deve
 * perguntar pela quantidade a ser adicionada , somar esse valor com a quantidade inicial e então 
 * mostrar novamente o menu com a quantidade de dinheiro e as opções.A opção de remover 
 * dinheiro deve fazer o mesmo, porem subtraindo o valor. A opção de sair deve encerrar o programa.
 */
let dinheiro = parseFloat(prompt('Quanto de dinheiro você tem na conta?'))
let opcao = ''
do{
opcao = prompt('Seu saldo atual é ' + dinheiro + ' reais Deseja Adicionar  ou Remover Ou Sair?')
switch(opcao){
    case 'Adicionar':
        adicionarDinheiro = parseFloat(prompt('Qual o valor que deseja adicionar?'))
        dinheiro = dinheiro + adicionarDinheiro
        break
    case 'Remover':
        removerDinheiro = parseFloat(prompt('Qual o valor que deseja adicionar?'))
        dinheiro = dinheiro - removerDinheiro
        break  
    case 'Sair':
        alert('Finalizando programa:')
        break
    default:
        alert('Opção invalida:')          

}
}while( opcao != 'Sair')

/**
 * let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
  }
} while (opcao !== "3");
 */