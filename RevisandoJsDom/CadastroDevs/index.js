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

const stackInputs = document.getElementById('stackInputs')


const addTechBtn = document.getElementById('addTechBtn')

addTechBtn.addEventListener('click', function(){
    const stackInputs = document.getElementById('stackInputs')
    const newLi = document.createElement('li')
    newLi.className = 'testando'
   
    const newLabelNome = document.createElement('label')
    newLabelNome.htmlFor = 'teste'
    newLabelNome.innerText = 'Nome:'
   
    const input = document.createElement('input')
    input.className = 'teste'
    input.type='text'
   
    
    const newExperiencia = document.createElement('label')
    newExperiencia.htmlFor = 'testando'
    newExperiencia.innerText = 'Experiencia:'

    const inputRadio = document.createElement('input')
    inputRadio.className = 'teste'
    inputRadio.type= 'radio'
    inputRadio.value = '0-2'
    const createLabel = document.createElement('label')
    createLabel.htmlFor = 'algo'
    createLabel.innerText = '0-2'
    
    const inputRadio1 = document.createElement('input')
    inputRadio1.className = 'teste1'
    inputRadio1.type= 'radio'
    inputRadio.value = '3-4'
    const createLabel1 = document.createElement('label')
    createLabel1.htmlFor = 'algo'
    createLabel1.innerText = '3-4'
    
    const inputRadio2 = document.createElement('input')
    inputRadio2.className = 'teste2'
    inputRadio2.type= 'radio'
    inputRadio.value = '5 - +'
    const createLabel2 = document.createElement('label')
    createLabel2.htmlFor = 'algo'
    createLabel2.innerText = '5 - +'
    
    newLi.append(newLabelNome,input,newExperiencia,inputRadio,createLabel,inputRadio1,createLabel1 ,inputRadio2,createLabel2)


    stackInputs.appendChild(newLi)
})