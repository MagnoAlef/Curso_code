/**
 * Escreva um programa em js para simular um fila de espera em um consultorio medico.O
 * programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
 * esperando em ordem mostrando sua posição ao lado do nome (ex: 1 Mateus 2 marcos,etc) O
 * menu tambem deve permitir escolher entre as opções de "Novo Paciente" para adicionar um novo
 * paciente ao fim da fila(pedindo o nome do paciente) 'consultar paciente' que retira o primeiro
 * paciente da fila e mostra mna tela o nome do paciente consultado e Sair.O programa so deve ser
 * encerrado ao escolher a opção de Sair , caso contrario deve voltar ao menu.
 */

let opcao = "";
const fila = [];
while (opcao !== "3") {
  pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "->" + fila[i] + "\n";
  }
  opcao = prompt(
    "Fila de espera de consultorio \n" +
      "Pacientes -> \n" +
      pacientes +
      "\n[1] Para novo paciente \n[2] Para consultar paciente \n[3]Sair"
  );
  switch (opcao) {
    case "1":
        novoPaciente = prompt('Qual o nome do novo paciente?')
        fila.push(novoPaciente)
      break;
    case "2":
        fila.shift()
      break;
    case "3":
        alert('Saindo')
      break;
  }
}
