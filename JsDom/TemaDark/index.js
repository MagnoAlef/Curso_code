function modoLigth(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9' 
}

function modoDark(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}
function switchTheme(){ 
    //Toggle altera entre classes -> muda a classe que esta atual para a outra
    document.body.classList.toggle('is-ligth')
    document.body.classList.toggle('is-dark')

}
document.getElementById('lightBtn').addEventListener('click',modoLigth)
document.getElementById('darkBtn').addEventListener('click',modoDark)
document.getElementById('switchBtn').addEventListener('click',switchTheme)