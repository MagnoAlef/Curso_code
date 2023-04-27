/**
 * Escreva um programa em js que seja capaz de identificar se uma palavra e um palindromo.Um
 * palinndromo e uma palavra que lida de tras para frente possuo as mesmas letras na mesma ordem.O
 * programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem 
 * dizendo se aquela palavra e um palindromo.Caso não seja um palindromo, o programa deve
 *  mostrar a palavra da esquerda para a direita e da direita para a esquerda
 */

let palavra = prompt('Digite uma palavra para analisar se ela e um palindromo:')
let palavraDireita = ''
let palavraEsquerda = ''
for ( let i = 0 ; i < palavra.length ; i++){
    palavraDireita+= palavra[i]
}

for ( let i = palavra.length -1 ; i  >= 0  ; i--){
    palavraEsquerda += palavra[i]
}

if(palavraDireita === palavraEsquerda){
    alert(`As palavras ${palavraDireita} e ${palavraEsquerda} são iguais:`)
}else{

    alert(palavraDireita)
    alert(palavraEsquerda)
    alert('Não são palindromos:')
}

/**
 * Professor
 * 
 * const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
 * 
 */