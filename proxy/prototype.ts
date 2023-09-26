export class CustomPrototype {
    public property1: string;
    public property2: number;
  
    constructor(property1: string, property2: number) {
      this.property1 = property1;
      this.property2 = property2;
    }
  
    clone(): this {
      const clone = Object.create(this);
      return clone;
    }
  }
  
  
  