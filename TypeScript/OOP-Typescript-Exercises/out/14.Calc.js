"use strict";
class Calculator {
    calculate(operation, a, b, c, d) {
        let validNums = [a, b, c, d].filter(el => el !== undefined);
        switch (operation) {
            case "power": return a ** b;
            case "log": return Math.log(a) / Math.log(b);
            case "add": return validNums.reduce((acc, el) => acc + el);
            case "subtract": return validNums.reduce((acc, el) => acc - el);
            case "multiply": return validNums.reduce((acc, el) => acc * el);
            case "divide": return validNums.reduce((acc, el) => acc / el);
        }
    }
}
const calc = new Calculator();
console.log(calc.calculate('power', 2, 3));
console.log(calc.calculate('power', 4, 1 / 2));
console.log(calc.calculate('log', 8, 2));
console.log(calc.calculate('add', 10, 5));
console.log(calc.calculate('add', 10, 5, 3));
console.log(calc.calculate('subtract', 10, 5));
console.log(calc.calculate('multiply', 2, 3, 4));
console.log(calc.calculate('divide', 100, 5, 2, 2));
//# sourceMappingURL=14.Calc.js.map