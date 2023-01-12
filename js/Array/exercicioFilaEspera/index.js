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
do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
      pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair")



switch (opcao){
    case "1":
        const  novopaciente = prompt('Digite o nome do novo paciente:')
        fila.push(novopaciente)
        break
        case "2":
            const pacienteConsultado = fila.unshift() 
            if (pacienteConsultado) {
                alert(pacienteConsultado + " foi removido da fila.")
               
           } else {
            alert("Não há pacientes na fila!")
           }
           break
    case "3":
        alert('encerrrando')    
}
}


while (opcao !== '3');

