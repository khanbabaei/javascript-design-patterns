import Observable from "./observable";
import {describe, expect, test} from '@jest/globals';


describe('check trigger events', () => {
  test('check triger event',  (done) => {
    const observable = new Observable();

    observable.subscribe((data) => {
      expect(data).toBe('test');;
      done();
    })

    setTimeout(() => {
      observable.notify('test');
    }, 1000)

  });
});