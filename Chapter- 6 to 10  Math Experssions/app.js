
document.write("<hr>");

document.write("<hr>");
document.write("Math Experssion Assignment 6 chpt 6 to 9 Start");
document.write("<hr>");

//============
document.write("Assignment 6");

document.write("1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser. " + "<br><br>");

var a = 10;
document.write("Result" + "<br>");
document.write("The value of a is: " + a + "<br>");

document.write("........................." + "<br><br>");

a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now value of a is: " + a + "<br><br>");

//...
a = 11;
document.write("The value of a++ is:" + a + "<br>");


a + a++;
document.write("Now value of a is: " + a + "<br><br>");

//......
a = 11
document.write("The value of --a is: " + a + "<br>");


a = --a;
document.write("Now value of a is: " + a + "<br><br>");

//....
a = 11;
document.write("The value of a-- is: " + a + "<br>");


a = a--;
document.write("Now value of a is: " + a + "<br><br>");


document.write("<hr>");
//========
document.write("2. What will be the output in variables a, b & result after execution of the following script:. " + "<br><br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("resutl is " + result + "<br><br>");

// --a;
var result = --a;
document.write("resutl is  " + result + " --a of a Prefix Decrement " + "<br>");

// --a - --b
var result = --a - --b;
document.write("resutl is  " + result + " --a - --b of a and b Prefix Decrement  " + "<br>");

var result = --a - --b + ++b + b--;
document.write("resutl is  " + result + "  of  --a - --b + ++b + b-- a and  b Prefix Decrement and Prefix Inrement and Post Decrement of b" + "<br>");

//===========
document.write("<hr>");

document.write("3. Write a program that takes input a name from user & greet the user. " + "<br><br>");

// var nameOfuser = prompt("Enter your name: ");
// alert("Welcome to my JS world"+nameOfuser);

//==========end
document.write("<hr>");


document.write("5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default " + "<br><br>");


// var table = +prompt("Enter table value: ");
// table =5

// if (table == " "){
//     table;
// }else{
//     for (var i = 1; i <= 10; i++ ){
//         document.write(+ table + "x" + i + "="+ table*i+ "<br>");
//     }

// }



//==========end
document.write("<hr>");


document.write(" 6. Take " + "<br><br>");

a) Take three subjects name from user and store them in 3 different variables.
var firstSub = prompt("Enter first subject:" );
var secondSub = prompt("Enter second subject: "  );
var thirdSub = prompt("Enter third subject:" );


b) Total marks for each subject is 100, store it in another variable.

var totalMarkss1= 100;
var totalMarkss2= 100;
var totalMarkss3= 100;



c) Take obtained marks for first subject from user and stored it in different variable.

var obtainedMarks1 = +prompt("Enter first subject obtained marks: ");

d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var obtainedMarks2 = +prompt("Enter second subject obtained marks: ");

var obtainedMarks3 = +prompt("Enter third subject obtained marks: ");

e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// calculate percentage
percentge1 = obtainedMarks1*100/totalMarkss1;
percentge2 = obtainedMarks2*100/totalMarkss2;
percentge3 = obtainedMarks3*100/totalMarkss3;

// calculate  final total percentage
finnalPer = percentge1 + percentge2 + percentge3;

// final total ob marks
Fobtotal = obtainedMarks1 + obtainedMarks2 +obtainedMarks3;

// final total marks
FtotalMark = totalMarkss1 + totalMarkss2 + totalMarkss3;

const  firstsub1 =  document.getElementById('firstsubject').innerHTML =firstSub;
const  firstsub2 =  document.getElementById('secondsubject').innerHTML =secondSub ;
const  firstsub3 =  document.getElementById('thirdsubject').innerHTML =thirdSub;


const  totalMark1 =  document.getElementById('totalMarks1').innerHTML =totalMarkss1;
const  totalMark2 =  document.getElementById('totalMarks2').innerHTML =totalMarkss2;
const  totalMark3 =  document.getElementById('totalMarks3').innerHTML =totalMarkss3;

const  obMrk1 =  document.getElementById('obtainMarks1').innerHTML =obtainedMarks1;
const  obMrk2 =  document.getElementById('obtainMarks2').innerHTML =obtainedMarks2;
const  obMrk3 =  document.getElementById('obtainMarks3').innerHTML =obtainedMarks3;

const  Prec1 =  document.getElementById('PercentageOfmarks1').innerHTML =percentge1+ "%";
const  Prec2 =  document.getElementById('PercentageOfmarks2').innerHTML =percentge2+ "%";
const  Prec3 =  document.getElementById('PercentageOfmarks3').innerHTML =percentge3 + "%";


const  finalTotalMrk =  document.getElementById('finalTotalMarks').innerHTML =+FtotalMark ;
const  finalTotalObMrk =  document.getElementById('finalTotalObMrks').innerHTML = +Fobtotal;
const  finalTotalObPerc =  document.getElementById('finalTotalPercetange').innerHTML =+ finnalPer + "%";




document.write("<hr>");
document.write("<hr>");
document.write("Math Experssion Assignment 6 chpt 6 to 9 end");
document.write("<hr>");








//==========================




document.write("<hr>");
document.write(" User inputs and conditional Statements Assignment 9 to 10 Start");

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

var gender = prompt("Enter your gender: ")

if(gender == female){
    console.log("Good Morning Sir.")
}else{
    console.log("Good Morning Ma'am.")
}




document.write("<hr>");
