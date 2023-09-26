
import { CustomPrototype } from "./prototype";

describe('Prototype Pattern Tests', () => {
  it('should clone the prototype object', () => {
    const prototypeInstance = new CustomPrototype('Hello', 42);

    const clonedInstance = prototypeInstance.clone();

    expect(prototypeInstance).not.toBe(clonedInstance); // Ensure they are not the same instance
    expect(prototypeInstance.property1).toBe(clonedInstance.property1);
    expect(prototypeInstance.property2).toBe(clonedInstance.property2);
  });
});
