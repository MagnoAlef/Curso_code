function addInput(){
    const ul = document.getElementById('inputs')
    const newLi = document.createElement('li')
    newLi.className = 'List-item'
    newLi.innerText = 'Novo input'

    const newInput= document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    //Aninhar esses elementos dentro de um nó existente

    newLi.appendChild(newInput) // Coloquei o input dentro da li
    ul.appendChild(li) // coloquei a li dentro da ul

}