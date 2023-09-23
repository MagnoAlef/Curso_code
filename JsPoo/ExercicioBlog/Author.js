const Post = require("./Post")

class Author{
    constructor(name){
        this.name = name
        this.post = []
    }
    writePost(title, body) {
        const post = new Post(title, body, this) //this terceiro parametro que veio do Post o correto era pegar o this.name
        this.post.push(post)
        return post
      }
}
module.exports = Author