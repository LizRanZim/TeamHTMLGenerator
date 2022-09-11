// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')


const responseData = {}



// array of questions for user input
// could dynamically generate array below based on user input?
const teamManagerquestions = [
    {
        type: 'list',
        message: 'You will be entering data for the manager, please select Manager below.',
        name: 'managerRole',
        choices: ['Manager', 'Engineer', 'Intern'],

    },

    {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'managerName',

    },

    {
        type: 'input',
        message: 'What is the id of the manager?',
        name: 'managerId',

    },
    {
        type: 'input',
        message: 'What is the email address of the manager?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the office number of this manager?',
        name: 'officeNumber',
        when: (response) => response.managerRole === 'Manager'
    },
    // end manager questions
    
    // start engineer questions
    {
        type: 'list',
        message: 'You will be entering data for the engineer, please select Engineer below.',
        name: 'engineerRole',
        choices: ['Manager', 'Engineer', 'Intern'],

    },

    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'engineerName',

    },

    {
        type: 'input',
        message: 'What is the id of the engineer?',
        name: 'engineerId',

    },

    {
        type: 'input',
        message: 'What is the email of the engineer?',
        name: 'engineerEmail',

    },

    {
        type: 'input',
        message: 'What is the gitHub username of the engineer?',
        name: 'github',
        when: (response) => response.engineerRole === 'Engineer'
    },
    
// end engineer questions
// start intern questions

    {
        type: 'list',
        message: 'You will be entering data for the intern, please select Intern below.',
        name: 'internRole',
        choices: ['Manager', 'Engineer', 'Intern'],

    },

    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'internName',

    },

    {
        type: 'input',
        message: 'What is the id of the intern?',
        name: 'internId',

    },

    {
        type: 'input',
        message: 'What is the email of the intern?',
        name: 'internEmail',

    },

    {
        type: 'input',
        message: 'What is the school of the intern?',
        name: 'school',
        when: (response) => response.internRole === 'Intern'
    },
   
// end intern questions

];




// function to write html file
function writeToFile(fileName, data) {
    // use fs to write a markdown file
    fs.writeFile(fileName, data, function (err) {
        err ? console.error(err) : console.log('Written to file')
    });
}

// function to prep to write the html file after all questions are answered

function prepHTMLFile(responseData) {

    const generateHTMLfile = generateHTML(responseData);

    console.log(generateHTMLfile);
    console.log(responseData, "Manager data")


    writeToFile('index.html', generateHTMLfile);
    return
}



// TODO: initializes app, and stores answers in array
function init() {
    inquirer
        .prompt(teamManagerquestions)

        .then((response) => {
            if (response.managerRole === 'Manager') {
                responseData.push = response
                console.log(responseData, "Response Data")
            }

            prepHTMLFile(responseData);
   });

  
   
   
};


// Function call to initialize app
init();




