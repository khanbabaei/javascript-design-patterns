import { CustomPrototype } from "./prototype";

const prototypeInstance = new CustomPrototype('Hello', 42);
  
const clonedInstance = prototypeInstance.clone();
  
  // Check if the clone is a separate object with the same properties
  console.log(prototypeInstance === clonedInstance);
  console.log(prototypeInstance.property1 === clonedInstance.property1); 
  console.log(prototypeInstance.property2 === clonedInstance.property2); 