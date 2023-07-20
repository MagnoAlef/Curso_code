//Session Storage -> quando fecho a janela as informações são perdidas
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
   window.sessionStorage.setItem('info', input.value) // Ele ira mostrar na parte de inspecionar , na aplicação onde esta o session Storage o valor do input
    input.value = ''
  })
  
  document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info') // Ler os dados salvos da Session
    alert('A informação salva é: ' + info)
  })

//Local Storage -> quando fecho a janela as informações não são perdidas
  document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    window.localStorage.setItem('text', input.value)
    input.value = ''
  })
  
  document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text')
    alert('O texto salvo no local storage é: ' + t)
  })

  //Cookie
  document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path // forma de criar o cookie
    input.value = ''
    console.log(document.cookie)
  })
  
  document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
  })