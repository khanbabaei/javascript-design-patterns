export interface Vehicle {
    name: string;
    wheels: number;
    turnOn: () => void;
}

export class Car implements Vehicle {
    name = "Car";
    wheels = 4;
    turnOn = () => console.log("car is hereee!!");
}

export class Truck implements Vehicle {
    name = "Truck";
    wheels = 8;
    turnOn = () => console.log("truck is here !!");
}

export class Motorcycle implements Vehicle {
    name = "Motorcycle";
    wheels = 2;
    turnOn = () => console.log("motor is here!!");
}

// Create an abstract factory interface
export interface VehicleFactoryType {
    createVehicle(type: string): Vehicle | null;
}

// Implement the factory
export const vehicleFactory: VehicleFactoryType = {
    createVehicle(type: string): Vehicle | null {
        switch (type) {
            case "car":
                return new Car();
            case "truck":
                return new Truck();
            case "motorcycle":
                return new Motorcycle();
            default:
                return null;
        }
    }
};

