export default class Observable {
  observers: Function[] = [];

  subscribe(clb: Function) {
    this.observers.push(clb);
    console.log("hee")
  }


  unsubscribe(clb: Function) {
    this.observers = this.observers.filter(callback => callback !== clb);
  }

  notify(data: string) {
    this.observers.forEach((clb) => {
      clb(data);
    })
  }
  
}