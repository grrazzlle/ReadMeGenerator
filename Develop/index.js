const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    name: 'title',
    message: 'What is your project title?',
  },
  {
    name: 'description',
    message: 'Please provide a description for your project.',
  },
  {
    name: 'installation',
    message: 'Please provide the installation instructions.',
  },
  {
    name: 'usage',
    message: 'Please provide the project usage.',
  },
  {
    name: 'contributing',
    message: 'Please provide the contributing parties.',
  },
  {
    name: 'tests',
    message: 'Please provide the project tests.',
  },
  {
    type: 'list',
    name: 'licence',
    message: 'Please provide the project licence or your badge link.',
    choices: ['MIT', 'GPL', 'AGPL', 'None'],
  },
  {
    name: 'username',
    message: 'What is your github user name?',
  },
  {
    name: 'email',
    message: 'What is your email adress?',
  },
];

// function to write README file
function writeToFile(data) {
  fs.writeFileSync('./README.md', generateMarkdown(data));
  console.log('Success!');
}

// function to initialize program
function init() {
  inquirer
      .prompt(questions)
      .then((data) => {
        writeToFile(data);
      });
}

// function call to initialize program
init();
