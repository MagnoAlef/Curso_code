function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(4, 5);
console.log(resultado);

function testeProduto(nome, preco) {
  const produto = {
    nome, // mesma coisa de nome : nome
    preco, // mesma coisa de preco : preco
    estoque: 1,
  };
  return produto;
}

const teste = testeProduto("notebook", 2500);
console.log(teste);

function areaBase(base, altura) {
  return base * altura;
}
console.log(areaBase(3, 5));

function CalcularQuadrado(lado) {
  return areaBase(lado, lado);
}
console.log(CalcularQuadrado(9));

function ola(){
    const texto = '...'
    return texto
    texto = 'Olá,Mundo!' // trecho de codigo errado
    console.log(texto) // a função do tem um retorno
}
console.log(ola())

function maioridade (idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }

}
console.log(maioridade(19))
console.log(maioridade(17))