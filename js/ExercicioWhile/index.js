 const turista  = prompt("Qual e seu nome turista?")
 contagem = 0
 cidades  = ''
resposta = prompt('Voce visitou alguma cidade ?  [Sim] / [Não] ')
while (resposta === 'Sim'){
   cidade = prompt('Qual o nome das cidades visitadas?')
   //cidades+= "-" + cidade + "\n"
   cidades = cidades + "." + cidade + "\n"
   contagem++
   resposta = prompt('Voce visitou alguma cidade ?  [Sim] / [Não] ')
}

alert(`o nome do turista é ${turista}:\n Ele visitou um total de ${contagem}  cidades as cidades visitas foram:\n ${cidades} `)