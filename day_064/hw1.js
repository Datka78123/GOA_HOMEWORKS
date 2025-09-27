// 1
// ფუნქციების შექმნის რამდენიმე ხერხი გვაქვს JS-ში:
// 1) Function Declaration → ჩვეულებრივი სახელიანი ფუნქცია
// 2) Function Expression → ანონიმური ან სახელიანი ფუნქცია ცვლადში შენახული
// 3) Arrow Function → მოკლე სინტაქსი, ES6-იდან
// განსხვავება: Declaration "hoisted"-ია (შეიძლება გამოძახება წინ), Expression და Arrow არა.

// 2
function square(number) {
    return number * number;
}
console.log(square(4));

// 3
let fullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(fullName("David", "Smith"));

// 4
function double(number) {
    return number * 2;
}
console.log(double(7));

// 5
// for ციკლი იწყება სამი ნაწილით: ინიციალიზაცია; პირობა; ინკრემენტი/დეკრემენტი
// for (let i = 0; i < 10; i++) { ... }

// 6
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 7
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}

// 8
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 9
let countTo = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};
countTo(7);

// 10
let countByFive = (num) => {
    for (let i = 5; i <= num; i += 5) {
        console.log(i);
    }
};
countByFive(30);
