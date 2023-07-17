function useLigthTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}
function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor =  '#212529'
}

function switchTheme(){
    document.body.classList.toggle('is-ligth')// toggle serve para alterar
    document.body.classList.toggle('is-dark') 
}

document.getElementById('lightBtn').addEventListener('click' , useLigthTheme) //colocando o evento click e passando a funcao
document.getElementById('darkBtn').addEventListener('click',useDarkTheme)
document.getElementById('switchBtn').addEventListener('click',switchTheme)