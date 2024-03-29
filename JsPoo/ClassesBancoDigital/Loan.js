const Installment = require("./Installment")

module.exports = class Loan {
  static #fee = 1.05 // atributo estatico privado

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment((value * Loan.#fee) / installments, i))
    }
    this.createdAt = new Date()
  }

  static get fee() { // ler o valor da taxa
    return Loan.#fee
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + (newFeePercentage / 100) 
  }
}