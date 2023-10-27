export interface OldSystem {
    requestOldData(): string;
  }
  export class LegacySystem implements OldSystem {
    requestOldData(): string {
      return "Legacy data";
    }
  }

  export interface NewSystem {
    requestNewData(): string;
  }
  
  export class LegacySystemAdapter implements NewSystem {
    private legacySystem: OldSystem;
  
    constructor(legacySystem: OldSystem) {
      this.legacySystem = legacySystem;
    }
  
    requestNewData(): string {
      const oldData = this.legacySystem.requestOldData();
      return `Adapted: ${oldData}`;
    }
  }