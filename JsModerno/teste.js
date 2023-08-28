// Função para gerar um objeto de pessoa aleatoriamente
function criarPessoa() {
    const nomes = ["Alice", "Bob", "Carol", "David", "Eve"];
    const idades = [25, 30, 22, 28, 35];
    const cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador"];
  
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const idadeAleatoria = idades[Math.floor(Math.random() * idades.length)];
    const cidadeAleatoria = cidades[Math.floor(Math.random() * cidades.length)];
  
    return { nome: nomeAleatorio, idade: idadeAleatoria, cidade: cidadeAleatoria };
  }
  
  // Gerar um array de 5 objetos de pessoas
  const pessoas = Array.from({ length: 5 }, criarPessoa);
  
  console.log(pessoas);
  console.log(pessoas.map((x) => x.idade))
  console.log(pessoas.map((x) => x.nome.toUpperCase))
  console.log(pessoas.map((x) => `${x.nome}-${x.idade}` ))

   pessoas.forEach((x) => console.log('nome e idade das pessoas' , `${x.nome} tem ${x.idade}`))