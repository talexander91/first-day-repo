// TODO: What are we importing?
//Importing the fs to enable interaction
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//PATH: log.txt, DATA: process argument, CALLBACK: err
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //Ternary is a condition followed by a question mark
  //  then an expression to run if true,
  //  then an expression if false
  err ? console.error(err) : console.log('Commit logged!')
);
