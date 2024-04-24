const products = [
  {
    id: 1,
    name: "Intel Core i7-10700K",
    description:
      "Processador de alto desempenho para jogos e aplicações intensivas",
    price: 399.99,
  },
  {
    id: 2,
    name: "AMD Ryzen 9 5900X",
    description: "Processador de última geração com 12 núcleos e 24 threads",
    price: 549.99,
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 3080",
    description: "Placa de vídeo para jogos em resolução 4K",
    price: 999.99,
  },
  {
    id: 4,
    name: "Samsung 1TB SSD",
    description: "Unidade de estado sólido para armazenamento rápido",
    price: 129.99,
  },
  {
    id: 5,
    name: "Corsair Vengeance RGB Pro 16GB",
    description: "Módulos de memória RAM DDR4 com iluminação RGB",
    price: 89.99,
  },
  {
    id: 6,
    name: "Asus ROG Strix B550-F Gaming",
    description: "Placa-mãe ATX para jogos com suporte PCIe 4.0",
    price: 179.99,
  },
  {
    id: 7,
    name: "Logitech G Pro X Mechanical Keyboard",
    descriptio: "Teclado mecânico para jogos com switches removíveis",
    pric: 149.99,
  },
];

const produtosIncludes = ['celular' , 'computador' , 'video game']
const testeSome = 7
const productSome = products.some((x) => x.id === testeSome);
const productInclues = produtosIncludes.includes('computador'); 

console.log("testeSome", productSome);
console.log('testeIncludes' , productInclues)
/**
 * 
O método some e o método includes têm propósitos ligeiramente diferentes:

some:
O método some é usado em arrays para verificar se pelo menos um elemento satisfaz uma determinada condição, que é especificada por uma função de callback.
Ele retorna um valor booleano (true ou false) com base na avaliação da condição para pelo menos um elemento do array.
É útil quando você precisa verificar se há pelo menos um elemento que atenda a uma condição específica no array.
Exemplo:

javascript
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Retorna true, pois pelo menos um número é par (2 é par)
includes:
O método includes é usado para verificar se um array contém um determinado elemento e retorna um valor booleano (true ou false).
Ele verifica a presença do elemento especificado no array.
É útil quando você precisa saber se um elemento específico está presente no array, independentemente de sua posição ou outras propriedades.
Exemplo:

javascript
const fruits = ['apple', 'banana', 'cherry'];

const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Retorna true, pois 'banana' está no array
Portanto, a diferença principal é que o some verifica se algum elemento atende a uma condição, enquanto o includes verifica se um elemento específico está presente no array.

 */