class Car {
    make;
    model
    year;
    mph = 0;


    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    accelerate() {
        if (this.mph == 0) {
            this.mph += 5
        }
        this.mph *= 1.25
    }

    brake() {
        if (this.mph > 0) {
            this.mph *= .7
        }
    }

    showCarInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`)
        console.log(`Current speed: ${Math.round(this.mph)} mph`)
    }
}

const myNewCar = new Car('Tesla', 'Model X', 2018);
myNewCar.accelerate();
myNewCar.accelerate();
myNewCar.accelerate();
myNewCar.brake();

myNewCar.showCarInfo();
