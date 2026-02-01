
// 1) კომენტარების სახით ახსენით ობიექტი
// ობიექტი არის სტრუქტურა, რომელიც ინახავს key-value წყვილებს.
// ეს არის data bundle, მაგალითად: ადამიანი, მანქანა, პროდუქტი.

// 2) შექმენი ობიექტი სახელით person, რომელსაც ექნება name, age, city
let person = {
    name: "David",
    age: 25,
    city: "Tbilisi"
};

console.log("Person object:", person);

// 3) შეცვალე person.age სხვა რიცხვზე და დაბეჭდე შედეგი
person.age = 30;
console.log("Updated age:", person.age);

// 4) წაშალე city თვისება
delete person.city;
console.log("After deleting city:", person);

// 5) შექმენი car ობიექტი, დაბეჭდე ყველა key და value
let car = {
    brand: "BMW",
    model: "E46",
    year: 2003
};

console.log("Car keys:");
for (let key in car) {
    console.log(key);
}

console.log("Car values:");
for (let key in car) {
    console.log(car[key]);
}

// 6) შექმენი ობიექტების სია users, სადაც თითოეულს ექნება name და age. დაბეჭდე ყველა მომხმარებლის სახელი და ასაკი
let users = [
    {name: "Luka", age: 17},
    {name: "Nino", age: 22},
    {name: "Giorgi", age: 30},
    {name: "Mariam", age: 15}
];

console.log("All users:");
for (let i = 0; i < users.length; i++) {
    console.log("Name:", users[i].name, "| Age:", users[i].age);
}

// 7) დაბეჭდე მხოლოდ ის მომხმარებლები, რომლებიც მეტია 18-ზე
console.log("Users older than 18:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log("Name:", users[i].name, "| Age:", users[i].age);
    }
}

// ალტერნატივი filter() მეთოდით
let adults = users.filter(user => user.age > 18);
console.log("Adults using filter():", adults);

// 8) შექმენი სია cars, სადაც თითოეულ ობიექტს ექნება brand და year. დაბეჭდე მხოლოდ ახალი მანქანები
let cars = [
    {brand: "Toyota", year: 2010},
    {brand: "Honda", year: 2005},
    {brand: "BMW", year: 2022},
    {brand: "Mercedes", year: 2018}
];

console.log("New cars (after 2015):");
for (let i = 0; i < cars.length; i++) {
    if (cars[i].year > 2015) {
        console.log(cars[i]);
    }
}

// 9) შექმენი სია products (name, price). იპოვე ყველაზე ძვირი პროდუქტი
let products = [
    {name: "Laptop", price: 1200},
    {name: "Phone", price: 800},
    {name: "Tablet", price: 600},
    {name: "Monitor", price: 400}
];

let mostExpensive = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
        mostExpensive = products[i];
    }
}
console.log("Most expensive product:", mostExpensive);

// 10) products სიიდან დაბეჭდე მხოლოდ პროდუქტის სახელები
console.log("Product names:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}
