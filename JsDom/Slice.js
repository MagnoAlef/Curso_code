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
      price: 149.99,
    },
  ];

  const productsCopy = products.slice();//Faz a copia exata do array

  console.log('productsCopy' , productsCopy.reverse()) //reverse inverte a ordem do array