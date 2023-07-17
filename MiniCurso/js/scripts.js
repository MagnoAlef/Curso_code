// alert('Meu primeiro js')
// console.log('Hello,Word!!!')

function calculateTip(event){
event.preventDefault() // previnir que a pagina recarregue toda vez

let bill = document.getElementById('bill').value
let serviceQualit = document.getElementById('serviceQualit').value
let people = document.getElementById('people').value

if(bill == '' | serviceQualit == 0){
    alert('Por favor preencha os valores.')
    return 
}

if(people == '' | people <= 1){
    people = 1
    document.getElementById('each').style.display = 'none'
}else{
    document.getElementById('each').style.display = 'block'
}

let total = (bill * serviceQualit) / people

total = total.toFixed(2) // colocar somente com duas casas depois da virgula
document.getElementById('tip').innerHTML = total
document.getElementById('totalTip').style.display = 'block'

}

document.getElementById('totalTip').style.display = 'none' // sumindo com algum elemento da tela  
document.getElementById('each').style.display = 'none'  
document.getElementById('tipsForm').addEventListener('submit', calculateTip) // pegando o id do form , esperando o evento submit e falando para executar a funcao de calcular