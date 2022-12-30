const nome = window.prompt('qual o nome do do seu poder:')
const poderAtaque = window.prompt('qual o poder do seu ataque:')
const quantidadePontoDeVida = window.prompt('quantos pontos de vida voce tem?')
const poderDefesa = window.prompt('quantos pontos voce tem de desefa?')
const escudo = window.prompt('voce possui escudo [1/sim] [2/nao?')

if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === '2' ) {
const diferencaDanos = poderAtaque-poderDefesa
console.log(`voce teve dano de ${diferencaDanos}`)
const quantidadeVidaAtual = quantidadePontoDeVida - diferencaDanos
console.log(`a nova quantidade de vida é ${quantidadeVidaAtual}`)
}
if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === '1' ) {
    const diferencaDanos = poderAtaque-poderDefesa
    console.log(`voce teve dano de ${diferencaDanos/2}`)
    const quantidadeVidaAtual = quantidadePontoDeVida - diferencaDanos/2
    console.log(`a nova quantidade de vida é ${quantidadeVidaAtual}`)
}
if (parseInt(poderAtaque) < parseInt(poderDefesa)) {
    const diferencaDanos = 0
    console.log(`voce teve dano de ${diferencaDanos}`)
    const quantidadeVidaAtual = quantidadePontoDeVida - diferencaDanos
    console.log(`a nova quantidade de vida é ${quantidadeVidaAtual}`)
}
