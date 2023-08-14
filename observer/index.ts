import Observable from './observable';


const observable = new Observable();

const callback1 = (data: string) => {
  console.log('callback 1 events:', data);
}

const callback2 = (data: string) => {
  console.log('callback 2 events:', data);
}

observable.subscribe(callback1);

observable.subscribe(callback2);

setTimeout(() => {
  observable.notify('notify1');
  observable.unsubscribe(callback1);
  observable.notify('notify2');
}, 3000);

console.log('add by ali')
console.log('add by rabiee')