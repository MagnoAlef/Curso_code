class Post {
    constructor(title ,body,author){
        this.title = title
        this.body = body
        this.author = author
        this.comentario = []
    }
    addComentario(username ,context){
        this.comentario.push(new Comment(username ,context))   
    }

}

module.exports = Post
