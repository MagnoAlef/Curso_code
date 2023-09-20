class Adress{
    constructor(rua,numero,vizinhacha , cidade , estado){
        this.rua = rua
        this.numero = numero
        this.vizinhacha = vizinhacha
        this.cidade = cidade
        this.estado = estado
    }
    fullAdress(){
        return `Rua ${this.rua} , numero ${this.numero}. ${this.vizinhacha} ${this.cidade} , ${this.estado} `
    }
}

module.exports = Adress