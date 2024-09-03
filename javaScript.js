// Assignment No 3

// Question No 1

// var city = prompt("Please Enter Your City Name:");

// if (city === "Karachi") {
//     alert("Welcome To City Of Lights");
// } else {
//     alert("Welcome to " + city);
// }

// Question No 2
// var gender = prompt("Please Enter Your Gender (Male/Female:");

// if (gender === "Male") {
//     alert("Good Morning Sir!");
// } else if (gender === "Female") {
//     alert("Good Morning Ma'am!");
// }
// else {
//     alert ("Good Morning")
// }

// Question No 3
// var signalColor = prompt("Please Enter The Traffic Signal Color (Red, Yellow, Green):");
// if (signalColor === "Red") {
//     alert("Must Stop");
// } else if (signalColor === "Yellow") {
//     alert("Ready To Move");
// } else if (signalColor === "Green") {
//     alert("Move Now");
// } else {
//     alert("Invalid Color! Please Enter Red, Yellow, or Green Color.");
// }

// Question No 4
// var Fuel = prompt("Please Enter The Remaining Fuel In Your Car (in litres):");
// if (Fuel < 0.25) {
//     alert("Please Refill The Fuel In Your Car");
// } else {
//     alert("You Have Enough Fuel");
// }

// Question No 5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Output After Run This Script
// 1. given condition for variable a is true
// 2. condition 2 is true
// 3. condition 4 is true
// 4. The cost equals
// 5. True
// 6. car is smaller than cat

// Question No 6
// var subject1 = +prompt("Enter Marks Obtained In Subject 1:");
// var subject2 = +prompt("Enter Marks Obtained In Subject 2:");
// var subject3 = +prompt("Enter Marks Obtained In Subject 3:");

// var totalMarks = +prompt("Enter Total Marks:");

// var marksObtained = subject1 + subject2 + subject3;

// var percentage = (marksObtained / totalMarks) * 100;

// var grade = "";
// var remarks = "";

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.getElementById("totalMarks").innerHTML = "Total marks : " + totalMarks;
// document.getElementById("marksObtained").innerHTML = "Marks obtained : " + marksObtained;
// document.getElementById("percentage").innerHTML = "Percentage : " + percentage.toFixed(2) + "%";
// document.getElementById("grade").innerHTML = "Grade : " + grade;
// document.getElementById("remarks").innerHTML = "Remarks : " + remarks;

// Question No 7

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = +prompt("Guess The Secret Number (Between 1 And 10):");

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct Answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close Enough To The Correct Answer");
// } else {
//     alert("Sorry, That's Not Correct. The Secret Number Was " + secretNumber);
// }

// Question No 8
// var number = +prompt("Enter A Number To Check If It Is Divisible By 3:");

// if (number % 3 === 0) {
//     alert("The Number " + number + " Is Divisible By 3.");
// } else {
//     alert("The Number " + number + " Is Not Divisible By 3.");
// }

// Question No 9
// var number = +prompt("Enter A Number To Check If It Is Even OR Odd:");

// if (number % 2 === 0) {
//     alert("The Number " + number + " Is Even.");
// } else {
//     alert("The Number " + number + " Is Odd.");
// }


// Question No 10

// var temp = prompt("Enter The Temperature:");
// var message = "";

// if (temp > 40) {
//     message = "It Is Too Hot Outside.";
// } else if (temp > 30) {
//     message = "The Weather Today Is Normal.";
// } else if (temp > 20) {
//     message = "Today’s Weather Is cool.";
// } else if (temp > 10) {
//     message = "OMG! Today’s Weather Is So Cool.";
// } else {
//     message = "Temperature is 10 or below.";
// }

// document.write("<h1> " + message + "</h1>");


// Question No 11

// var num1 = parseFloat(prompt("Enter The First Number:"));
// var num2 = parseFloat(prompt("Enter The Second Number:"));
// var operation = prompt("Enter The Operation (+, -, *, /, %):");
// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {  
//         result = num1 / num2;
//     } else {
//         result = 0;
//     }
// } else if (operation === "%") {
//     if (num2 !== 0) {  
//         result = num1 % num2;
//     } else {
//         result = 0;
//     }
// } else {
//     result = "Error: Invalid Operation";
// }

// alert("The Result Is: " + result);

