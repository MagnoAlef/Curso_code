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
const devForm = document.getElementById('devForm')
let inputRow = 0
const developers = []

function createLabel(text,htmlFor=''){
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
    inputRow++
    newRow.id = 'inputRow'+numberRow // adicionar id diferente a li
    newRow.className = 'inputRow'
     
    const techNameLabel = createLabel('Nome:','techName'+numberRow ) // criar label 
    const techNameInput = createInput('techName-'+numberRow,'techName' , null) //criar input

    const expLabel = createLabel('Experiência:') //Criar o texto que ira fica na frente dos inputs radios
    const expRadio = createInput('expRadio'+numberRow,'0-2','tech'+numberRow,type='radio') // criar input radio
    const expRadioLabel = createLabel('0-2','expRadio'+numberRow) //criar a label do radio
    const expRadio1 = createInput('expRadio'+numberRow,'3-4','tech'+numberRow,type='radio')
    const expRadioLabel1 = createLabel('3-4','expRadio'+numberRow)
    const expRadio2 = createInput('expRadio'+numberRow,'5-+','tech'+numberRow,type='radio')
    const expRadioLabel2 = createLabel('5-+','expRadio'+numberRow)

    const btnRemove = document.createElement('button')
    btnRemove.innerText = 'remove'
    btnRemove.type = 'button'
    btnRemove.addEventListener('click',function(){
        stackInputs.removeChild(newRow)
    })

    
    newRow.append(techNameLabel,techNameInput,expLabel,expRadio,expRadioLabel,expRadio1,expRadioLabel1,expRadio2,expRadioLabel2,btnRemove) // adicionar label e input na li

    stackInputs.append(newRow) //adicionar li dentro da ul



})
//Estuda mais essa parte
form.addEventListener('submit', function (ev) {
    ev.preventDefault()
  
    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')
  
    let technologies = []
    inputRows.forEach(function (row) {
      // #rowId input[name="techName"]
      const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
      const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
      technologies.push({ name: techName, exp: techExp })
    })
  
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')
  
    fullnameInput.value = ''
    inputRows.forEach(function (row) {
      row.remove()
    })
  
    console.log(developers)
  })