const Adress = require('./Adress')
const Person = require('./Person')

const addr = new Adress ('7 de Setembro' , 99,'Centro','Leme do prado' , 'MG')
const john = new Person('Magno',addr) // Exemplo de associação

console.log(john)
console.log(john.address.fullAdress())