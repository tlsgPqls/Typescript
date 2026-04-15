"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `Hello ${name}`;
}
//(name: string, age:number)=>number
function greeting(name, callback) {
    return callback(name);
}
const result = greeting("손흥민", sayHello);
const result1 = greeting("이강인", (name) => `Hello${name}`);
const result2 = greeting("dd", (name) => `helo ${name}`);
console.log(result, result1);
