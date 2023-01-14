/**
 * Escreva um programa em js par simular uma fila de espera em um consultorio medico.o
 * programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
 * esperando em ordem mostrando sua posição ao lado do nome ex 1 Matheus , 2 marcos, etc.O 
 * menu tambem deve permitir escolher ebtre as opções de NOVO PACIENTE para adicionar um novo
 * paciente ao fim da fila pedindo o nome do paciente Consulta paciente que retira o primeiro
 * paciente da fila e mostra na tela o nome do paciente consultado e SAIR . o programa so deve ser 
 * encerrado ao escolher a opção de sair caso contrario deve voltar ao menu.
 */

  let fila = [] 
opcao = ''
do{
 let pacientes = ''
 for (let i = 0 ; i < fila.length; i++){
     pacientes = `${pacientes} ${i+1} º -  ${fila[i]} \n`
    }
    opcao = prompt(`Fila de espera\nPacientes:\n${pacientes}  \n[1] para adicionar pacientes \n[2] para consultar e remover o paciente da lista\n[3] para encerrar programa. `)
console.log('teste',pacientes)
switch (opcao){
    case '1':
        novoPaciente = prompt('Digite o nome do novo paciente:')
        fila.push(novoPaciente)
        break
    case '2':
        consultaPaciente  = fila.shift()
        if(!consultaPaciente){
            alert('Fila vazia , sem pacientes para serem atentidos:')
        } else{
            alert(`${consultaPaciente} Foi removido da fila:`)
        } 
        break  
    case '3':
        alert('Encerrando....')    
}
} while(opcao !== '3')