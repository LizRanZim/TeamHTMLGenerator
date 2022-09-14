// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
// const { create } = require('domain');


const teamArray = []


// Overall function to initialize app 

function init() {
    createManager();
}


// Main manager > create manager

function createTeam() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee do you want to add',
            choices: ['Engineer', 'Intern', 'No further employees to add'],
            name: 'employeeRole'

        },

    ])

        .then((response) => {
            if (response.employeeRole === 'Engineer') {
                createEngineer();

            } else if (response.employeeRole === 'Intern') {
                createIntern();
            }
            else             {
                prepHTMLFile(teamArray);
               
            };
        })



}


function createManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'managerName',

        },

        {
            type: 'input',
            message: 'What is the id of the team manager?',
            name: 'managerId',

        },
        {
            type: 'input',
            message: 'What is the email of the team manager?',
            name: 'managerEmail',

        },
        {
            type: 'input',
            message: 'What is the office number of the team manager',
            name: 'managerOfficeNumber',

        },

    ])

        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber,
                role = 'Manager'
            )
            teamArray.push(manager);
            console.log(teamArray, "manager function");

            createTeam();
            
        })

}

function createIntern() {
    inquirer
    .prompt([
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
            message: 'What is the school of the intern',
            name: 'internSchool',

        },

    ])

        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool,
                role = 'Intern'
            )
            teamArray.push(intern);
            console.log(teamArray, "intern function");
            createTeam();          
        })

}

function createEngineer() {
    inquirer
    .prompt([
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
            message: 'What is the gitHub id of the engineer',
            name: 'engineerGithub',

        },

    ])

        .then((response) => {
            const engineer = new Engineer(
                response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGithub,
                role = 'Engineer'
            )
            teamArray.push(engineer);
            console.log(teamArray, "engineer function");
            createTeam();
        })

}






// Keep this > function to write html file
function writeToFile(fileName, data) {
    // use fs to write a markdown file
    fs.writeFile(fileName, data, function (err) {
        err ? console.error(err) : console.log('Written to file')
    });
}

// Keep this > function to prep to write the html file after all questions are answered

function prepHTMLFile(teamArray) {

    const generateHTMLfile = generateHTML(teamArray);

    console.log(generateHTMLfile);
    console.log(teamArray, "Manager data")


    writeToFile('index.html', generateHTMLfile);
    
}





init();

