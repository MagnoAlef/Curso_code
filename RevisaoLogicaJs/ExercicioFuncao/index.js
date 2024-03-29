/**
 * Escreva um programa em js para calcular a area de diferentes
 * formas geometrica.O programa deve iniciar com um menu contendo as
 * diferentes opções de calcula.As opções devem ser.
 * Area do triangulo -> base * altura /2
 * Area do retangulo -> base * altura
 * Area do quadrado -> lado * lado
 * Area do trapezio -> (base maior + base menor) * altura /2
 * Area do circulo -> pi * raio * raio (considere pi = 3.14)
 * Voce deve escrever o programa usando funcoes sempre que possivel
 * para separar os procedimentos.O programa tambem deve ter um opção de sair
 * e enquanto ele nao for escolhida devera voltar ao menu.
 *  */

// opcao = "";
// while (opcao !== "6") {
//   opcao = prompt(
//     "[1] Calcular area do triangulo\n" +
//       "[2] Calcular area do retangulo\n[3] Calcular a area do quadrado\n" +
//       "[4] Calcular area do trapezio\n[5] Calcular a area do circulo\n[6] Sair. "
//   );
//   switch (opcao) {
//     case "1":
//         function CalcularAreaTringulo(){
//             const base =parseFloat(prompt('Qual a base so triangulo'))
//             const altura =parseFloat(prompt('Qual a altura so triangulo')) 
//             return (base*altura)/2
//         }
//         const resultadoAreaTrinagulo = CalcularAreaTringulo()
//         alert('O Resultado é = ' + resultadoAreaTrinagulo)
//       break;
//     case "2":
//         function CalcularRetangulo(){
//             const base =parseFloat(prompt('Qual a base so triangulo'))
//             const altura =parseFloat(prompt('Qual a altura so triangulo')) 
//             return base*altura
//         }
//         const resultadoAreaRetangulo = CalcularRetangulo()
//         alert('O Resultado é = ' + resultadoAreaRetangulo)
//       break;
//     case "3":
//         function CalcularAreaQuadrado(){
//             const lado =parseFloat(prompt('Qual o tamanho do lado do quadrado'))
//             return lado * lado
//         }
//         const resultadoAreaQuadrado = CalcularAreaQuadrado()
//         alert('O Resultado é = ' + resultadoAreaQuadrado)
//       break;
//     case "4":
//         function CalcularAreaTrapezio(){
//             const baseMaior =parseFloat(prompt('Qual a base maior so triangulo'))
//             const baseMenor =parseFloat(prompt('Qual a base menor so triangulo'))
//             const altura =parseFloat(prompt('Qual a altura so triangulo')) 
//             return (baseMaior + baseMenor) * altura /2
//         }
//         const resultadoAreaTrapezio = CalcularAreaTrapezio()
//         alert('O Resultado é = ' + resultadoAreaTrapezio)
//       break;
//     case "5":
//         function CalcularAreaCirculo(){
//             const raio =parseFloat(prompt('Qual a base so triangulo'))
//             return 3.14(raio*raio)
//         }
//         const resultadoAreaCirculo = CalcularAreaCirculo()
//         alert('O Resultado é = ' + resultadoAreaCirculo)
//       break;
//     case "6":
//         alert('Saindo')
//       break;
 
//   }
// }

  //Solução professor
  function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}
function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}
function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}
function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }

  } while (opcao !== "6");
}
executar()
 
