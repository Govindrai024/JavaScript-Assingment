
//==========================
document.write("<hr>");
document.write(" User inputs and conditional Statements Assignment 9 to 11 Start");

document.write("<hr>");


document.write(" 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”" + "<br><br>");


// var user2 = prompt("Enter city: ");

// if (user2) {
//     user2 == karachi;
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome");
// }


//================


document.write(" 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am." + "<br><br>");

// var gender = prompt("Enter your gender: ")

// if(gender == 'male'){
//     document.write("Good Morning Sir.")
// }else{
//     document.write("Good Morning Ma'am.")
// }
document.write("<hr>");


//===============
document.write(" 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: " + "<br><br>");

document.write("<table>");
document.write("<tr>");
document.write("<th>" + " " + "Single color" + " " + "</th>");
document.write("<th>" + " " + "Message" + " " + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Red" + " " + "</th>");
document.write("<td>" + " " + "Must stop" + " " + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + " " + "Yellow" + " " + "</th>");
document.write("<td>" + " " + "Read to move" + " " + "</td>");
document.write("</tr>");


document.write("<tr>");
document.write("<td>" + " " + "Green" + " " + "</th>");
document.write("<td>" + " " + "Move on" + " " + "</td>");
document.write("</tr>");

document.write("<table>");



document.write("<hr>");

//===============
document.write(" 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” " + "<br><br>");


// var fuel = +prompt("Enter you fuel: ");

// if (fuel == 0.25) {
//     document.write("Please refill the fuel in your car")
// } else {
//     document.write(" Move your car")
// }


document.write("<hr>");

//===============
document.write("5. Run this script, & check whether alert message would be displayed or not. Record the outputs. " + "<br><br>");

// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// };

document.write("a. alert is running"+"<br>");

// b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

document.write("b. alert is not running"+"<br>");


//c 

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

document.write("c. There are two alert box first is" + "<br>" + "condition 2 is true"+"<br>"+ "condition 4 is true" + "<br>");

// d
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

document.write("d. alert is running"+"<br>");


//e

//  if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


    document.write("e. alert is running"+"<br>"+"true"+"<br>");
document.write("<hr>");


document.write("<hr>");

//===============
document.write("6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table. " + "<br><br>");


document.write("Mark Sheet"+"<br><br>");

// var sub1 =+prompt( "Enter your first subject marks:");
// var sub2 = +prompt("Enter your second subject marks: ");
// var sub3 = +prompt("Enter your third subject marks: ");
// var totalMarks = +prompt( "Enter you total marks:");
// var obMarks = (sub1+sub2+sub3);
// percentage = ((obMarks * 100)/ totalMarks);
// var grade;
// var remarks;

// conditions
// if(percentage >= 80){
//      grade = 'A-one';
//      remarks = 'excellent';
// }else if(percentage >= 70){ 

//      grade = 'A';
//      remarks = 'Good';
// }else if(percentage >= 60){ 

//     grade = 'B';
//     remarks = 'you need to improve';
// }
// else if (percentage < 60){ 

//     grade = 'Fail';
//     remarks = 'Sorry';
// }


// document.write("Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+obMarks+"<br>");
// document.write("Percentage:  "+percentage+"%"+"<br>");
// document.write("Grade: "+grade+"<br>");
// document.write("Remarks: "+remarks+"<br>");


document.write("<hr>");
document.write("<hr>");

//===============
document.write("7. Guess game Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. " + "<br><br>");


document.write("Guess game"+"<br><br>");

document.write("a. If user guesses the same number, show “Bingo! Correct answer”."+ "<br>");
document.write("b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”."+ "<br><br><br>");

// var guessNum = 10;
// var user = prompt("Enter guess number ");

// if (user == guessNum){
//     document.write("Bingo! Correct answer");
// }
// else if(user < guessNum || user > guessNum){
//     document.write("Close enough to the correct answe");
// }


document.write("<hr>");

document.write("<hr>");

//===============
document.write("8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. " + "<br><br>");

// var user = prompt("Enter your value");
// var userValue =  user % 3 == 0;
// if (userValue){
//     document.write("the number is divisible by 3"+"<br><br>");
// }else {
//     document.write("Sorry pick another value"+"<br><br>");
// }





document.write("<hr>");

document.write("<hr>");

//===============
document.write("9. Write a program that checks whether the given input is an even number or an odd number. " + "<br><br>");

// var user = prompt("Enter number");

// if(user %2 == 0){
//     document.write("Even number"+"<br>");
// }else{
//     document.write("Odd number"+"<br><br>");
// }


document.write("<hr>");

document.write("<hr>");

//===============
document.write("10. Write a program that takes temperature as input and shows a message based on following criteria " + "<br><br><br>");


// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp1 = prompt("Enter temperature: ");

// if(temp1 > 40){
//     document.write("It is too hot outside.");
// }else if (temp1 > 30){
//     document.write("The Weather today is Normal.");
// }else if (temp1 > 20){
//     document.write("Today’s Weather is cool.");
// }else if (temp1 > 10){
//     document.write("OMG! Today’s weather is so Cool");
// }







document.write("<hr>");

//===============
document.write("11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: " + "<br><br><br>");


var num1 = +prompt("Enter first number: ");
var op = prompt("Enter operator number: ");
var num2 = +prompt("Enter second number: ");


if (op == '+'){
 document.write("Addition:  " ,num1 + num2) ;
}else if(op == '-'){
    document.write("Substraction:  ",num1 - num2) ;
}else if(op == '*'){
    document.write("Multiplication:  ",num1 * num2) ;
}else if(op == '/'){
    document.write("Division:  ",num1 / num2) ;
}else if(op == '/'){
    document.write("Modulus:  ",num1 % num2) ;
}






