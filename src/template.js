module.exports = engcards => {
const generateEngineercard = engineerArr => {
   for(let i =0; i < engineerArr.length; i++){
    return `
   <div class = "card">
   <h1>${engineerArr[i].name}</h1>
   <h2>${engineerArr[i].role}</h2>
   <ul>
     <li>ID:${engineerArr[i].id}</li>
     <li>Email:<a href = "mailto:${engineerArr[i].email}">${engineerArr[i].email}</a></li>
     <li>Github: <a href = "github.com/${engineerArr[i].github}">${engineerArr[i].github}</a></li>
   </ul>
   </div>
   `
}}}


const generatePage = function(manager, internArr, engineerArr){
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
  <header> My Team </header>
  <div class ="card">
    <h1>${manager.name}</h1>
    <h2>${manager.role}</h1>
    <ul>
     <li>ID:${manager.id}</li>
     <li>Email:<a href = "mailto:${manager.email}">${manager.email}</a></li>
     <li>Office Number: ${manager.officeNum}</li>
    </ul>
  </div>
    `
}