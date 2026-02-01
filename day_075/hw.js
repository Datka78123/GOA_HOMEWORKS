
const greet = (name, callback) => {
    console.log(`Hello, ${name}!`);
    callback();
};

greet("David", () => {
    console.log("greeting!"); 
});

