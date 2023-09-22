class Post {
    constructor(comentarios , novoComentario){
        this.comentarios = comentarios
        this.novoComentario = novoComentario
    }
    adicionarComentarios(comentarios){
        this.novoComentario = comentarios

    }
}

const poster = new Post('nova postagem')
poster.adicionarComentarios('com novo conteudo')

console.log(poster)
