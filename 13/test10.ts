interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  major: string;
}
const s: Student = { name: "손", age: 1, major: "dd" };
const s1: Student = { name: "손", age: 2, major: "" };
console.log(s);
console.log(s1);
