// Escreva um programa em js que simule um menu interativo com 5 opções diferentes.
// O programa devera iniciar mostrando 5 opções disponiveis , as 4 primeiras nao precisam de 
// nenhuma funcionalidade especifica a ultima opção deve ser a opção "Encerrar". ao clicar em alguma 
// das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual doi a opção
// escolhida e depois o programa deve exibir novamente o menu com as 5 opções .Isso deve continuar 
// acontecendo ate que o usuario escolha a opção "Encerrar".Ao escolhe-la uma mensagem dizendo 
// que o sistema esta sendo encerrado deve ser exibida na tela e então o programa e finalizado.
menu = prompt('Menu interativo\n'+
"Escolha uma das 5 opções de menu\n"+
'[1] hamburguer\n[2]chocolate\n[3]leite condensado\n[4]picole\n[5]Encerrar')
 
while(menu !=='5'){
    if(menu === '1'){
alert('Hamburguer escolhido:')
    }else if(menu === '2'){
        alert('chocolate escolhido:')
    }
    else if(menu === '3'){
        alert('leite condensado escolhido:')
    }
    else if(menu === '4'){
        alert('picole escolhido:')
    }
     menu = prompt('menu interativo\n'+
     "Escolha uma das 5 opções de menu\n"+
     '[1] hamburguer\n[2]chocolate\n[3]leite condensado\n[4]picole\n[5]Encerrar')
}
   alert('Finalizando programa:') 

    