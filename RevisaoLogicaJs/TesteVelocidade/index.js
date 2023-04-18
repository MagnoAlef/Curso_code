/**
 * Escreva um programa em js que permita inserir o nome e a velocidade de dois veiculos e exiba na ela uma mensagem dizendo
 * Qual dos dois e mais rapido (Ou que as velocidades são iguais se este for o caso)
 *
 */
const nomePrimeiroVeiculo = prompt('Digite o nome do primeiro veiculo:')
const velocidadePrimeiroVeiculo = parseFloat(prompt('Digite a Velocidade do primeiro veiculo:'))
const nomeSegundoVeiculo = prompt('Digite o nome do segundo veiculo:')
const velocidadeSegundoVeiculo = parseFloat(prompt('Digite a Velocidade do segundo veiculo:'))

if(velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo ){
    alert(`${nomePrimeiroVeiculo} com velocidade de ${velocidadePrimeiroVeiculo} e mais rapida que ${nomeSegundoVeiculo} com velocidade de ${velocidadeSegundoVeiculo}`)
}
 else if(velocidadePrimeiroVeiculo < velocidadeSegundoVeiculo) {
     alert(`${nomeSegundoVeiculo} com velocidade de ${velocidadeSegundoVeiculo} e mais rapida que ${nomePrimeiroVeiculo} com velocidade de ${velocidadePrimeiroVeiculo}`)
 }

else{
    alert(`${nomeSegundoVeiculo} com velocidade de ${velocidadeSegundoVeiculo} tem a mesma velocidade do ${nomePrimeiroVeiculo} com velocidade de ${velocidadePrimeiroVeiculo}`)
}

