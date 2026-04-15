"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello ${name}";
}
let greeting = sayHello("RM");
console.log(greeting);
function sayHi(name) {
    console.log(`Hi ${name}`);
}
const hi = sayHi("손흥민");
console.log(hi);
