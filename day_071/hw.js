// 1) კომენტარის სახით ახსენი რა არის DOM
// DOM (Document Object Model) არის ბრაუზერის მიერ შექმნილი HTML ის ობიექტი
// HTML-ის ელემენტებისა. JS-ის საშუალებით შეგვიძლია შეცვალოთ, წაშალოთ,
// დაამატოთ ელემენტები, შეცვალოთ სტილი, ტექსტი და ა.შ.

// 2 & 3) DOM მეთოდები რაც გავიარეთ და რას აკეთებს:
// document.getElementById(id) - წამოიღებს ელემენტს id-ის მიხედვით
// document.querySelector(selector) - პირველი ელემენტი CSS selector-ის მიხედვით
// element.innerText - შეცვლის ან წაიკითხავს ტექსტს ელემენტში
// element.innerHTML - შეიცავს HTML content ელემენტში
// element.style.property - შეცვლის CSS სტილს ელემენტისთვის

// 4) პარაგრაფის წამოღება ID-ით და ტექსტის შეცვლა
const paraById = document.getElementById("para-id");
paraById.innerText = "This paragraph text was changed using JS and ID";

// 5) პარაგრაფის წამოღება class-ით და სტილის შეცვლა
const paraByClass = document.querySelector(".para-class");
paraByClass.style.color = "white";
paraByClass.style.backgroundColor = "teal";
paraByClass.style.padding = "10px";
paraByClass.style.borderRadius = "5px";
paraByClass.innerText = "This paragraph style was changed using JS and class";

// 6) h1 წამოღება querySelector()-ით
const h1 = document.querySelector("h1");
h1.innerText = "H1 text changed via querySelector()";
h1.style.color = "purple";

// 7) 5 პარაგრაფის წამოღება ერთნაირი class-ით და გასტილება for loop-ით
const multiParas = document.getElementsByClassName("multi-para");
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC300"];

for (let i = 0; i < multiParas.length; i++) {
    multiParas[i].style.backgroundColor = colors[i];
    multiParas[i].style.color = "white";
    multiParas[i].style.padding = "10px";
    multiParas[i].style.borderRadius = "5px";
    multiParas[i].innerText += " (styled via JS)";
}
