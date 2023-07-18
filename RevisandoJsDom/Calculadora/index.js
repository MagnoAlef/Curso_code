const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// desabilitar caracteres inexistentes
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Funcionalidades dos botoes
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

//Limpar calculadora
document.getElementById('clear').addEventListener('click',function(){
    input.value = ''
    input.focus()
})

//Botao =
document.getElementById('equal').addEventListener('click',calculate) // Pegando o botao =  e associando a funcao de calcular para ele

input.addEventListener('keydown',function(ev){
ev.preventDefault()
if(allowedKeys.includes(ev.key)){ // ev.key teclas
    input.value += ev.key
    return
} 
if(ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
}
if(ev.key === 'Enter'){

    calculate()

}

function calculte(){
    const resul = eval(input.value)  //eval avaliar o codigo e executa 
    resultInput.value = resul
    //console.log('Calculado')
}

}) // heydown quando a tecla foi apertada