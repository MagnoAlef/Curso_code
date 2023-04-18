/**
 * Escreva um programa em js que funcione como um conversor de medidas.
 * O programa devera pedir por um valor em metros e entao das a opção de escolher para qual unidade
 *  de medida esse valor deve ser convertido. As opções são.
 * ->Milimetro(mm) * 1000
 * ->Centrimeto(cm) * 100
 * ->decimetro(dm) *10
 * ->decametro(dam)/10
 * ->hectometro(hm) /100
 * ->quilometro(km) /1000
 * O programa deve então converter a medida de acordo com a opção escolhida a exibir o resultado.
 * O programa tambem deve exibir uma mensagem de "Opção invalida" caso o usuario insira uma opção 
 * diferente das disponiveis (use o break e o default para isso)
 */
let opção = parseFloat(prompt(`Opção de conversão\n1[mm]\n2[cm]\n3[dm]\n4[dam]\n5[hm]\n6[km]`))
let numero = parseFloat(prompt('Digite um numero em metros para ser convertido:'))
resultado = 0
switch(opção){
    case 1:
    resultado = numero * 1000
    alert(resultado)
    break
    case 2:
    resultado = numero * 100
    alert(resultado)
    break
    case 3:
    resultado = numero * 10
    alert(resultado)
    break
    case 4:
    resultado = numero / 10
    alert(resultado)
    break
    case 5:
    resultado = numero / 100
    alert(resultado)
    break
    case 6:
    resultado = numero / 1000
    alert(resultado)
    break
    default:
        alert('Finalizando')
}