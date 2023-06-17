// const array = [{nome: 'front end ', descricao: 'front vaga', dataLimite: '20', candidato: ['juliana','magno','joao']},{nome: 'front end ', descricao: 'front vaga', dataLimite: '20', candidato: ['magno']}]
// const teste = array[0].candidato
// console.log(teste)
// nome = ''
//  for (let i = 0 ; teste.length; i++){
//  nome += teste[i]
//  }
// console.log(nome)
// console.log(array[0].candidato.length)

const array = [
  { nome: 'front end', descricao: 'front vaga', dataLimite: '20', candidato: ['juliana', 'magno', 'joao'] },
  { nome: 'front end', descricao: 'front vaga', dataLimite: '20', candidato: ['magno'] }
];
const teste = array[0].candidato;
console.log(teste);
let nome = '';
for (let i = 0; i < teste.length; i++) {
  nome += teste[i];
}
console.log(nome);