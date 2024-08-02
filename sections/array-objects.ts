export interface Person {
    name: string;
    age: number;
    isActive: boolean;
    Born: string;
}


let David: Person = {
    name: 'David',
    age: 38,
    isActive: true,
    Born: 'cdmx',
};

let Rebeca: Person = {
    name: 'Rebeca',
    age: 39,
    isActive: true,
    Born: "cdmx",
};

let Rodrigo: Person = {
    age: 32,
    Born: "Cancún",
    isActive: false,
    name: 'Rod',
};

let people : Person [] = [ David, Rebeca, Rodrigo];

for (let i = 0; i<people.length; i++){
    let person = people [i];
    console.log (person.name + ' ' + person.age);
}