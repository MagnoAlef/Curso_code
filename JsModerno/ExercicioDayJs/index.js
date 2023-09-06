/**
 * Nesse exercicio voce ira treinar uma habilidade muito importante para qualquer programador a capacidade de aprender a utilizar biblitecas de terceiros.
 * Voce devera criar uma função Js que receber como parametro a data de nascimento de uma pessoa no formato string e mostre
 * no terminal a idade dessa pessoa no dia atual , sua proxima data de aniversario no formato "DD/MM/AAAA" e quantos dias 
 * Faltam para o proximo aniversario dela . Para isso voce deverar utilizar o modulo dayjs, disponivel no npm.
 * Para aprender a utilizar o dayjs voce devera acessar o site do npm (https://www,npmjs.com) e pesquisar por esse modulo. 
 * A pagina da dayjs no npm ira mostrar como utilizar essa biblioteca. Voce tambem deve consultat a documentação do dayjs, disponivel em https://day.js.org
 * Nessa aplicação voce não utilizara o browser você devera utilizar o Node.js . para executar seu arquivo com o Node.js
 * bastar acessar a pasta onde ele esta localizado com o terminal e digitar o comando node seu_arquivo.js. Alem disso ,
 * voce devera utilizar a sintaxe dos modulos CommonJs para trabalhar com o dayjs , ou seja , a função require().
 * Dica : Para resolver o exercicio tente procurar pelos metodos de adicionar um intervalo de tempo a uma data(add), calcular
 * a diferença entre uma data e outra (diff)  e exibir uma data em um formato especifico (format)
 */
const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("1995-09-02")