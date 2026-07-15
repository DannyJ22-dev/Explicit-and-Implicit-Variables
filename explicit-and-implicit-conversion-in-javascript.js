/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// let result = "5" - 2; old code
let result = 5 - 2 // this will produce the same output as the old code, but it avoids the use of implicit conversion.
console.log("The result is: " + result); // if I wanted a string instead, I could have using String() or wrapped both numbers in quotations.

//let isValid = Boolean("false"); old code
let isValid = false // there was no need for the boolean conversion in the old code, attempting to conver the string to a boolean. Since only very few strings (such as a blank "") come out to falsy, the boolean was returning true, thuse the output saying valid.
if (isValid) {
    console.log("This is valid!");
} else {
  console.log("This is not valid!");
}

//let age = "25"; old code
let age = 25; // the old age value being a string was implicitly causing the addition to add together string values, which ruined the math and printed 255.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//another example of implicit type conversion
let score = "10"
let multiplier = 2;
let totalScore = score * multiplier; // implicit conversion occurs here, converting the string "10" to a number for multiplication
console.log("Total Score: " + totalScore);

//example of explicit type conversion
let score = "10"
let multiplier = 2;
let totalScore = Number(score) * multiplier; // explicit conversion using Number() to convert the string "10" to a number
console.log("Total Score with explicit conversion: " + totalScore);