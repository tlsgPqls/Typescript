/* */
function sayHello(name: string): string {
  return `Hello ${name}`;
}
const uname: string = "손흥민";
console.log(sayHello(uname));

let num: number = 10;
const greet: string = "Hello TypeScript";
const isOn: boolean = true;
const person: object = { name: "손", age: 10 };
const number: number[] = [1, 2, 3, 4, 5];
const bts: string[] = ["진", "슈가", "제이홉"];
const item: [string, number, boolean] = ["손흥민", 30, true];
let name: any = "손흥민";
name = 1;
let empty: null = null;
let notAssigned: undefined = undefined;
console.log(person);
console.log(bts);
