//union type

let num: number | string = 10; //num or string type
num = "10";
console.log(typeof num);
function getAge(age: number | string): string {
  return "너의 나이는" + age;
}
console.log(getAge(30));
console.log(getAge("20"));
