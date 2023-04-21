/**
 * Escreva um programa em js que simule um menu interativo com 5 opções diferentes.O
 * programa devera iniciar mostrando as 5 opções disponiveis as quatro primeiras não precisam de 
 * nenhuma funcionalidade especifica a ultima opção deve ser a opção "Encerrar".Ao clicar em alguma
 * das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção
 * escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso  deve continuar 
 * acontecenco ate que o usuario escolha a opção"Encerrar".Ao escolher uma mensagem dizendo
 * que o sistema esta sendo encerrado deve ser exibida na tela e então o programa e finalizado.
 *  */
let opcao = ''
do {
     opcao = prompt('[1] nome\n[2] sexo\n[3] idade\n[4] nascimento\n[5] Encerrar')

   switch(opcao){
     case '1':
        alert('Você selecionou a opção Nome:')
        break
        case '2':
        alert('Você selecionou a opção Sexo:')
        break
        case '3':
        alert('Você selecionou a opção Idade:')
        break
        case '4':
        alert('Você selecionou a opção Nascimento:')
        break
        case '5':
        alert('Ate mais:')
        break
        default:
            alert('Opção invalida:')
   }  
}while(opcao != '5')
console.log(opcao)

/**
let opcao = ""

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcao !== "5");
 */