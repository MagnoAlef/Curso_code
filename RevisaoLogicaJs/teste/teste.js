function minhaFuncao(objeto){
    console.log('testes',objeto[0])
}

var meuCarro = {make:'Honda',model:'Accord',year:1998}
var meusCarros = ['toyota','honda','fusca']
var x,y;
x = meuCarro.make
console.log(x)

minhaFuncao(meusCarros)
y=meuCarro.make
console.log(y)
//Function fatorial
// var fatorial = function fac(n) {
//     return n<2 ? 1 : n*fac(n-1)
// }
// console.log(fatorial(4))

function fatorial(n){
    return n < 2 ? 1 : n*fatorial(n-1)
}
console.log(fatorial(5))

function map(f,a) {
    console.log('a',a)
    console.log('a',f)
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
      console.log('testes',result)
    return result;
  }
   map(function(x) 
   {
     console.log(x)
     return x * x * x
    }
     ,
      [0, 1, 2, 5, 10]);

  var num1 = 20
  var num2 = 3
  var nome = 'Magno'
  function multiplicar(){
    return num1*num2
  }
  console.log(multiplicar())
  
   function nomeTeste(){
    return nome + num1
  }
  console.log(nomeTeste())