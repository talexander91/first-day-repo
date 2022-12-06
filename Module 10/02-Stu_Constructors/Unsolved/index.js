// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function developer(name, tech) {
  this.name = name;
  this.tech = tech;
  this.introduction = () =>{
    console.log(`Hello, I'm ${name} and my favorite tech is ${tech}.`);
  };
}

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const john = new developer("John", "Bootstrap");
// TODO: Call the 'introduction()' method on the new object
john.introduction();