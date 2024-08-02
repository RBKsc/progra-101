

export let person = {
    name: 'David',
    age: 38,
    isActive: true,
    hobbies: ['series', 'películas', 'deportes'],
    toString(printAll: boolean){
        let objetString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log ( objetString);
    }
}

//person.toString(true);

//console.log (person.name.length);
//console.log (person.name.toUpperCase());
//console.log (person.name.repeat(2));

let car = {
    brandCar: 'Honda',
    model: 96,
    doors: 4,
    color: 'plateado',
    tire: 4,
    gearbox: 'automatica',
}
 let smartTv = {
    brand: 'philips',
    inches: 40,
    remoteControl: true,
    streamingPlatforn: true,
    year: 2021
 }

 let youtubeVideo= {
    title: 'Programa 5: Sabores de la feria MasterChef Celebrity 2023',
    date: ' 11 de junio 2023',
    lengthMins: 140,
    genre: 'reality show',
    isActive: true,
    author: 'Tv azteca',
 }

 console.log (car);
 console.log (smartTv);
 console.log (youtubeVideo);