/**
 * Construa uma pagina web que permita montar a escalação de um time de jogadores.
 * Nela sera possivel.
 * Escalar um jogador
 * -> informar a posição do jogador a ser escalado para o time
 * ->informa o nome do jogador 
 * ->informar o numero da camisa do jogador
 * Ter um botao Escalar que pergunta ao usuario se ele deseja confirmar a escalação 
 * daquele jogador e entao insere as informações em uma lista na pagina 
 * Apos o jogador ser escalado os campos de texto devem ser limpos.
 * Remover um jogador
 * ->informar o numero da camisa do jogador
 * -> ter um bota Remover que pergunta ao usuario se ele deseja confirmar a remocao daquele
 * jogador e entao excluir ele da lista da pagina
 * Apos o jogador ser removido o campo de texto deve ser limpo
 * Dica:lembrando que e possivel acessar o texto de um input atraves da propriedade value.
 */

function addNewPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    console.log(position,name,number)
    confirmacao = confirm(`Deseja adicionar o ${position} ${name} com o numero da camisa ${number}`)
    if(confirmacao){
        const addPlayer = document.getElementById('teamList')
        const listPlayer = document.createElement('li')
        listPlayer.id = 'player-' + number
        listPlayer.innerText = `${position} : ${name} ${number}`
        addPlayer.appendChild(listPlayer) // Adicionando na ul a li criada
        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}
function removePlayer(){
 const number = document.getElementById('numberToRemove').value
 const removeListPlayer = document.getElementById('player-' + number)
 const confirmation =  confirm(`Tem certeza que deseja remover o ${removeListPlayer.innerText} ?`)
    if(confirmation){
        removeListPlayer.remove()
    }
    document.getElementById('numberToRemove').value = ''

}




























































// function addNewPlayer(){
//     const position = document.getElementById('position').value //Pegando o valor do input
//     const name = document.getElementById('name').value
//     const number = document.getElementById('number').value
//     console.log({position,name,number})
//     const confirmacao = confirm("Escalar " + name + " como " + position + '?')
//     if(confirmacao){ // sempre se atentar com nomes reservados
//         const teamList= document.getElementById('teamList') //Pegando o elemento da ul do html
//         const playerItem = document.createElement('li') //criando elemento li no html
//         playerItem.id = 'player-' + number // id que sera criado apartir dessa propriedade
//         playerItem.innerText = position + ': ' + name + "(" + number + ")" // nome que aparecera na pagina
//         teamList.appendChild(playerItem) //adicionado na ul a li 

//         document.getElementById('position').value = '' // Limpando input
//         document.getElementById('name').value = ''
//         document.getElementById('number').value = ''
//     }
// }
//  function removePlayer(){
//      const number = document.getElementById('numberToRemove').value
//      const playerToRemove = document.getElementById('player-' + number) // id criado na li da funcao acima
//  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + '?')
//  if(confirmation){
//     document.getElementById('teamList').removeChild(playerToRemove) //selecionar a ul toda e remove todos os elementos das li
//      // playerToRemove.remove() remocao direta
//      document.getElementById('numberToRemove').value = ''
//  }
//     }