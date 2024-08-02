
export function heroesThatStartWith (nameList : string [], letter : string ){
letter = letter.toUpperCase();
let newNameList: string [] = [];

//for (let i= 0; i <nameList.length; i++){
//    let name = nameList [i];
//    if (name.startsWith(letter)  ) {
//       newNameList.push (name)
//    }
//}

//otra respuesta
for (let name of nameList){
    if (name.startsWith (letter)){
        newNameList.push (name);
    }
   
}


return newNameList
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']
let herosWithLetterS = heroesThatStartWith (heroes, 'D');
console.log (herosWithLetterS)
    


