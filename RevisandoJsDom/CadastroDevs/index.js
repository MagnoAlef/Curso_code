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

function createLabel(text , htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function creatInput(id,value,name,type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input     
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++ 
    newRow.id = 'inputRow-'+rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('nome', 'techName-'+rowIndex) // Funcao que foi criada acima
    const techNameInput = creatInput('techName-'+rowIndex,null,'techName')

    const expLabel = createLabel('Experiencia: ')
    const id1 = 'expRadio-'+rowIndex+'.1'
    const expRadio1 = creatInput(id1,'0-2anos','techExp-'+rowIndex,'radio')
    const expLabel1 = createLabel('0-2anos',id1)
    const id2 = 'expRadio-'+rowIndex+'.2'
    const expRadio2 = creatInput(id2,'3-4anos','techExp-'+rowIndex,'radio')
    const expLabel2 = createLabel('3-4anos',id2)
    const id3 = 'expRadio-'+rowIndex+'.3'
    const expRadio3 = creatInput(id3,'5+anos','techExp-'+rowIndex,'radio')
    const expLabel3 = createLabel('5+anos',id3)

    //Remover

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click' , function(){
        stackInputs.removeChild(newRow)
    })
   
    newRow.append( // append -> posso adicionar mais de um elemento
techNameLabel,techNameInput,expLabel,expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3,removeRowBtn
   )
   
   stackInputs.appendChild(newRow) // adicionou o li dentro da ul

})

form.addEventListener('submit' , function(ev){
    ev.preventDefault()
    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow') // vem do nome da classe criada acima
let technologies = []
    inputRows.forEach(function(row){
       const techName = document.querySelector('#'+row.id+'input[name="techName"]').value
       const techExp = document.querySelector('#'+row.id+'input[type="radio"]:checked').value
       technologies.push({name:techName , exp:techExp})

    })
const newDev = {fullname: fullnameInput.value , technologies:technologies}
developers.push(newDev)
alert('Dev cadastrado com sucesso:')
fullnameInput.value = ''
inputRows.forEach(function(row){
    row.remove()
})
console.log(developers)
})