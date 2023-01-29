fila = []
opcao = ''

do{
    paciente = ''
    opcao =  prompt(`${paciente}\n[1] para adicionar ${fila[0]} ${fila[1]} ${fila[2]} elemento na fila\n[2] para remover elemento na fila  \n[3] para parar`)
    switch(opcao){
    case '1':
        let novoNome = prompt('Digite um nome para adicionarmos na fila:')
        fila.push(novoNome)
        for (let i = 0 ; i <  fila.length; i++ ){
            paciente = `${i+1} - ${fila[i]}`
        }
        console.log('teste',paciente)
        console.log('testes',fila)
        break
        case '2':
            fila.shift()
            break
            case '3':
                alert('Encerrando programa...')
}
}while(opcao !== '3')
for (let i = 0 ; i < fila.length; i++){
console.log('teste',fila)
}