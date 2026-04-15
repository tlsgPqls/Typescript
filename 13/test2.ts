function sayHello(name: string): string {
  return "Hello ${name}";
}
let greeting = sayHello("RM");
console.log(greeting);
function sayHi(name: string): void {
  console.log(`Hi ${name}`);
}
const hi = sayHi("손흥민");
console.log(hi);
