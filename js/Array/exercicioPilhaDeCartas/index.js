/**
 * Escreva um programa em js para simular um baralho de cartas. o programa deve iniciar mostrando
 * na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de ADICIONAR
 * uma carta PUXAR UMA CARTA e SAIR ao escolher adicionar uma carta o programa deve perguntar o 
 * nome da carta e adiciona-la no topo do baralho ao esoclher puxar uma carta o programa deve retirar a
 *  carta do topo do baralho e mostrar na tela o nome da carta puxada. o programa so deve ser encerrado ao
 * escolher a opção de SAIR  caso contrario deve voltar ao menu.
 */
 let opcao = 'Sim'
while ( opcao === 'Sim'){
    let cartas = ['Az', 'Rei', 'Dama', 'Valete']
    for (let i = 0; i < cartas.length; i++){
        alert(`${cartas[i]}\n`)
    }
    novaCarta = prompt('Qual nome da nova quarta:')
    cartas.push(novaCarta)
    console.log(cartas)
opcao = prompt('Deseja continuar [Não] / [SIM]')
}