const atacante = prompt('Qual o nome do personagem atacante:')
const poderDeAtaque = prompt('Qual o seu poder de ataque:')
const defensor = prompt('Qual o nome do personagem defesor:')
const poderDeDefesa = prompt('Qual é o poder de desefa:')
let pontosDeVida = prompt('Quantos pontos de vida ele possui?:')
const possuiEscudo = prompt('Ele possui um escudo? (Sim/Não):')
let danoCausado = 0

if(parseInt(poderDeAtaque) > parseInt(poderDeDefesa) && possuiEscudo === 'Não'){
    danoCausado = poderDeAtaque - poderDeDefesa
}else if(parseInt(poderDeAtaque) > parseInt(poderDeDefesa) && possuiEscudo === 'Sim'){
    danoCausado = (poderDeAtaque-poderDeDefesa)/2
}
pontosDeVida -= danoCausado
alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
defensor + "\nPontos de vida: " + pontosDeVida +
"\nPoder de defesa: "+ poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)