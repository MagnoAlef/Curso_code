class Account {
    #password // Adicionando Privado
    #balance 
  
    constructor(user) {
      this.email = user.email
      this.#password = user.password
      this.#balance = 0
    }
  
    getBalance(email, password) {
      if (this.#authenticate(email, password)) { // Se o usuario e senha foram iguais eu mostro o balance
        return this.#balance // Retorna balance por causa do #
      } else {
        return null
      }
    }
  
    #authenticate(email, password) {
      return this.email === email && this.#password === password
    }
  }

  const user = {
    email: "user@email.com",
    password: "123456"
  }
  
  const userAccount = new Account(user)
  
  console.log(userAccount)
  //console.log(userAccount.#password) // Gera erro // Porque ele tem um identificado privado
  //console.log(userAccount.#balance) // Gera erro
  //console.log(userAccount.#authenticate()) // Gera erro //metodo privado
  console.log(userAccount.getBalance("user@email.com", "123456"))//metodo publico
  console.log(userAccount.getBalance("user@email.com", "000000"))