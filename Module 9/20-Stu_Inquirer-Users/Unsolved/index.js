const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input", 
      name: "name", 
      message: "What is your name?",
    },
    {
      type: "checkbox", 
      message: "What type of languages do you know?", 
      name: "stack", 
      choices: ['HTML', 'CSS', 'Javascript'],
    },
    {
      type: "list",
      name: "contact",
      message: "What is your preferred for of communication?",
      choices: ['email', '[phone', 'snailmail'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}`
  }