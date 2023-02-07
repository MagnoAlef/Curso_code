let alunos = [
    {nome: 'jose' , idade : 18},
    {nome: 'joao' , idade : 16},
    {nome: 'maria' , idade : 21}
]

let aluno = alunos.find((x)=>{
    return x.nome === 'joao'
})
console.log(aluno)
