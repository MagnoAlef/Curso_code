function dobro (a){
alert(`O dobro de ${a} = ${a * 2}`)
}
dobro(5) // o 5 se transforma no parametro passado que e o 'a'

function dizerOla (nome){
    alert(`Olá, ${nome}!`)
}
dizerOla('Magno')

function soma (a,b){
    alert(`A soma de ${a} + ${b} = ${a+b}`)
}
soma(5,4)

function criarUsuario(nome,email,senha,endereço){
    const usuario ={
        nome : nome,
        email : email,
        senha : senha ,
        endereço : endereço,
        //Obs: quando o nome da propriedade e do valor , for igual posso abreviar usando 
        //Somente o nome do valor
        //Posso usar usar valores padrao nos parametros
        //Sempre que possivel usar valores nos parametros finais
    }
    alert(`O nome do usuario é ${nome}:\nSeu email é ${email}\nSua senha é ${senha}\ne seu endereço é ${endereço}`)
}
criarUsuario('magno','magno@gmail.com','123445','Rua eunice barbosa dos santos')