
// 1) კომენტარის სახით ახსენით do while ლუპი
// do...while ლუპი first executes code block, and only then checks the condition.
// ანუ loop ყოველთვის ერთხელ მაინც შესრულდება, მერე შემოწმდება პირობა.

// 2) განსხვავება ჩვეულებრივი while-სა და do...while-ს შორის:
// while: პირობა ჯერ შემოწმდება, მერე შესრულდება loop.
// do...while: loop შესრულდება ერთხელ მაინც, მერე შემოწმდება პირობა.

// 3) დაბეჭდე რიცხვები 1-დან 5-მდე do...while-ით
console.log("1–დან 5-მდე რიცხვები:");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// 4) დაბეჭდე რიცხვები 10-დან 1-მდე do...while-ით
console.log("10–დან 1-მდე რიცხვები:");
i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);

// 5) მომხმარებელს შემოაყვანინე რიცხვი prompt-ით და დაბეჭდე 1-დან ამ რიცხვამდე
let userNum = parseInt(prompt("Enter a number:"));
i = 1;
console.log(`1–დან ${userNum}-მდე რიცხვები:`);
do {
    console.log(i);
    i++;
} while (i <= userNum);

// 6) დაბეჭდე მხოლოდ ლუწი რიცხვები 1–დან 20-მდე do...while-ით
i = 1;
console.log("ლუწი რიცხვები 1–დან 20-მდე:");
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);

// 7) მომხმარებელს შემოაყვანინე რიცხვები მანამ, სანამ არ შეიყვანს უარყოფითს
let input;
do {
    input = parseInt(prompt("Enter a number (negative to stop):"));
    if (input >= 0) {
        console.log("You entered:", input);
    }
} while (input >= 0);

// 8) arrow function, რომელიც აბრუნებს ტექსტს "Hello, World!"
const sayHello = () => "Hello, World!";
console.log(sayHello());

// 9) arrow function, რომელიც მიიღებს ორ რიცხვს და აბრუნებს მათ ჯამს
const sumTwo = (a, b) => a + b;
console.log("Sum of 5 + 10 =", sumTwo(5,10));

// 10) arrow function, რომელიც იღებს რიცხვს და აბრუნებს "Even" თუ ლუწია, "Odd" თუ კენტია
const evenOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log("7 is", evenOdd(7));
console.log("12 is", evenOdd(12));

// 11) ახსენი რა არის Template Literals
// Template Literals არის backticks (`) გამოყენება, სადაც შეგიძლია ჩასვა ცვლადები ${variable}
// და გქონდეს multiline strings.

// 12) შექმენი ცვლადები: name და age, გამოიყენე Template Literals
let name = "David";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);

// 13) სახელი, პროფესია, ქვეყანა
let profession = "developer";
let country = "Georgia";
console.log(`My name is ${name}, I am a ${profession} from ${country}.`);

// 14) შექმენი ფუნქცია, რომელიც იღებს item, price, quantity და აბრუნებს წინადადებას
function purchase(item, price, quantity) {
    return `You bought ${quantity} ${item}(s) for a total of ${price * quantity} GEL.`;
}
console.log(purchase("apple", 5, 10));

// 15) ახსენი რა არის function expression
// Function expression არის ფუნქცია, რომელსაც ქმნი და შეინახავ ცვლადში:
// const myFunc = function() { ... }

// 16) function expression, რომელიც იღებს სახელს და დაბეჭდავს მისალმებას
const greet = function(userName) {
    console.log(`Hello, ${userName}!`);
};
greet("David");

// 17) function expression, რომელიც იღებს ორ რიცხვს და დაბეჭდავს მათ ჯამს
const sumFunc = function(a, b) {
    console.log(`Sum is: ${a + b}`);
};
sumFunc(8, 12);
