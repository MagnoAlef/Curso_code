/**
 * Escreva um programa em js que seja capaz de identificar se uma palavra e um palindromo.
 * Um palindromo e uma palavra que lida de tras para frente possui as mesmas letras na mesma ordem.O
 * programa deve iniciar pedindo que seja informada uma palavra e entao deve exibir uma mensagem 
 * dizendo se aquela palavra e ou nao um palindromo.Caso nao seja um palindromo o programa deve mostrar
 * a palavra lida da esquerda para a direita e da direta para a esquerda.
 */
let palindromo = prompt('digite um palavra:')
palavraNormal = ''
palavraAoContrario = ''
for (let i = palindromo.length -1 ; i >= 0; i-- ){
    plv = palindromo[i]   
    palavraAoContrario = palavraAoContrario + plv
    alert(`${palindromo[i]}`)
}
for (let i = 0;  i < palindromo.length; i++ ){
    plv = palindromo[i]   
    palavraNormal = palavraNormal + plv
    alert(`${palindromo[i]}`)
}
if(palavraAoContrario == palavraNormal){
    alert(`As palavras ${palavraAoContrario} e ${palavraNormal} são iguais:`)
}
alert(`${palavraAoContrario}`)
alert(`${palavraNormal}`)