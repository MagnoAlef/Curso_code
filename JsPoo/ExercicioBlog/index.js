const Author = require('./Author')

const magno = new Author('Magno')

const post = magno.writePost('Mente Milionaria' , '....', 'Magno')



console.log(post)