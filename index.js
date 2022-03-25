const inquirer = require('inquirer')

inquirer
    .prompt([
// ADD MANAGER
        {
            type: 'input',
            name: 'manager-name',
            message: 'What is the managers name?'
        },
        {
            type : 'input',
            name: 'manager-id',
            message: 'What is the managers employee ID?'
        },
        {
            type : 'input',
            name: 'manager-email',
            message: 'What is the managers email adress?'
        },
        {
            type : 'input',
            name: 'manager-offnum',
            message: 'What is the managers office number?'
        },
        {
            type : 'confirm',
            name: 'continue',
            message: 'Add another employee?'
        },
// ADD ENGINEER
        {
            type: 'input',
            name: 'eng-name',
            message: 'What is the engineers name?'
        },
        {
            type : 'input',
            name: 'eng-id',
            message: 'What is the engineers employee ID?'
        },
        {
            type : 'input',
            name: 'eng-email',
            message: 'What is the engineers email adress?'
        },
        {
            type : 'input',
            name: 'eng-offnum',
            message: 'What is the engineers office number?'
        },
        {
            type : 'input',
            name: 'eng-git',
            message: 'What is the engineers github profile name?'
        },
// ADD INTERN
        {
            type: 'input',
            name: 'intern-name',
            message: 'What is the interns name?'
        },
        {
            type : 'input',
            name: 'intern-id',
            message: 'What is the interns employee ID?'
        },
        {
            type : 'input',
            name: 'intern-email',
            message: 'What is the interns email adress?'
        },
        {
            type : 'input',
            name: 'intern-school',
            message: 'What school does the intern attend, or had attended?'
        },
            
    ])