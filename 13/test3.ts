function sayHello(name: string): string {
  return `Hello ${name}`;
}
//(name: string, age:number)=>number
function greeting(name: string, callback: (name: string) => string): string { //함수선언부 타입
  return callback(name);
}
const result = greeting("손흥민", sayHello);
const result1 = greeting("이강인", (name: string) => `Hello${name}`);
console.log(result, result1);
