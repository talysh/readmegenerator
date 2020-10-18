const fs = require("fs");
const util = require("util");
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        name: "title",
        type: "input",
        message: "Enter project title: ",
    },
    {
        name: "description",
        type: "input",
        message: "Enter project description: ",
    },
    {
        name: "installation",
        type: "input",
        message: "Enter installation instructions: ",
    },
    {
        name: "usage",
        type: "input",
        message: "What is the intended use for the application: ",
    },
    {
        name: "contributors",
        type: "input",
        message: "Who will be contributing to the project: ",
    },
    {
        name: "tests",
        type: "input",
        message: "Provide some test cases: ",
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license type",
        choices: ["Community", "MIT", "GNU GPLv3"],
    },
    {
        name: "gitHubUserName",
        type: "input",
        message: "Enter GitHub username: ",
    },
    {
        name: "email",
        type: "input",
        message: "Enter email address: ",
    },

];

// function to write README file
async function writeToFile(fileName, data) {
    const readMeTemplate = markDown.generateMarkdown(data);

    try {
        await writeFileAsync(fileName, readMeTemplate);

    } catch (error) {
        throw Error(error);
    }
}

// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);

        writeToFile("readme.md", answers)
        // console.log(answers);
    } catch (error) {
        throw Error(error);
    }
}

// function call to initialize program
init();
