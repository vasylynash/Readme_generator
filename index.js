// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils/utils.js");

// TODO: Create an array of questions for user input
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
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    }
];


// TODO: Create a function to write README file



function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>
        err ? console.log(err) : "File created!")

}

// TODO: Create a function to initialize app
function init() {
    inquirer.
        prompt(questions)

        .then((answers) => writeToFile("README_TEST.md", utils.generateMarkdown(answers))

        )
        // .then((data) => writeToFile("README_test.md", data))
        .catch(err => console.log(err))
};

// Function call to initialize app
init();

