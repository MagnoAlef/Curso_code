//Metodos sao funcoes atreladas a objetos
//Exemplo
let pessoa = {
    nome: 'Magno',
    idade : 26,
    dizerOla(){
        console.log("Olá,Mundo! Meu nome é " + this.nome) // this palavra reservada para referencia objetos
    }
}
console.log(pessoa)
pessoa.dizerOla()