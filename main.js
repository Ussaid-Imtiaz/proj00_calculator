import chalk from "chalk";
import inquirer from "inquirer";
import add from "./add.js";
import substract from "./substract.js";
import multiply from "./multiply.js";
import divide from "./divide.js";
// console.log(add(5,7))
const calculator = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter the first number",
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter the second number",
    },
    {
        name: "sign",
        type: "checkbox",
        message: "Do you want to add, substract, multiply or divide?",
        choices: ["Add", "Substract", "Multiply", "Divide"],
    },
]);
console.log(chalk.green.bold.bgWhite.underline(calculator.firstNumber));
console.log(chalk.underline.red.bgWhite.bold(calculator.secondNumber));
console.log(chalk.underline.blueBright.bgWhite.bold(calculator.sign));
if (calculator.sign == "Add") {
    console.log(add(calculator.firstNumber, calculator.secondNumber));
}
else if (calculator.sign == "Substract") {
    console.log(substract(calculator.firstNumber, calculator.secondNumber));
}
else if (calculator.sign == "Multiply") {
    console.log(multiply(calculator.firstNumber, calculator.secondNumber));
}
else if (calculator.sign == "Divide") {
    console.log(divide(calculator.firstNumber, calculator.secondNumber));
}
