class Vehical {
  constructor(private color: string) {}

  public drive(): void {
    console.log(`chuga chuga`);
  }
  public honk(): void {
    console.log(`beep beep`);
  }
}

const vehical = new Vehical("orange");
vehical.drive();
vehical.honk();

class Car extends Vehical {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("vroom");
  }

  public startDrivingProccess() {
    this.drive();
  }
}

const car = new Car(4, "black");
car.drive();

// access modifier public, private, protected
// private => in current class only
// public => anuwhere
// protected => current class and child classes
