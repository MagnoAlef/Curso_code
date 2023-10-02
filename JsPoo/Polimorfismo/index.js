class Vehicle {
    move(){
        console.log('O veiculo esta se movendo.')
    }
}

class Car extends Vehicle{
    move(){
        console.log('O carro esta se movendo.')
    }
}

class Ship extends Vehicle{
    move(){
        console.log('O navio esta se movendo.')
    }
}

class Aircraft extends Vehicle{
    move(speed){
        console.log(`A aeronave esta voando a ${speed} por hora `)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epock = new Aircraft()

delorean.move()
blackPearl.move()
epock.move(120)

console.log(delorean)
console.log(blackPearl)
console.log(epock)

function start(vehicle){
    console.log('iniciando um veiculo')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epock)