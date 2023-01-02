/**
 * Escreva um programa em js que comece perguntando pela quantidade inicial de dinheiro
 * disponivel e entao mostre na tela essa quantidade juntamente com as opções de adicionar e
 *  remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve
 * mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover 
 * dinheiro deve fazer o mesmo, porem subtraindo o valor.A opção de sair deve encerrar o programa.
 */
let dinheiro = prompt('Quanto de dinheiro voce tem em caixa?')
 let dinheiroBruto = parseInt(dinheiro)
//opcao = prompt('Deseja continuar esta  operação:[Sim]/[Não]')
// dinheiroAtual = dinheiroBruto
 let opcao = 'Sim'
while (opcao === 'Sim'){
    alert(`Voce tem ${dinheiroBruto} reais na conta :`)
    saqueDeposito = prompt('Voce deseja realizar alguma ação de  saque ou deposito?\n [1] Saque \n [2] Deposito:')
if(saqueDeposito === '1'){
     let saque = prompt('Quanto deseja sacar?')
     dinheiroBruto = parseInt(dinheiroBruto) - parseInt(saque)
}if(saqueDeposito === '2'){
   let  deposito = prompt('Quanto deseja Deposita?')
   dinheiroBruto = parseInt(dinheiroBruto) + parseInt(deposito)
}
opcao = prompt('Deseja continuar operação:[Sim]/[Não]')
}
alert(`Temos o total de ${dinheiroBruto} reais  depois da operação realizada:`)