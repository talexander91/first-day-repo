// WRITE YOUR CODE HERE
var student = ["John", "Michael", "Frank", "Billy", "Timmy"];

console.log(student.length);

console.log("Welcome to the class, " + student[0]);
console.log("Welcome to the class, " + student[1]);
console.log("Welcome to the class, " + student[2]);
console.log("Welcome to the class, " + student[3]);
console.log("Welcome to the class, " + student[4]);

student[1] = "Mark"

if (student[1] === "Mark") {
    console.log(student[1] + " is in class.");
}

console.log(student[student.length-1])