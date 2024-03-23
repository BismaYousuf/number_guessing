#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// gussing number game
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess the number 1 to 10",
    }
]);
if (answers.userGussedNumber === randomNumber) {
    console.log(chalk.yellow("congragulations! You guessed the correct number!"));
}
else {
    console.log(chalk.red("oppsss! sorry you guessed the wrong number try again!"));
}
