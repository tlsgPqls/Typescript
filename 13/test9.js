"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StudentInfo(s) {
    console.log(s.name);
    console.log(s.grade);
}
StudentInfo({ name: "손흥민", grade: 1, major: "컴공" });
const s1 = { name: "손흥민", grade: 1 };
StudentInfo(s1);
const s2 = { name: "손흥민", grade: 1 };
StudentInfo(s2);
