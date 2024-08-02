

export class Car {

    static className = 'Car'

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor (brand: string, type: string){
        this.brand= brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 19062023;
    }

    public turnOn() {
        
        if (this.isRunning ){   //this.isRunning === false
            console.log ('EL carro ya se había encendido... se daño el motor');
            return;
        } 
        if (this.fuelTank <= 0){
console.log ('EL carro no tiene gasolina');
return;
        }

            this.isRunning = true;
            console.log ('Elcarro está encendido')
    }
 
fillTank (gas:number) {
    if (gas <= 0){
        console.log ('La gasolina tiene que ser positiva')
        return;
    }

    let newFuelTank= this.fuelTank + gas;
    if (newFuelTank >= 100){
        newFuelTank = 100;
    } 
        this.fuelTank = newFuelTank;
    
  }
}       
let myHonda = new Car('Honda', 'Sedan'); 
//myHonda.brand = Mazda 
//console.log (myHonda.type);

console.log (myHonda);
myHonda.turnOn ();
myHonda.fillTank(50);
myHonda.fillTank(90);
console.log(myHonda);
console.log (Car.className)

  //MI RESPUESTA
    //fillTank (gas:number) { 
    //this.fuelTank = (a+b)
    //    if (this.fuelTank === 100)  {
    //        console.log ('El carro esta lleno', this.fuelTank)
    //    }
//
    //    else if (this.fuelTank >= 100){
    //            console.log ('El carro ya tiene gasolina, no sobrellenar', this.fuelTank = 100);}
    //
    //            return;  
    //}
   //
    //}