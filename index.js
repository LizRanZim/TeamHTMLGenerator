// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require ('inquirer');
const generateHTML = require('./src/generateHTML');

// TODO: Create an array of questions for user input
const teamManagerquestions = [
    {
        type: 'list',
        message: 'What role do you want to enter data for?',
        name: 'role',
        choices: ['Manager', 'Employee', 'Engineer', 'Intern'],

    },
   
    {
        type: 'input',
        message: 'What is the name of this person?',
        name: 'name',

    },
    
    {
        type: 'input',
        message: 'What is the id of this person?',
        name: 'id',
        
    },
    {
        type: 'input',
        message: 'What is the email address of this person?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of this person?',
        name: 'officeNumber',
        when: (response) => response.role === 'Manager'
    },
    

];

// example for showing or hiding questions based on input

// _questions = [{
//     type: 'list',
//     name: 'databasetype',
//     message: 'Choose database :',
//     choices: ['mongoDB', 'mysql [alpha]', 'firebase [alpha]', 'url [alpha]'],
//     default: 'mongoDB'
// }, {
//    type: 'input',
//    name: 'url',
//    message: 'Enter the URL',
//    when: (answers) => answers.databasetype === 'mongoDB'
// }]

// create separate set of question for each employee type and then show them as needed?

const menuQuestions = [

    {
        type: 'list',
        message: 'Who do you want to add to your team next?',
        name: 'teamMembers',
        choices: ['Engineer', 'Intern', 'Employee',],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs to write a markdown file
    fs.writeFile(fileName, data, function(err) {
        err ? console.error(err) : console.log('Written to file')
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(teamManagerquestions,menuQuestions)
    
    // if choice of who do you want to add for the last question ==== engineer prompt engineer questions then return to the menu, else if choice === intern then return to the menu, else if choice is finished go to generate markdown. Somehow need an inquirer menu that you can return to.
    // .prompt (menuQuestions)

    .then((response) => {
        const generateHTMLfile = generateHTML(response);

    // Console logs the markdown
       console.log(generateHTMLfile);  
        writeToFile('index.html',generateHTMLfile)   
    });

};

// Function call to initialize app
init();


