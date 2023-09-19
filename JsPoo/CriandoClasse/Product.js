/**
 * Product, que devera possui:
 * .um atributo name, atribuivel na instanciação
 * .um atributo description , atribuivel na instanciação
 * .um atributo price, atribuivel na instancição
 * .um atributo inStock , iniciado sempre com 0
 * .um metodo addToStock, que tem como parametro a quantidade a ser adicionada
 * em estoque e deve somar essa quantidade a variavel inStock
 * .um metodo calculateDiscount, que tem como parametro a percentagem de 
 * desconto a ser aplicada e retorne o valor do preco com o desconto aplicado
 */

class Product {
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantidade){
     this.inStock += quantidade
    }
    calculateDiscount(porcetagemDesconto){
       if(this.price >= 100){
        this.price = this.price -  this.price * porcetagemDesconto / 100
       }
    }
}

const produtc = new Product('Magno', 'Sabão de barra' , 100)

produtc.addToStock(40)
produtc.calculateDiscount(30)

console.log(produtc)