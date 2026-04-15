const person = { name: "손흥민", age: 30 };
interface Person {
  name: string;
  age: number;
}
const person1: Person = { name: "손흥민", age: 30 };

const data = { title: "movietitle", rank: 1 };
interface Movie {
  title: string;
  rank: number | string;
}
const data1: Movie = { title: "마당을 나온 암탉", rank: 1 };
console.log(data1);
