// 1) JavaScript-ში ცვლადის შესაქმნელად ვიყენებთ სიტყვებს: var, let და const.
// var — ძველი მეთოდი, ფუნქციის დონის scope აქვს.
// let — ბლოკის დონის scope, შესაძლებელია მნიშვნელობის შეცვლა.
// const — ბლოკის დონის scope, მაგრამ მისი მნიშვნელობის შეცვლა შეუძლებელია.

// 2)
let name = "David";
console.log("გამარჯობა, მე ვარ " + name);

// 3)
let age = 20;
let city = "Tbilisi";
console.log("მე ვარ " + age + " წლის და ვცხოვრობ " + city + "-ში");

// 4)
let isStudent = true;
console.log("სტუდენტი ვარ? " + isStudent);

// 5)
const pi = 3.14;
// pi = 3.1415; // შეცდომას გამოიტანს, რადგან const ცვლადი უცვლადია

// 6)
let a = 10;
let b = 5;
console.log("ჯამი:", a + b);
console.log("სხვაობა:", a - b);
console.log("ნამრავლი:", a * b);
console.log("განაყოფი:", a / b);

// 7)
let firstName = "David";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName);

// 8)
let userName = prompt("შეიყვანე შენი სახელი:");
console.log("გამარჯობა, " + userName);

// 9)
let userAge = prompt("შეიყვანე შენი ასაკი:");
alert("შენი ასაკია " + userAge);

// 10) prompt — ფანჯარა, სადაც მომხმარებელს შეუძლია ტექსტის/მნიშვნელობის შეყვანა.
// 11) alert — ფანჯარა, რომელიც მომხმარებელს მხოლოდ მესიჯს აჩვენებს.

// 12)
let number = prompt("შეიყვანე რიცხვი:");
number = Number(number);
console.log("რიცხვი + 5 =", number + 5);
console.log("რიცხვი - 2 =", number - 2);
console.log("რიცხვი * 3 =", number * 3);
console.log("რიცხვი / 4 =", number / 4);
