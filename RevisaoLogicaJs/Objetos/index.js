/**
 * Escreva um programa em js que funcione como um cadastro de imoveis e atenda aos seguintes requisitos.
 * Dete ter um menu interativo que sempre e exibido ate que o usuario escolha Sair.
 * O menu interativo deve mostrar no topo a quantidade de imoveis cadastrados.
 * O menu deve ter a opção de Salvar um imovel.
 *  Para salvar um novo imovel o programa deve pedir as seguintes informações :
 * -> Nome do proprietario
 * -> Quantidade de quartos
 * -> Quantidade de banheiros
 * -> Se possui garagem
 * O menu tambem deve ter a opção de mostrar todos os imoveis salvos.
 */
let opcao = ""
imoveis = []
console.log(imoveis)
while (opcao !== "3") {
  opcao = prompt(
    "Quantidade de imoveis cadastrados " +
      imoveis.length +
      "\n[1]Para salvar imoveis\n[2]Mostrar imoveis salvos\n[3]Sair"
  );
  switch (opcao) {
    case "1":

      imovel = {}
      imovel.nomeProprietario = prompt('Qual o nome do proprietario?')
      imovel.quantidadeQuarto = prompt('Quantos quartos tem o imovel?')
      imovel.quantidadeBanheiro = prompt('Quantos banheiros tem o imovel?')
      imovel.garagem = prompt('Possui garagem o imovel?')
      imoveis.push(imovel)
      break;
    case "2":
        for (let i = 0 ; i < imoveis.length;i++){
            alert('Detalhes dos imoveis\n' + (i + 1)  + 'imovel' +  '\nNome proprietario: ' + imoveis[i].nomeProprietario +
            '\nQuantidade de quartos: ' +  imoveis[i].quantidadeQuarto + 
            '\nQuantidade de banheiros: ' + imoveis[i].quantidadeBanheiro + 
            '\nPossui garagem: ' + imoveis[i].garagem)
            }
      break;
    case "3":
      break;
    default:
      alert("Opção invalida");
  }
}
/**
 * Solução professor
 *  const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

   switch (opcao) {
     case "1":
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )

      if (confirma) {
        imoveis.push(imovel)
      }
      break
     case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
      case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");
 */
