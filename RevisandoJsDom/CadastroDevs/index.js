/**
 * Construa uma pagina web que permita cadastrar desenvolvedores suas tecnologias e tempos de experiencia
 * -> A pagina deve ter um input para o nome completo do 
 * desenvolvedor e um botao para adicionar uma nova tecnologia.
 * -> Ao clicar no botao um evento deve ser disparado criando no 
 * formulario uma nova linha de inputs contendo.
 * -> um campo de texto para  o nome da tecnologia.
 * -> um grupo de botoes tipo radio com as opções de tempo de 
 * experiencia ( por exemplo '0/2' '3/4 '5 ou mais)
 * -> um botão de remover que deve excluir essa linha.
 * -> O formulario tambem dever ter um botão de cadastrar que salva as informações do dev em um array
 * e limpa o formulario. para testar o funcionamento voce pode utilizar um simples console.log.
 * Para esse exercicio voce deve utilizar apenas eventos adicionais via js 
 * e a pagina deve funcionar sem acionar um recarregamento.
*/
const addTechBtn = document.getElementById('addTechBtn')
let inputRow = 0

function createLabel(text,htmlFor){
    const createLabel = document.createElement('label')
    createLabel.innerText = text
    createLabel.htmlFor = htmlFor
    return createLabel
}

function createInput(id,name,value,type='text',placeholder=''){
    const createInput = document.createElement('input')
    createInput.id = id
    createInput.name = name
    createInput.value = value
    createInput.type = type
    createInput.placeholder = placeholder
    return createInput
}



addTechBtn.addEventListener('click',function(){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li') // criar li
    let numberRow = inputRow 
    numberRow++
    newRow.id = 'inputRow'+numberRow // adicionar id diferente a li
    newRow.className = 'inputRow'
     
    const techNameLabel = createLabel('Nome:','techName'+numberRow ) // criar label 
    const techNameInput = createInput('techName-'+numberRow,'techName' , null) //criar input

    newRow.append(techNameLabel,techNameInput) // adicionar label e input na li

    stackInputs.append(newRow) //adicionar li dentro da ul



})