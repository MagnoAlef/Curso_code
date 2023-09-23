const ProfessorAuthor = require("./ProfessorAuthor");

const john = new ProfessorAuthor("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)