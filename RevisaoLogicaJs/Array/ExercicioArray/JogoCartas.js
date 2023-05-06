/**
 * Escreva um programa em js para simular um baralho de cartas . o programa deve iniciar mostrando
 * na tela um menu interativo contendo a quantidade cartas que estão atualmente no baralho e as opções de Adicionar
 * uma carta Puxar uma carta e Sair. Ao escolher Adicionar uma carta o programa deve perguntar o 
 * nome da carta e adiciona-la no topo do baralho. Ao escolher Puxar uma carta o programa deve retirar a 
 * carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa so deve ser encerrado ao 
 * escolher a opção de Sair, caso contrario deve voltar ao menu.
 */
const baralho = []
 let opcao = ''
 while(opcao !== '3'){
    opcao = prompt(' O baralho contem ' + baralho.length + '\n' + '[1] para adicionar uma carta\n[2]para puxar\n[3]Sair:')
    switch(opcao){
        case '1':
            novaCarta = prompt('Qual o nome da carta que deseja adicionar ao baralho?')
            baralho.push(novaCarta)
            break
        case '2':
            let cartaPuxada = baralho.pop()
            alert('A carta '+ cartaPuxada + ' foi removida do baralho')
            break 
        case '3':
            break
        default:
            alert('Opção invalida')          
    }
 }

 /**
  * const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");
  */