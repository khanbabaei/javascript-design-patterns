import { Singleton } from "./singleton";

describe("Singleton", () => {
  it("should return the same instance for multiple calls to getInstance", () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    expect(s1).toBe(s2);
  });
});