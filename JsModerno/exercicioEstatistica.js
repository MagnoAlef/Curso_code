/**
 * De acordo com os conhecimentos aprendidos nesse modulo sobre recursos do js 
 * moderno, crie quatro funções que aceitem qualquer quantidade de parametros e utilizando
 * a sintaxe de arrow functions para calcular as operações abaixo.
 * Essas funções devem mostrar o resultado de alguma forma em texto porem nao
 * e necessario implementar uma interface . para testar a função voce pode fazer
 * chamadas manuais a ela no js ou utilizar o console do navegador
 * (qualquer função incluida na pagina pode ser chamada diretamente no console)
 * OPERAÇÔES:
 *  Media Aritmetica Simples : pode ser calculada somando todos os valores e dividindo o total.
 * Exemplo:
 * media(2,6,3,7,4) === 4.4
 * 2+6+3+7+4 === 22 22 / 5 === 4.4
 *  Media Aritmetica Podenrada:Semelhante a media aritmetica simples , porem e possivel atribuir
 * um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros.
 * Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
 * Exemplo:
 * mediaPodenrada({n:7 , p:2},{n:9 , p:5},{n:3 , p:1}) === 7.75
 * porque (7*2) + (9*5) + (3*1) === 62 62 / (2+5+1) === 7.75
 *  Mediana:Pode ser calculada encontrando o valor central de uma sequencia 
 * de numeros crescente ou decrescente.Caso existam dois numeros centrais,a mediana 
 * e calculada atraves da media aritmetica simples desses dois numeros.
 * Exemplo:
 * mediana(2,4,5,7,42,99) === 6 
 * porque o 5 e 7 estão juntos no centro da sequencia e media(5,7) === 6
 * mediana(15,14,8,7,3) === 8
 * porque 8 esta no centro da sequencia
    Moda: pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
   Exemplo:(1,1,5,4,7,4,3,5,2,4,0,4) === 4 
   porque o 4 e o numero que mais aparece 
*/