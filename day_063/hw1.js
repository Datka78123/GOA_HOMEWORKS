// 1
let num = 5;
if (num > 0) {
    console.log("დადებითი");
} else if (num < 0) {
    console.log("უარყოფითი");
} else {
    console.log("ნულის ტოლია");
}

// 2
let n = 7;
if (n % 2 === 0) {
    console.log("ლუწი");
} else {
    console.log("კენტი");
}

// 3
let age = 15;
if (age >= 0 && age <= 12) {
    console.log("ბავშვი");
} else if (age >= 13 && age <= 19) {
    console.log("მოზარდი");
} else {
    console.log("ზრდასრული");
}

// 4
let a = 12;
let b = 20;
if (a > b) {
    console.log(a + " უფრო დიდი");
} else if (b > a) {
    console.log(b + " უფრო დიდი");
} else {
    console.log("ტოლია");
}

// 5
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 6
let j = 1;
let sum = 0;
while (j <= 100) {
    sum += j;
    j++;
}
console.log("ჯამი =", sum);

// 7
let k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}

// 8
let m = 10;
while (m >= 0) {
    console.log(m);
    m--;
}

// 9
// String → Number
let s1 = "123";
let s2 = "45.6";
let s3 = "10";
let s4 = "0";
let s5 = "999";

console.log(Number(s1));
console.log(parseInt(s2));
console.log(parseFloat(s2));
console.log(+s3);
console.log(Number(s5));

// 10
// typeof გვიჩვენებს მონაცემის ტიპს
console.log(typeof 123);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof { name: "Ana" });
