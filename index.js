const Manager = require('./lib/Manager')

const inquirer = require('inquirer')
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const generateHTML = require('./src/html-template')

const teamMembers = [];


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
    teamMembers.push(manager);
    // create html file
    // send variable to template
    const htmlPageContent = generateHTML(teamMembers);
    createFile(htmlPageContent)
});



function createFile(htmlCode) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, htmlCode, 'utf-8');
}