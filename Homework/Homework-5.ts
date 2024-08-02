
export let numbers: number [] =[ 1, 6, 8, 4, 2, 7, 10, 3, 4];

for (let i = 0; i < numbers.length; i++ ) {
    let par = numbers [i]%2
    
    if (par === 0) {
        console.log ( numbers [i], 'es par');
    }   else {
        console.log (numbers [i], 'es impar');
    }
    }

    // let number = numbers [1];
    //if ( (number % 2) === 0 ) {
        //console.log (number + 'es par');
   // } else {
    //console.log (number + 'es impar');
   //} OTRA RESPUESTA
