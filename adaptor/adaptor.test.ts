import { OldSystem, LegacySystem, NewSystem, LegacySystemAdapter } from './adaptor'; // Replace with your actual module imports

describe('Adapter Pattern Test', () => {
  let legacySystem: OldSystem;
  let adapter: NewSystem;

  beforeEach(() => {
    legacySystem = new LegacySystem();
    adapter = new LegacySystemAdapter(legacySystem);
  });

  test('Legacy system can provide old data', () => {
    expect(legacySystem.requestOldData()).toBe('Legacy data');
  });

  test('Adapter can provide adapted data', () => {
    expect(adapter.requestNewData()).toBe('Adapted: Legacy data');
  });
});
