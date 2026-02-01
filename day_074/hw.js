
// 1) მარტივი arrow ფუნქციები
// Arrow function არის მოკლე სინტაქსი ფუნქციის შექმნისთვის
// example 1: აბრუნებს "Hello"
const sayHello = () => "Hello";
console.log(sayHello()); // Output: Hello

// example 2: იღებს 2 რიცხვს და აბრუნებს მათ ჯამს
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // Output: 15

// example 3: იღებს რიცხვს და აბრუნებს ლუწია თუ კენტია
const evenOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log(evenOdd(7)); // Output: Odd
console.log(evenOdd(12)); // Output: Even

// 2) რა არის callback?
// Callback არის ფუნქცია, რომელიც გაიგზავნება სხვა ფუნქციაში პარამეტრად და გამოიძახება შემდეგში.
// ეს საჭიროა, როცა გვინდა, რომ რაღაც მოხდა ფუნქციის დასრულების შემდეგ.

const greetUser = (name, callback) => {
    console.log("Hello " + name);
    callback();
};

greetUser("David", () => {
    console.log("This is a callback function!");
});
