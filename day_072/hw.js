// 1) getElementById + innerHTML
const helloDiv = document.getElementById("hello-div");
helloDiv.innerHTML = "Hello, World!";

// 2) querySelector + add h2
const titleDiv = document.querySelector(".title-div");
titleDiv.innerHTML = "<h2>This is a H2 heading added via JS</h2>";

// 3) getElementsByClassName, first element + add p
const paraDivs = document.getElementsByClassName("para-div");
paraDivs[0].innerHTML = "<p>This is a paragraph</p>";

// 4) querySelector section + replace content with ul
const mySection = document.querySelector(".my-section");
mySection.innerHTML = `
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
    </ul>
`;

// 5) getElementById + add image via innerHTML
const imageDiv = document.getElementById("image-div");
imageDiv.innerHTML = `<img src="https://picsum.photos/150/100" alt="Random Image">`;

// 6) querySelector + append content
const appendDiv = document.querySelector("#append-div");
appendDiv.innerHTML += "<span> Appended new text!</span>";

// 7) getElementById + replace old content
const replaceDiv = document.getElementById("replace-div");
replaceDiv.innerHTML = "New content updated!";

// 8) querySelector main + add multiple blocks
const main = document.querySelector("main");
main.innerHTML = `
    <div style="background:#f2f2f2; padding:10px;">Block 1</div>
    <p style="color:blue;">This is a paragraph inside main</p>
    <div style="background:#c2f0c2; padding:10px;">Block 2</div>
`;
