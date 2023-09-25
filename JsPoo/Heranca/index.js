class Property {
    constructor(area, price) {
      this.area = area
      this.price = price
    }
  
    getPricePerSquareMeter() { //obter o preco pelo metro quadrado
      return this.price / this.area
    }
  }
  
  class House extends Property { } // classe House herdar de Property
  
  
  const land = new Property(200, 50000)
  const someHouse = new House(120, 200000)
  
  console.log(land)
  console.log(someHouse)
  console.log(someHouse instanceof Property)//testar se um objeto e uma instancia de Property 

  class Apartment extends Property {
    constructor(number, area, price) {//quando adiciono novos atributos tenho que pegar os atributos da classe pai
      // this.area = area (GERA ERRO)
      // this.price = price (GERA ERRO)
      super(area, price) // forma coreta de adicionar os atributos super palavra reservada tenho que chamalo primeiro que o this
      this.number = number
    }
  
    getFloor() {
      return this.number.slice(0, -2) // metodo para definir o andar
    }
  }
  
  const apt = new Apartment("201", 100, 160000)
  
  console.log(apt)
  console.log(apt.getFloor())