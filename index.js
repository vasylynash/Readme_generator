const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require('chalk');
const utils = require("./utils/utils.js");

function validateInput(input) {
    if (input === "") {
        console.log(chalk.red(`Please enter ${this.name}`));
        return false;
    }
    if (this.emailValidation) {
        const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(input);
        if (!isValid) {
            console.log(chalk.red(" Please enter a valid email"));
        }
        return isValid;
    }
    return true;
}

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email",
        emailValidation: true,
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter the description for the project",
        name: "description",
    },
    {
        type: "input",
        message: "Enter the installation instructions",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter the usage instructions",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution",
    },
    {
        type: "input",
        message: "Add some tests",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    }
];

questions.forEach(el => el.validate = validateInput.bind(el))

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>
        err ? console.log(err) : "File created!")

}

function init() {
    inquirer.
        prompt(questions)
        .then((answers) => writeToFile("README.md", utils.generateMarkdown(answers))
        )
        .catch(err => console.log(err))
};

init();

