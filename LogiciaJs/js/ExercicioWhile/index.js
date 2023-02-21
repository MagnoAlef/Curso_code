const nome = prompt('Qual seu nome:')
contagem = 0 
cidades = ''
continuar = prompt('Voce visitou  alguma cidade? [Sim]/[Não]')
while(continuar === 'Sim'){
    cidade = prompt('Qual cidade voce visitou ?')
    contagem ++
    cidades = cidades + "-" + cidade  + "\n"
    continuar = prompt('Voce visitou mais alguma cidade? [Sim]/[Não]')
}
alert(`O nome do turista é ${nome} \n 
Ele visistou o total de ${contagem} cidades e as cidades visitadas foram: \n ${cidades}`)