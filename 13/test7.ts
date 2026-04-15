function gugu(num: number) {
  for (let i = 1; i < 10; i++) {
    console.log(i * num + "=" + i * num);
  }
}
gugu(3);
let num: number;
function Getgrade(score: number) {
  let grade: string;
  switch (score / 10) {
    case 10:
    case 9:
      grade = "A";
      break;
    case 8:
      grade = "B";
      break;
    default:
      grade = "F";
      break;
  }
  return grade;
}
console.log(Getgrade(90));
