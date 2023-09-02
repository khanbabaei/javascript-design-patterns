import CreatePerson from "./factory"

describe('check person creation', () => {

  test('check developer', () => {
    const pr = CreatePerson('developer');
    expect(pr !== undefined).toBe(true)
    expect(pr).not.toBe(null)
    expect(pr.role).toBe('developer');
  })

  test('check designer', () => {
    const pr = CreatePerson('designer');
    expect(pr !== undefined).toBe(true)
    expect(pr).not.toBe(null)
    expect(pr.role).toBe('designer');
  })

  test('check doctor', () => {
    const pr = CreatePerson('doctor');
    expect(pr !== undefined).toBe(true)
    expect(pr).not.toBe(null)
    expect(pr.role).toBe('doctor');
  })
})
