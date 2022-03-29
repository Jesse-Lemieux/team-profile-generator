const inquirer = require('inquirer')
const manager = []
const engineers = []
const interns = []

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
            name: 'office-number',
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
        manager.push(employeeData)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else(console.log(manager,engineers,interns))
        
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
            name: 'office-number',
            type: 'input',
            message: 'What is the engineers office number?'
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
        engineers.push(employeeData)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else(console.log(manager,engineers,interns))
        
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
        interns.push(employeeData)
        if(employeeData.confirmEmp === true){
            if(employeeData.newEmp === 'Engineer'){
                promptEngineer()
            }
            else(promptIntern())
        }
        else(console.log(manager,engineers,interns))
        
})
}

promptManager()


