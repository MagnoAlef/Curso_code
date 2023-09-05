const a = 0

const b = null 

const c = 'teste'

console.log(a || b || c) //  retorna o c  porque o js entende que o o  e falsy e o b e null
console.log(a ?? b ?? c) // Nesse caso ele retorna o a porque ele entende que 0 e um conteudo

let aa = 0
let bb = aa || 42 // nesse cado ele entende que o aa não e um conteudo
console.log({aa,bb}) //saida 0 , 42

bb = aa ?? 4 // nesse caso ele ver que o a tem conteudo 

console.log(bb)

let cc = null ?? 42 // nesse caso ele atribuir o valor 42 porque o null e sem conteudo, porem se mudar para qualquer valor o cc aceitaria o valor

console.log(cc)