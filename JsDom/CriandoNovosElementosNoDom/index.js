function addInput() {
const ul = document.getElementById('inputs')

const newLi = document.createElement('li')
newLi.className = 'item-classe'
newLi.innerText= 'Novo input:'

const novoInput = document.createElement('input')
novoInput.id = 'id-novo-input'
novoInput.type = 'text'

newLi.appendChild(novoInput)
ul.appendChild(newLi)

  }