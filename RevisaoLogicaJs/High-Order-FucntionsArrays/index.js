const personagens = [
    {nivel:42,nome:'Thrall',raca:'Orc',classe:'Xama'},
    {nivel:28,nome:'Garrosh',raca:'Orc',classe:'Guerreiro'},
    {nivel:35,nome:'Varok',raca:'Orc',classe:'Guerreiro'},
    {nivel:35,nome:'Uther',raca:'Humano',classe:'Paladino'},
    {nivel:26,nome:'Jaina',raca:'Humano',classe:'Maga'},
    {nivel:39,nome:'Tyrande',raca:'Elfo Noturno',classe:'Sacerdotista'},
    {nivel:29,nome:'Muradin',raca:'Anão',classe:'Guerreiro'},
]
//Map
//Criar um novo array fazendo o mapeamento do array
//Comportamento do map sem usar ele

const nomes = []
for(i = 0 ; i<personagens.length;i++){
    nomes.push(personagens[i].nome)
}
console.log(nomes)

//Usando map

const nome = personagens.map(function(personagem){
    return personagem.nome
})
console.log(nome)

//------------------------------------------//
//Filter
//Filtrar novo array com o filtro desejado
//Comportamento sem o filter
const orcs = []
for(i = 0 ; i<personagens.length;i++){
    if(personagens[i].raca === "Orc"){
        orcs.push(personagens[i])
    }
}
console.log(orcs)

//Usando Filter

const orc = personagens.filter(function(personagem){
    return personagem.raca === 'Orc'
})
console.log(orc)
//------------------------------------------//
//Reduce
//Criar um novo Array
//Ele serve para transforma o Array em uma outra coisa Exemplo -> Um objeto

const nivelTotal = personagens.reduce(function(valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel

},0)
console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado,personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }
    else{
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado

},{})
console.log(racas)

