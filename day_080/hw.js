
//forEach


// 1) forEach – element + index
const arr = [10, 20, 30, 40];
arr.forEach((el, idx) => {
    console.log(`Index ${idx}: ${el}`);
});

// 2) forEach – word length
const words = ["apple", "banana", "cat"];
words.forEach(word => {
    console.log(`${word}: ${word.length}`);
});

// 3) forEach – sum of numbers
const nums = [3, 6, 9, 12];
let total = 0;
nums.forEach(num => total += num);
console.log("Sum of nums:", total);

// 4) forEach – users name: age
const users = [
    {name: "Nika", age: 17},
    {name: "Lika", age: 19}
];
users.forEach(user => console.log(`${user.name}: ${user.age}`));

// 5) forEach – add # before letters
const letters = ["a", "b", "c"];
letters.forEach(letter => console.log(`#${letter}`));



//map


// 1) nums * 5
const nums2 = [1,2,3,4];
const numsTimes5 = nums2.map(n => n * 5);
console.log("Nums * 5:", numsTimes5);

// 2) names uppercase
const names = ["Ana", "Gio", "Nika"];
const namesUpper = names.map(n => n.toUpperCase());
console.log("Uppercase names:", namesUpper);

// 3) prices + 18% VAT
const prices = [10, 20, 30];
const pricesWithVAT = prices.map(p => +(p * 1.18).toFixed(2));
console.log("Prices with VAT:", pricesWithVAT);

// 4) sentences add !
const sentences = ["hi", "hello", "js"];
const excited = sentences.map(s => s + "!");
console.log("Excited sentences:", excited);

// 5) extract only prices from objects
const items = [
    {product: "milk", price: 3},
    {product: "bread", price: 2}
];
const onlyPrices = items.map(item => item.price);
console.log("Only prices:", onlyPrices);
