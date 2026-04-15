"use strict";
//union type
Object.defineProperty(exports, "__esModule", { value: true });
let num = 10; //num or string type
num = "10";
console.log(typeof num);
function getAge(age) {
    return "너의 나이는" + age;
}
console.log(getAge(30));
console.log(getAge("20"));
