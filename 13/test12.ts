//union intersection 교집합

interface Person {
  name: string;
}
interface Person {
  age: number;
}
interface Person {
  name: string;
  age: number;
}

//확장방법 1. extends 2. 선언병합

interface Maker {
  name: string;
  country: string;
}
interface Car {
  model: string;
  maker: Maker; //Interface 의 Maker
}
