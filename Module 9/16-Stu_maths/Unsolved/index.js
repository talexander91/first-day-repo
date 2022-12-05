// TODO: Import `maths.js`
const math = require('./maths.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = parseInt(process.argv[3]);
const numTwo = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
  case 'sum': console.log(math.sum(numOne, numTwo));
    break;
  case 'difference': console.log(math.difference(numOne, numTwo));
    break;
  case 'product': console.log(math.product(numOne, numTwo));
    break;
  case 'quotient': console.log(math.quotient(numOne, numTwo));
    break;
  default: console.log('check yourself');      
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
