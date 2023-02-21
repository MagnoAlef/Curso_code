/**
 * Escreva um programa em js para calcular a area de diferentes formas geometricas . o programa
 * deve iniciar com um menu contendo as diferentes opcoes de calculos.
 * As opções devem ser:
 * Area do triangulo : base * altura / 2
 * Area do retangulo : base * altura
 * Area do quadrado : lado * lado
 * Area do trapezio : (base maior+ base menor) * altura /2
 * Area do circulo : pi * raio ao quadrado( considere pi = 3.14)
 Você deve escrever o programa usando funções sempre que possivel para separar os procedimentos.
 O programa tambem deve ter uma opção de SAIR e enquanto ela não for escolhida devera voltar para o menu. 
 */
function areaTrinagulo() {
  const base = parseFloat(prompt("Digite a base:"));
  const altura = parseFloat(prompt("Digite a altura:"));
  return (base * altura) / 2;
}
function areaRetangulo() {
  const base = parseFloat(prompt("Digite a base:"));
  const altura = parseFloat(prompt("Digite a altura:"));
  return base * altura;
}
function areaQuadrado() {
  const lado = parseFloat(prompt("Digite o lado:"));
  return lado * lado;
}
function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Digite a base maior:"));
  const baseMenor = parseFloat(prompt("Digite a base menor:"));
  const altura = parseFloat(prompt("Digite a altura :"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function areaCirculo() {
  const raio = parseFloat(prompt("Digite o raio do circulo:"));
  return raio * 3.14;
}
// console.log(areaTrinagulo())
// console.log(areaRetangulo())
// console.log(areaQuadrado())
// console.log(areaTrapezio())
// console.log(areaCirculo())
let opcao = "";
while (opcao !== "6") {
  opcao = prompt(
    `Digite uma opção para calcular alguma geometria:\n[1] calculo da area\n[2] calculo do retangulo\n[3] calculo do quadrado\n[4] calculo do trapezio\n[5]calculo do circulo\n[6] Sair`
  );
  if (opcao === "1") {
    console.log(areaTrinagulo());
  }
   else if (opcao === "2") {
    console.log(areaRetangulo());
  }
 else  if (opcao === "3") {
    console.log(areaQuadrado());
  }
 else if (opcao === "4") {
    console.log(areaTrapezio());
  }
else if (opcao === "5") {
    console.log(areaCirculo());
  }
else if (opcao === "6") {
alert('Saindo....')  }
  else{
    alert('opcao invalida')
  }
  
}
