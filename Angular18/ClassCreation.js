class Infotainment{
    constructor(name){
        this.name = name;
    }

    play(){
        console.log(`${this.name} is now playing`);
    }
};

class Car {
    myRadio  = {};
    constructor(model, owner, infotainment) {
        this.model = model; 
        this.owner = owner;
        this.myRadio = infotainment;
    }

    Run(){
        console.log(`Car owned by ${this.owner}  of the model ${this.model} is running`);
        this.myRadio.play();
    }
}

const myCar = new Car("Toyota", "Phaniraj");
myCar.myRadio = new Infotainment("Blaupunk")
myCar.Run();