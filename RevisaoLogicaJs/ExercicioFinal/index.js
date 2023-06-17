/**
 * Escreva um programa em js que simule um sistema de vagas de emprego , onde e possivel gerenciar as 
 * vagas e adicionar candidatos as vagas . Ele deve atender aos seguintes requisitos.
 * -> Ter um menu onde e possivel escolher entre as diferentes funcionalidades do sistema
 * -> Listar vagas disponiveis 
 * -> Criar uma nova vaga  
 * -> Visualizar uma vaga
 * -> Inscrever um cancidato em uma vaga
 * -> Excluir uma vaga
 * -> Sair
 * A opção de listar as vagas deve mostrar o indice , o nome e a quantidade de candidatos inscritos de todas as vagas.
 * A opção de criar uma nova vaga deve pedir um nome para a vaga ,uma descrição e uma data limite , e tambem 
 * deve pedir que o usuario confirme as informações antes de salva-las.
 * A opção de visualizar uma vaga deve pedir o  indice da vaga e mostrar todas as informações dela:indice,
 * nome,descrição,data limite , quantidade de candidatos e o nome dos candidatos.
 * A opção de inscrever um candidato em uma vaga deve pedir o nome do candidato, o indice da vaga e entao uma
 * confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
 * A opção de excluir uma vaga deve pedir o indice da vaga, mostrar suas informações e pedir que o usuario confirme
 * a exclusão da vaga antes de realmente exclui-la.
 * Este é o exercicio de revisão do modulo , entaõ aproveite para utilizar todos os recursos vistos ate agora sempre que 
 * possivel, como os objwtos , arrays e funcões.
*/
opcao = ''
vagas = []
nomeCandidato = ''

 function criarVaga (){
    const nome = prompt('Qual o nome da vaga deseja criar.')
    const descricao = prompt('Qual a descrição da vaga.')
    const dataLimite = prompt('Qual a data limite da vaga dd/mm/aaaa.')
    const vagaCriado = {nome,descricao,dataLimite,candidato:[]}
    vagas.push(vagaCriado)
 }
 function visualizarVaga(){
    const indice = parseFloat(prompt('Qual indice da vaga deseja visualizar?'))
    elemento = vagas[indice]
    candidatos = elemento.candidato

    console.log(candidatos.length)
     for(let i = 0 ; i < candidatos.length; i++ ){
        nomeCandidato += candidatos[i] + '\n'
    }
    alert(`Vaga ${elemento.nome}\nDescrição ${elemento.nome}\ndata limite ${elemento.dataLimite}\nCandidato:\n ${nomeCandidato}`)
  }
 
function listaVaga(){

    for (let i = 0; i < vagas.length; i++){
        alert(` Nome vaga: ${vagas[i].nome} Descrição vaga: ${vagas[i].descricao} Data limite vaga: ${vagas[i].dataLimite}\nCandidato:\n ${nomeCandidato}  `)
        console.log('teste',vagas[i])
    }
  
 }
 function InscreverCandidato(){
    const indice = parseFloat(prompt('Qual indice da vaga deseja inscrever um candidato?'))
    //elemento = vagas[indice]
  const confirmacao = confirm(`Vaga ${vagas[indice].nome}\nDescrição ${vagas[indice].nome}\ndata limite ${vagas[indice].dataLimite}`)
if(confirmacao){
    const nomeCandidato = prompt('Qual o nome do candidato deseja inscrever na vaga?')
    vagas[indice].candidato.push(nomeCandidato)
} 
}
 
 function excluirVaga(){
       const i = parseFloat(prompt('Qual indice da vaga deseja excluir?'))
        const confirmacao =  confirm(`Nome vaga: ${vagas[i].nome} Descrição vaga: ${vagas[i].descricao} Data limite vaga: ${vagas[i].dataLimite} candidato: ${nomeCandidato} `)
        if(confirmacao){
         vagas.splice(i,1)
        }

  
 }
 console.log(vagas)
while (opcao !== '6'){
    opcao= prompt('[1] Para listar vagas\n[2] Para criar uma nova vaga\n[3] Visualizar uma vaga\n'+
    '[4] Para Increver uma candidato em uma vaga\n[5] Para excluir uma vaga\n[6] Para sair')
    switch(opcao){
        case '1':
                listaVaga()
            break
            case '2':
                criarVaga()
            break
            case '3':
                visualizarVaga()
            break
            case '4':
                InscreverCandidato()
            break
            case '5':
                excluirVaga()
            break
            case '6':
                alert('Saindo....')
            break
    }
}