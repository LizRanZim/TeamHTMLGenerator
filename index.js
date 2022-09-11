// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')


// const manager1 = managerData


// TODO: Create an array of questions for user input
const teamManagerquestions = [
    {
        type: 'list',
        message: 'What role do you want to enter data for?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],

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
    {
        type: 'input',
        message: 'What is the school of this person?',
        name: 'school',
        when: (response) => response.role === 'Intern'
    },
    {
        type: 'input',
        message: 'What is the gitHub username of this person?',
        name: 'github',
        when: (response) => response.role === 'Engineer'
    },


];




// function to write README file
function writeToFile(fileName, data) {
    // use fs to write a markdown file
    fs.writeFile(fileName, data, function (err) {
        err ? console.error(err) : console.log('Written to file')
    });
}






// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(teamManagerquestions)
       
        .then((response) => {

            // add code to store responses in array

            // put below in a separate function
            const generateHTMLfile = generateHTML(response);

            // Console logs the html
            console.log(generateHTMLfile);

// store responses to questions in an array
function storeResponses() {

    if (response.role === 'Manager') {

        let managerData = [response.name, response.id, response.email, response.officeNumber];

        console.log(managerData);

    }

    return
}

            storeResponses();
            writeToFile('index.html', generateHTMLfile);
            
        });

};

// Function call to initialize app
init();

