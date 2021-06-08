// emplouyee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// prompt for information
const inquirer = require('inquirer')

// file paths
const path = require('path');
const fs = require('fs');

// creates folder for generated html
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// html template
const generateHTML = require('./src/html-template')

// each employee object will push into this array
const teamMembers = [];

// create manager with prompts
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager\'s id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager\'s office number?'
        },
    ]).then(answers => {
        // create manager object
        const manager = new Manager(answers.managerId, answers.managerName, answers.managerEmail, answers.managerOfficeNumber);
        // push manager to team
        teamMembers.push(manager);
        // ask user to create another employee
        createTeam();
    });
}

// create engineer with prompts
function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?'
            // add validator ('You must enter xyz')
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s id?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is the engineer\'s GitHub?'
        },
    ]).then(answers => {
        // create engineer object
        const engineer = new Engineer(answers.engineerId, answers.engineerName, answers.engineerEmail, answers.engineerGitHub);
        // push engineer to team
        teamMembers.push(engineer);
        createTeam();
    });
}

// create intern with prompts
function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
            // add validator ('You must enter xyz')
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?'
        },
    ]).then(answers => {
        // create intern object
        const intern = new Intern(answers.internId, answers.internName, answers.internEmail, answers.internSchool);
        // push intern to team
        teamMembers.push(intern);
        createTeam();
    });
}

// create team with prompts
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'What team member would you like to create?',
            choices: [
                'Engineer',
                'Intern',
                'I\'m done creating my team'
            ]
        },
    ]).then(userChoice => {
        if (userChoice.memberChoice === 'Engineer') {
            createEngineer();
        } else if (userChoice.memberChoice === 'Intern') {
            createIntern();
        } else {
            buildTeam();
        }
    }
    )
}

function buildTeam() {
    // create html file
    console.log(teamMembers);
    // const htmlPageContent = generateHTML(teamMembers);
    // createFile(htmlPageContent)
}

createManager();

function createFile(htmlCode) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, htmlCode, 'utf-8');
}