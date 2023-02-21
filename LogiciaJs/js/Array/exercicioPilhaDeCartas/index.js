/**
 * Escreva um programa em js para simular um baralho de cartas. o programa deve iniciar mostrando
 * na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de ADICIONAR
 * uma carta PUXAR UMA CARTA e SAIR ao escolher adicionar uma carta o programa deve perguntar o 
 * nome da carta e adiciona-la no topo do baralho ao esoclher puxar uma carta o programa deve retirar a
 *  carta do topo do baralho e mostrar na tela o nome da carta puxada. o programa so deve ser encerrado ao
 * escolher a opção de SAIR  caso contrario deve voltar ao menu.
 */
baralho = []
opcao = ''
do{
    console.log('magno',baralho)

    opcao = prompt(`O baralho tem ${baralho.length} cartas\n[1] para adicionar cartas\n[2] para puxar carta\n[3 para sair:]`)
// AdicionarCartas = ''
// for(let i = 0 ; i< baralho.length;i++ ){
// AdicionarCartas = `${AdicionarCartas} ${baralho[i]}`
// }
switch(opcao){
    case '1':
    novaCarta = prompt('Digite o nome da nova carta:')    
    baralho.push(novaCarta)
        break
        case '2':
             let  puxarCarta = baralho.pop()
             if(!puxarCarta){
                alert('Não temos carta para puxar:')
             }else{
                alert(`Puxamos a carta ${puxarCarta} do baralho:`)
             }
break
            case '3':
                alert('Encerrando...')
}
}while(opcao !== '3')