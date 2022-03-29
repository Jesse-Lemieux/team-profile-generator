const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const engineerArr = []
const internArr = []
let manager = ''

const promptManager = ()=> {

    return inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the managers name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the managers ID number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the managers email address?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is the managers office number?'
        },
        {
            name: 'confirmEmp',
            type: 'confirm',
            message: 'Add another employee?',
            default: true
        },
        {
            name: 'newEmp',
            type: 'list',
            message: 'What employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmEmp }) => confirmEmp
        }
    ])
    .then(employeeData => {
        manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeNumber)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else{
        console.log('build page now')}
        
})}
    
const promptEngineer = () => {
    return inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the engineers name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the engineers ID number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the engineers email address?'
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the engineers github profile name?'
        },
        {
            name: 'confirmEmp',
            type: 'confirm',
            message: 'Add another employee?',
            default: true
        },
        {
            name: 'newEmp',
            type: 'list',
            message: 'What employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmEmp }) => confirmEmp
        },
    ])
    .then(employeeData => {
        const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github)
        console.log(engineer)
        engineerArr.push(engineer)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else(console.log('build page now'))
        
})
}

const promptIntern = () => {

    return inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the interns name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is the interns ID number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is the interns email address?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'What school did or does the intern attend?'
        },
        {
            name: 'confirmEmp',
            type: 'confirm',
            message: 'Add another employee?',
            default: true
        },
        {
            name: 'newEmp',
            type: 'list',
            message: 'What employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmEmp }) => confirmEmp
        }
    ])
    .then(employeeData => {
        const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school)
        console.log(intern)
        internArr.push(intern)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else(console.log('build page now', engineerArr, manager, internArr))
        
})
}

promptManager()


