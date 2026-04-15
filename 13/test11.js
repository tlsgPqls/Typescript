"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = { name: "son", age: 33, major: "soccer" };
const p2 = { name: "don", age: 22, skill: "computer" };
function description(p) {
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
function info(p) {
    const result = `${p.name},${p.major},${p.skill}`;
    console.log(p.name);
}
description(p1);
description(p2);
info({ name: "son", age: 34, major: "ccocmo", skill: "socccd" });
