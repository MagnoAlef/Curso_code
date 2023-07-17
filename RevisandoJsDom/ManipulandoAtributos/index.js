const input = document.getElementById('input')

document.getElementById('value').addEventListener('click' , function(){ //atribuindo valor no atributo
     input.value = input.value === '' ? 'Olá,Mundo!!!' : '' 

   //  input.getAttribute('value') // Pega o valor pre definido  no html
})

document.getElementById('type').addEventListener('click' , function(){ // mudando tipo do input
    input.type = input.type !== 'radio' ? 'radio' : 'text' // Forma de troca de tipo do input

  //  input.setAttribute('type' , 'radio') // Forma de troca de tipo do input
})

document.getElementById('placeholder').addEventListener('click',function(){ //Inserindo placeholder no input
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click',function(){ //desabilitando o disable
    input.setAttribute('disabled' , !input.disabled)
})

document.getElementById('data').addEventListener('click',function(){
    const data = input.dataset.somethingElse
    console.log('O valor do atributo data-something-else é : '+ data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log('O valor agora  do atributo data-something-else é : '+ input.dataset.somethingElse)
//dataset referencia os data do html
})