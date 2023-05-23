/**
 *  Funcoes recursivas
 * Ela e uma funcao que chama ela mesma.
 *
 */
function dividir(num) {
  console.log(num); /* Suponhamos que passariamos o numero 6
    ele mostraria 0 6 no console log , cairia no if por ser 
    par chamaria a funcao e dividiria o 6 por 2 = 3 ,
    quando ele volta para fazer a verificação ele iria cair no else
    e retorna o numero 3 que e o resultado da divisao
    */
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}
//dividir(6)
//Perigo das funcoes recursivas, chamadas que não tem como serem finalizadas
// function dobrar(num){
//     console.log(num)
//     dobrar(num*2)

// }
//  dobrar(120)
//Possiveis aplicações
function fatorial(n) {
  // !5 -> 5 X 4 X 3 X 2 X 1 = 120 ou 5 * !4
  console.log("Numero: " + n);
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else {
    console.log(n + ' * !' + (n-1))
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5));
