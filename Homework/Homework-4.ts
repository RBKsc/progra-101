
//let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
//Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

export let numbers: number [] =[ 1, 6, 8, 4, 2, 7, 10, 3, 4];
//let i = numbers [0]


let maxNumbers = -99999
for (let i = 0; i < numbers.length; i++){
    if (numbers [i] >= maxNumbers){
        maxNumbers = numbers [i];
    }
}
console.log ('EL número mayor es:', maxNumbers)