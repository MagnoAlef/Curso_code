class Book {
   constructor(title){
   this.title = title
   this.published = false   
}
publish(){
    this.published = true
}

}

const eragon = new Book('Mente Milionaria') // Classe Book // Instancia eragon
const eldest = new Book('Codigo do Milhão')

eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book) // Saida true serve para verificar se essa instancia e dessa classe