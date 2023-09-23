const ProfessorPost = require("./ProfessorPost")

class ProfessorAuthor {
  constructor(name) {
    this.name = name
    this.posts = []
  }

  writePost(title, body) {
    const post = new ProfessorPost(title, body, this) //this terceiro parametro que veio do Post o correto era pegar o this.name
    this.posts.push(post)
    return post
  }
}

module.exports = ProfessorAuthor

