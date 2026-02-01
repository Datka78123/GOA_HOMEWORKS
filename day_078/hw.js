// 1️⃣ Random background color button
const randomBgBtn = document.getElementById("random-bg-btn");
randomBgBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// 2️⃣ Live input to paragraph
const liveInput = document.getElementById("live-input");
const liveOutput = document.getElementById("live-output");
liveInput.addEventListener("input", () => {
    liveOutput.innerText = liveInput.value;
});

// 3️⃣ Increase H1 font size
const dynamicTitle = document.getElementById("dynamic-title");
const increaseFontBtn = document.getElementById("increase-font-btn");
let fontSize = 32; // initial px
dynamicTitle.style.fontSize = fontSize + "px";

increaseFontBtn.addEventListener("click", () => {
    fontSize += 4;
    dynamicTitle.style.fontSize = fontSize + "px";
});

// 4️⃣ Image hover change
const dynamicImage = document.getElementById("dynamic-image");
const originalSrc = dynamicImage.src;
const hoverSrc = "https://picsum.photos/200/150?random=2";

dynamicImage.addEventListener("mouseenter", () => {
    dynamicImage.src = hoverSrc;
});
dynamicImage.addEventListener("mouseleave", () => {
    dynamicImage.src = originalSrc;
});

// 5️⃣ Change page background via color buttons
const colorBtns = document.querySelectorAll(".color-btn");
colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const color = btn.dataset.color;
        document.body.style.backgroundColor = color;
    });
});
