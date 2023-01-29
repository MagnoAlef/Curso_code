function calcularMedia (a,b){
    const media = (a+b)/2
    return media
}

 const resultado = calcularMedia(4,5)
 console.log(resultado)

 function testeProduto(nome,preco){
    const produto = {
        nome,  // mesma coisa de nome : nome
        preco, // mesma coisa de preco : preco
        estoque : 1
    }
    return produto
 } 

 const teste = testeProduto('notebook', 2500)
 console.log(teste)