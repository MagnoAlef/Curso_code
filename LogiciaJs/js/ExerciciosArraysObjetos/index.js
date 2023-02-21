imoveis = []
opcao = ''

while (opcao !== '3'){
    opcao = prompt(`Quantidade de imoveis : ${imoveis.length}\n
Digite a opção que deseja para prosseguir\n[1]Salvar um imovel\n[2]Mostra todos os imoveis salvos\n[3]Sair `)
if(opcao == '1'){
    objetoImoveis = {}
    objetoImoveis.nome = prompt('Qual e o nome do novo proprietario?')
    objetoImoveis.quantidadeQuartos = parseFloat(prompt('Qual a quantidade de quartos que o imovel tem?'))
    objetoImoveis.quantidadeBanheiros = parseFloat(prompt('Qual a quantidade de banheiros que o imovel tem?'))
    objetoImoveis.garagem = prompt('o imovel possuir garragem')
    imoveis.push(objetoImoveis)
   
}
if(opcao == '2'){
    for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].nome +
          "\nQuartos: " + imoveis[i].quantidadeQuartos +
          "\nBanheiros: " + imoveis[i].quantidadeBanheiros  +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
}
if(opcao=='3'){
    alert('Encerrando....')
}
}