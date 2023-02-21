let num1 = window.prompt('Digite um numero:')
let num2 = window.prompt('Digite outro numero:')
alert(
    ` Temos como resultado dessas operações os valores abaixo: \n
    ${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)} \n
     ${num1} - ${num2} = ${num1-num2} \n
     ${num1} * ${num2} = ${num1*num2} \n
     ${num1} / ${num2} = ${num1/num2} \n
    ` 
)
console.log(parseInt(num1)+parseInt(num2))
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)