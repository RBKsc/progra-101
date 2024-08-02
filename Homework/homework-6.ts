
//let limite = 5
//
//for (let i = 1; i <= limite; i++) {
//  console.log (1 * i, 2*i, 3*i, 4*i, 5*i )
//}

for (let i = 1; i <= 5; i++) {

    let line= '';

    for (let j = 1; j<= 5; j++){
        line += '' + ` ${ j * i }`;
    }
    console. log (line);
}