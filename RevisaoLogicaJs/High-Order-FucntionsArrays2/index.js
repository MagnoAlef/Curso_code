const personagens = [
    {nivel:42,nome:'Thrall',raca:'Orc',classe:'Xama'},
    {nivel:28,nome:'Garrosh',raca:'Orc',classe:'Guerreiro'},
    {nivel:35,nome:'Varok',raca:'Orc',classe:'Guerreiro'},
    {nivel:35,nome:'Uther',raca:'Humano',classe:'Paladino'},
    {nivel:26,nome:'Jaina',raca:'Humano',classe:'Maga'},
    {nivel:39,nome:'Tyrande',raca:'Elfo Noturno',classe:'Sacerdotista'},
    {nivel:29,nome:'Muradin',raca:'Anão',classe:'Guerreiro'},
]

//Sort
//Metodo de ordenação
//Modifica o array
personagens.sort(function(a,b){ //Ordem crescente
    return a.nivel - b.nivel
    //se a > b ele vai jogar o a mais para frente.
})
console.log(personagens)

const personagemOrdenados = personagens.slice().sort(function(a,b){ //Ordem crescente
    return a.nivel - b.nivel
    //se a > b ele vai jogar o a mais para frente.
    //O slice faz a copia do array sem modificar o array original
})
 

console.log(personagemOrdenados)