class Car{
    constructor(name,accelerationPower,brakingPower,fuel,fuelCapacity){
        this.name=name;
        this.accelerationPower=accelerationPower;
        this.brakingPower=brakingPower;
        this.speed=0;
        this.fuel=fuel;
        this.fuelCapacity=fuelCapacity;
    }

    accelerate(){
        this.speed+=this.accelerationPower;
        this.fuel-=this.accelerationPower;
        if (this.fuel<0){
            this.fuel=0;
        }
        console.log(`Accelerating, current speed : ${this.speed}`);
    }

    brake(){
        if(this.speed>this.brakingPower){
            this.speed-=this.brakingPower;
        }else{
            this.speed=0;
        }
        console.log(`Brake applied, current speed : ${this.speed}`);
    }

    CheckSpeed(){
        return `Current speed : ${this.speed}`;
    }

    refuel(){
        this.fuel=this.fuelCapacity;
        console.log(`Refueled to maximum capacity: ${this.fuel}`);
        
    }
    
    drive(time){
        for(let i=1;i<time;i++){
            if(i%5===0){
                this.accelerate();
            }
            else if(i%6===0){
                this.brake();
            }

            if(this.fuel===0){
                console.log(`Fuel is Over, please refuel and start`);
                break;
            }
        }
    }
}

const myCar = new Car("Speedster", 5, 3,0,20);
console.log(myCar.CheckSpeed());
myCar.refuel();
myCar.drive(30);
