// 1) წამოიღეთ h1 ელემენტი და შეცვალეთ ტექსტი innerText-ით
const h1 = document.querySelector("h1");
h1.innerText = "Updated Title with innerText";

// 2) წამოიღეთ ელემენტი Id-ით და შეცვალეთ სტილი
const idBox = document.getElementById("single-box");
idBox.style.backgroundColor = "purple";
idBox.style.fontSize = "20px";
idBox.style.padding = "20px";
idBox.style.textAlign = "center";
idBox.style.color = "white";
idBox.style.marginBottom = "20px";

// 3) წამოიღეთ ელემენტები class-ით
const boxes = document.getElementsByClassName("colored-box");

// 4) გასტილეთ for loop-ით, სხვადასხვა ფერით
const colors = ["red", "green", "blue", "orange"];
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].style.padding = "20px";
    boxes[i].style.margin = "10px";
    boxes[i].style.borderRadius = "10px";
    boxes[i].style.textAlign = "center";
}

// 5) DOM-ის სხვა მეთოდები: innerHTML
const htmlBox = document.getElementById("html-text");
htmlBox.innerHTML = "<strong>This text is now bold using innerHTML!</strong>";
htmlBox.style.color = "darkblue";
htmlBox.style.fontSize = "18px";
htmlBox.style.marginTop = "20px";

// 6) innerText vs innerHTML difference demonstration
// innerText = only text content
// innerHTML = can parse HTML tags
const demoDiv = document.createElement("div");
demoDiv.innerText = "<em>This will show as plain text</em>";
demoDiv.style.marginTop = "10px";
document.body.appendChild(demoDiv);

const demoDiv2 = document.createElement("div");
demoDiv2.innerHTML = "<em>This will show as italic text</em>";
demoDiv2.style.marginTop = "10px";
document.body.appendChild(demoDiv2);
