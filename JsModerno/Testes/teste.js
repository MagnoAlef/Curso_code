
const itens = [1,2,3,4,5,56,6,7,8]
 const reduce = itens.reduce((acumulador , x) => acumulador + x , 0)
const map = itens.map((x) => x)
console.log(reduce)
console.log(map)

const testes = [
    {id:1 , nome: 'magno',valor:20},
    {id:2 , nome: 'marcos',valor: 30},
    {id:3 , nome: 'matheus',valor: 40},
    {id:4 , nome: 'maria',valor: 50},
    {id:5 , nome: 'maiara',valor: 60},
    {id:6 , nome: 'maiara',valor: 70},
    {id:7 , nome: 'maira',valor: 80},
    ]

  console.log(testes.map((x) => ({
    value: x.id,
    label:x.nome
  })))






