const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
console.log(user.friends[0].phone.ddd) // Codigo daria erro , porque nao tem a prop phone dentro do friends
console.log(user?.friends[0]?.phone?.ddd)// ? o operador para der ler se vim null ou underfined
console.log(user?.brothers?.length) // Não daria erro no console , traria underfined
console.log(user.brothers?.[5].name) // Referenciando posicao que não existe , tinha que usar o ? antes do colchete nesse caso 