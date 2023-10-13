import {vehicleFactory} from "./factory";

const car = vehicleFactory.createVehicle("car")
const truck = vehicleFactory.createVehicle("truck")
const motorcycle = vehicleFactory.createVehicle("motorcycle")
console.log(car)
console.log(truck)
console.log(motorcycle)
