
// 1) შექმენი ობიექტი calculator
const calculator = {
    a: 10,
    b: 5,
    add() {
        return this.a + this.b;
    },
    subtract() {
        return this.a - this.b;
    },
    multiply() {
        return this.a * this.b;
    },
    divide() {
        return this.a / this.b;
    }
};

console.log("Calculator:");
console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());

// 2) შექმენი calculatorWithSymbol (user interaction)
const calculatorWithSymbol = {
    number1: 0,
    number2: 0,
    userSymbol: "",
    calculate() {
        switch (this.userSymbol) {
            case "+":
                return this.number1 + this.number2;
            case "-":
                return this.number1 - this.number2;
            case "*":
                return this.number1 * this.number2;
            case "/":
                return this.number1 / this.number2;
            default:
                return "Unknown operation!";
        }
    }
};

// Prompt user
calculatorWithSymbol.number1 = parseFloat(prompt("Enter first number:"));
calculatorWithSymbol.number2 = parseFloat(prompt("Enter second number:"));
calculatorWithSymbol.userSymbol = prompt("Enter symbol (+, -, *, /):");

console.log("CalculatorWithSymbol result:", calculatorWithSymbol.calculate());

// 3) შექმენი counter ობიექტი chaining შესაძლებლობით
const counter = {
    count: 0,
    increment() {
        this.count++;
        return this;
    },
    decrement() {
        this.count--;
        return this;
    },
    show() {
        console.log("Counter:", this.count);
        return this;
    }
};

// Chaining example
counter.increment().increment().decrement().show(); // should print 1

// 4) შექმენი messageBuilder ობიექტი chaining შესაძლებლობით
const messageBuilder = {
    text: "",
    add(word) {
        this.text += word + " ";
        return this;
    },
    upper() {
        this.text = this.text.toUpperCase();
        return this;
    },
    print() {
        console.log(this.text.trim());
        return this;
    }
};

// Chaining example
messageBuilder.add("hello").add("world").upper().print(); // prints "HELLO WORLD"

// 5) Temperature Converter ობიექტის მეთოდებით
const temperature = {
    celsius: 25,
    toFahrenheit() {
        this.fahrenheit = this.celsius * 9/5 + 32;
        return this;
    },
    toKelvin() {
        this.kelvin = this.celsius + 273.15;
        return this;
    },
    print() {
        console.log(`Celsius: ${this.celsius}`);
        if(this.fahrenheit !== undefined) console.log(`Fahrenheit: ${this.fahrenheit}`);
        if(this.kelvin !== undefined) console.log(`Kelvin: ${this.kelvin}`);
        return this;
    }
};
