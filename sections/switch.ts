

export let weekDay: number = 5; //1 es lunes, 2 es martes

if ( weekDay <=0 ){
    //console.log ('Día de la semana no permitido');
    throw new Error ('Día de la semana no permitido');
}

switch (weekDay){
    //weekDay === 1
    case 1:
        console.log ('Es lunes');
        break;
    
    case 2: 
        console.log ('Es martes');
        break;

    case 3: 
        console.log ('Es miércoles');
        break;

    default:
        console.log ('No es lunes, martes o miércoles');

}



















