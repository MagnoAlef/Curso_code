/**
 * Construa uma pagina web que permita monta a escalação de um time de jogadores.
 * Nele devera ser possivel:
 * -> Escalar um jogador
 * -> Informar a posição do jogador
 * -> Informar o nome do jogador
 * -> Informar o numero da camisa
 * Ter um botao de escalar que pergunta ao usuario se ele deseja confirmar a escalação
 * daquele jogador e então insere as informações em uma lista da pagina
 * Apos o jogador ser escalado os campos de texto devem ser limpos .
 * Remover um jogador 
 * -> Informar o numero da camisa do jogador 
 * -> Ter um botao de remover que pergunta ao usuario se ele deseja confirmar a remoção daquele jogados
 * e entao exclui ele da lista na pagina
 * Apos o jogador ser removido o campo de texto dever ser limpo
 * Dica:Lemnrando que e possivel acessar o texto de um input atraves da propriedade value
 */

function addPlayer(){
const ul = document.getElementById('team-list')
const position = document.getElementById('position').value
const name = document.getElementById('name').value
const number = document.getElementById('number').value

const newLi = document.createElement('li')
newLi.id = 'player'+number
newLi.innerText = `Posição:${position} , Nome:${name} , Numero:${number}`

ul.appendChild(newLi)
document.getElementById('position').value = ''
document.getElementById('name').value = ''
document.getElementById('number').value = ''

}

function removePlayer(){
    const removePlayer = document.getElementById('numberToRemove').value
    const removes = document.getElementById('player'+removePlayer)
    removes.remove()
    document.getElementById('numberToRemove').value = ''

}