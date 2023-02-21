/**
 * Escreva um programa em js par simular uma fila de espera em um consultorio medico.o
 * programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
 * esperando em ordem mostrando sua posição ao lado do nome ex 1 Matheus , 2 marcos, etc.O 
 * menu tambem deve permitir escolher ebtre as opções de NOVO PACIENTE para adicionar um novo
 * paciente ao fim da fila pedindo o nome do paciente Consulta paciente que retira o primeiro
 * paciente da fila e mostra na tela o nome do paciente consultado e SAIR . o programa so deve ser 
 * encerrado ao escolher a opção de sair caso contrario deve voltar ao menu.
 */
const pacientes = ['Matheus','Marcos']

for (let i = 0 ; i < pacientes.length; i++ ){
    console.log(`Temos na seguinte ordem os pacientes\n ${i+1} -> ${pacientes} \n`)
}