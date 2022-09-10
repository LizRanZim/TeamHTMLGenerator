// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require ('inquirer');
const generateHTML = require('./src/generateHTML');

// TODO: Create an array of questions for user input
const teamManagerquestions = [
    {
        type: 'input',
        message: 'What is the name of your team manager?',
        name: 'name',

    },
    {
        type: 'input',
        message: 'What is the id of your team manager?',
        name: 'id',
        
    },
    {
        type: 'input',
        message: 'What is the email address of your team manager',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number of your team manager?',
        name: 'officeNumber',
    },
    

];

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
    .prompt(teamManagerquestions)
    
    // if choice of who do you want to add for the last question ==== engineer prompt engineer questions then return to the menu, else if choice === intern then return to the menu, else if choice is finished go to generate markdown. Somehow need an inquirer menu that you can return to.
    .prompt (menuQuestions)

    .then((response) => {
        const generateHTMLfile = generateHTML(response);

    // Console logs the markdown
       console.log(generateHTMLfile);  
        writeToFile('index.html',generateHTMLfile)   
    });

};

// Function call to initialize app
init();
