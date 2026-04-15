// union type_ interface
interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  major: string;
}
interface Player extends Person {
  skill: string;
}
const p1: Student = { name: "son", age: 33, major: "soccer" };
const p2: Player = { name: "don", age: 22, skill: "computer" };

function description(p: Student | Player) {
  if ("major" in p) {
    const info = `${p.name},${p.age},${p.major}`;
    console.log(info);
    return;
  }
  if ("skill" in p) {
    const info = `${p.name},${p.age},${p.skill}`;
    console.log(info);
  }
}
function info(p: Student & Player) {
  const result = `${p.name},${p.major},${p.skill}`;
  console.log(p.name);
}
description(p1);
description(p2);
info({ name: "son", age: 34, major: "ccocmo", skill: "socccd" });
