const { prompt } = require("inquirer");
const { promises: { writeFile } } = require("fs");

const generateHTML = ({ name, location, github, linkedin }) => `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>
`;

prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "location",
    message: "Where are you from?",
  },
  {
    type: "input",
    name: "hobby",
    message: "What is your favorite hobby?",
  },
  {
    type: "input",
    name: "food",
    message: "What is your favorite food?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github Username",
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL",
  },
])
  .then((answers) => generateHTML(answers))
  .then((htmlContent) => writeFile('index.html', htmlContent))
  .then(() => console.log('Success!'))
  .catch((err) => console.error(err));

// const dog = {
//   name: 'Beef',
//   breed: 'Chihuahua',
//   age: 3
// }

// const dogName = dog.name

// const breed = dog.breed
// const age = dog.age

// const { name:dogName, age, breed } = dog
