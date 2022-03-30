
const addVariable = function (employee){
    if(employee.role==='Engineer'){
        return`
     <li>Github: <a href = "github.com/${employee.github}">${employee.github}</a></li>
     `}
     else if(employee.role ==='Intern'){
        return`
     <li>School:${employee.school}</li>
     `
     }else{
        return`
     <li>Office Number:${employee.officeNum}</li>
     `
    }
}
const generateCard = function(employee) {

     return`
    <div class = "card">
    <h1>${employee.name}</h1>
    <h2>${employee.role}</h2>
    <ul>
      <li>ID:${employee.id}</li>
      <li>Email:<a href = "mailto:${employee.email}">${employee.email}</a></li>
      ${addVariable(employee)}
      </ul>
    </div>
    `
    
 }



module.exports = tempdata =>{

    return`
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Workforce</title>
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header> My Team </header>`
}