import { Vehicle, Car, Truck, Motorcycle } from './factory';

const originalConsoleLog = console.log;
const consoleLogMock = jest.fn();
console.log = consoleLogMock;

describe('VehicleFactory', () => {
    let vehicleFactory: {
        createVehicle(type: string): Vehicle | null;
    };

    beforeAll(() => {
        vehicleFactory = {
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
    });

    afterAll(() => {
        console.log = originalConsoleLog;
    });

    it('should create a car', () => {
        const car = vehicleFactory.createVehicle('car');
        expect(car).toBeInstanceOf(Car);
        expect(car!.name).toBe('Car');
    });

    it('should create a truck', () => {
        const truck = vehicleFactory.createVehicle('truck');
        expect(truck).toBeInstanceOf(Truck);
        expect(truck!.name).toBe('Truck');
    });

    it('should create a motorcycle', () => {
        const motorcycle = vehicleFactory.createVehicle('motorcycle');
        expect(motorcycle).toBeInstanceOf(Motorcycle);
        expect(motorcycle!.name).toBe('Motorcycle');
    });

    it('should return null for an unknown vehicle type', () => {
        const unknownVehicle = vehicleFactory.createVehicle('unknown');
        expect(unknownVehicle).toBeNull();
    });

    it('should call the turnOn method and log the sound', () => {
        const car = vehicleFactory.createVehicle('car');
        car!.turnOn();
        expect(consoleLogMock).toHaveBeenCalledWith('car is hereee!!');
    });
});
