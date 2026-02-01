
// 1) კომენტარების სახით ახსენით for loop
// for loop არის ლუპი, რომელსაც ვიყენებთ, როცა გვსურს რაღაცის გამეორება განსაზღვრული რაოდენობით.

// 2) როგორ ვქმნით for loop-ს:
// for (საწყისი; პირობები; ინკრემენტი/დეკრემენტი) {
// }

// 3) დაბეჭდო რიცხვები 1–დან 5-მდე
console.log("1–დან 5-მდე რიცხვები:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4) დაბეჭდო რიცხვები 10–დან 1-მდე
console.log("10–დან 1-მდე რიცხვები:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 5) შექმენით arr, გადაუარეთ ამ arr-ს და დაბეჭდეთ თითოეული ელემენტი
const arr = [5, 10, 15, 20];
console.log("Array elements:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 6) მასივში ['a', 'b', 'c', 'd'] თითოეული ელემენტი გადააქციო დიდ ასოებად და დაბეჭდო
const letters = ['a', 'b', 'c', 'd'];
console.log("Uppercase letters:");
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i].toUpperCase());
}

// 7) დაბეჭდო ყველა ლუწი რიცხვი 1–დან 20-მდე
console.log("ლუწი რიცხვები 1–დან 20-მდე:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 8) შექმენი მასივი [3, 7, 10, 15, 20] და დაბეჭდო მხოლოდ ის რიცხვები, რომლებიც 10-ზე მეტია
const numbers = [3, 7, 10, 15, 20];
console.log("რიცხვები >10:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

// 9) გამოიყენე for loop, რომ 1–დან 10-მდე ყველა რიცხვის ჯამი გამოითვალო და დაბეჭდე
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("ჯამი 1–დან 10-მდე:", sum);

// 10) FizzBuzz: დაბეჭდე 1–დან 50-მდე, მაგრამ:
// 3-ის ჯერადი -> "Fizz"
// 5-ის ჯერადი -> "Buzz"
// 15-ის ჯერადი -> "FizzBuzz"
console.log("FizzBuzz 1–დან 50-მდე:");
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
