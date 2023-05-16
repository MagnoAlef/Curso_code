function calcularMedia(a,b){
    const media = (a+b) / 2
    return media // Retorno da funcao
}

 const resultado = calcularMedia(4,2)
console.log(resultado)

function criarProduto(nome,preco){
    const produto = {
        nome, // nome:nome
        preco, // preco:preco
        estoque:1
    }
    return produto
}

const notebook = criarProduto('dell' , 2500)
console.log(notebook)

function areaRetangular(base,altura){
    const area = base * altura
    return area
}
console.log(areaRetangular(3,5))

function areaQuadrada(lado){
    return areaRetangular(lado,lado)
}
console.log('teste',areaQuadrada(9))

//Uma funcao so pode retornar uma vez
function ola(){
    let texto = '...'
    return texto
    texto = 'Olá,Mundo!' // O que estiver abaixo do return sera descartado
    console.log(texto)
}
console.log(ola())

function maioridade(idade){
    if(idade >=18){
        return "Maior de idade"
    }
    else{
        return 'Menor de idade'
    }
}
console.log(maioridade(29))
console.log(maioridade(15))