const ProfessorComment = require("./ProfessorComment")

class ProfessorPost {
  constructor(title, body, author) {
    this.title = title
    this.body = body
    this.author = author
    this.comments = []
    this.createdAt = new Date()
  }

  addComment(username, content) {
    this.comments.push(new ProfessorComment(username, content))
  }
}

module.exports = ProfessorPost