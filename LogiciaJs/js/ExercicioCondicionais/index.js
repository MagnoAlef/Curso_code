const nomePrimeiro = window.prompt('Digite qual o nome do primeiro veiculo:')
const nomeSegundo = window.prompt('Digite qual o nome do segundo veiculo:')
const velocidadePrimeiroVeiculo = window.prompt('Digite qual a velocidade do primeiro veiculo:')
const velocidadeSegundoVeiculo = window.prompt('Digite qual a velocidade do segundo veiculo:')
if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo){
    alert(`o veiculo de nome ${nomePrimeiro} com velocidade de
    ${velocidadePrimeiroVeiculo}  foi mais rapido que o veiculo ${nomeSegundo} de velocidade ${velocidadeSegundoVeiculo}`)
}else if(velocidadePrimeiroVeiculo === velocidadeSegundoVeiculo){
    alert(`a velocidade do veiculo ${nomePrimeiro} é igual a velocidade do veiculo ${nomeSegundo} ambas com a velocidade ${velocidadePrimeiroVeiculo}`)
}else{
    alert(`o veiculo de nome ${nomeSegundo} com velocidade de ${velocidadeSegundoVeiculo}  é mais rapido do que o veiculo ${nomePrimeiro} de velocidade ${velocidadePrimeiroVeiculo} `)
}