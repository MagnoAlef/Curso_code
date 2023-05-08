const arr = ['1nivel',['1nivel','2nivel'], [['3nivel','1item','Ola,mundo'],['3nivel','2item','Ola,mundo']],[]]
console.log(arr) /*-> ['1nivel', Array(2), Array(2), Array(0)]*/ 
console.log(arr[0]) /*-> 1nivel*/
console.log(arr[1]) /*-> ['1nivel', '2nivel']*/
console.log(arr[1][0]) /*-> 1nivel*/
console.log(arr[1][1]) /*-> 2nivel*/
console.log(arr[2]) /*-> ['3nivel','1item','Ola,mundo'],['3nivel','2item','Ola,mundo']*/
console.log(arr[2][1]) /*-> ['3nivel', '2item', 'Ola,mundo']*/

const matriz = [
    ['li,ci','li,c2','li,c3','li,c4'],
    ['l2,c1','l2,c2','l2,c3','l2,c4'],
    ['l3,c1','l3,c2','l3,c3','l3,c4'],
]
console.table(matriz)
matriz[0].push('teste') /** puxando item no primeiro indice */
//Iterar sobre matriz

for (let i = 0 ; i<matriz.length ; i++){
    console.log(matriz[i])
    //Inteirando sobre toda a matriz
}
for (let i = 0 ; i<matriz.length ; i++){
    for (let j = 0 ; j < matriz[i].length ; j++){

        const elemento = matriz[i][j]
        console.log('posição: (' + i + ', ' + j + ') valor:' + elemento)
    }
    //Inteirando sobre toda indice  da matriz
}