
export function max (a : number, b : number, c : number) { 
   if (a > b) {
    
    if (a > c){
       return a;
    } else {
       return c;
    }
   }

   if (b > c) {
    return b;
   } else {
    
   if (a > c){
       return a;
   } else {
       return c;
    }
   }
   }

    let maxValue = max (90, 40, 15)
    console.log (maxValue)

    //otra respuesta 
   // if (a > b) {
   //     return (a > b ){
   //         return (a > c) ? a : c;    (ternario)
   //     }
   //    }
   //  
   //    if (b > c) {
   //     return b;
   //    } else {
   //     return (a > c) ? a : c;
   //     
   //    }

