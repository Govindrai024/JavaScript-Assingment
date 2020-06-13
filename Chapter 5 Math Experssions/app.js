
document.write("<hr>");
document.write("Math Experssion Assignment 5 Start");
document.write("<hr>");

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

document.write("<hr>");
document.write(" 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser." + "<br><br>");

var a = 3;
var b = 5;
var c = a + b;
document.write(" Sum of 3 and 5 is: " + c + "<br><br>");

document.write("<hr>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
document.write("2. Repeat task1 for subtraction, multiplication, division & modulus." + "<br><br>");



// // subtraction
var c = a - b;
document.write(" Substraction  of 3 and 5 is: " + c + "<br>");

// Multiplication
var c = a * b;
document.write(" Multiplication  of 3 and 5 is: " + c + "<br>");

//  Division
var c = a / b;
document.write(" Division  of 3 and 5 is: " + c + "<br>");

// modulus
var c = a % b;
document.write(" Modulus of 3 and 5 is: " + c + "<br> <br>");


document.write("<hr>");

//     3. Do the following using JS Mathematic Expressions
document.write("3. Do the following using JS Mathematic Expressions" + "<br>");

// a. Declare a variable.
var test;

// b. Show the value of variable in your browser like “Value  after variable declaration is: ??”.
document.write("a & b. Value  after variable declaration is: " + test + "<br>");

// c. Initialize the variable with some number.
var num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write("c & d. Initial value: " + num + "<br>");

// e. Increment the variable.
var num = ++num;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("e & f. Value after increment is " + num + "<br>");

// g. Add 7 to the variable after addition is: 13”.
num += 7;
document.write("g & h. Value after additon is: " + num + "<br>");

// i. Decrement the variable.
var num = --num;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("i & j. Value after additon is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var num = num % 3;

// l. Output : “The remainder is : 0”.
document.write("k & l. The remainder is : " + num + "<br><br>");


document.write("<hr>");



document.write(" 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output." + "<br><br>");

var costOfTicket = 6000;
var totalCost = costOfTicket * 5;

document.write("Total cost to buy 5 ticket to a movie is: " + totalCost + "PKR");



document.write("<hr>");


document.write("  5. Write a script to display multiplication table of any number in your browser. E.g." + "<br><br>");

// var table = +prompt("Enter table value: ");

// for (var i = 1; i <= 10; i++ ){
//     document.write(+ table + "x" + i + "="+ table*i+ "<br>");
// }

document.write("<hr>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
document.write(" 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here." + "<br><br>");


// a. Store a Celsius temperature into a variable.
var CelTemp = 25;
var CelToF = (CelTemp * 9 / 5) + 32;


// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
document.write("a. 25  &#176C is: " + CelToF + " &#176f" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.
var FTemp = 70;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var FToCel = ((FTemp - 32) * 5 / 9);
document.write("c&d. 70  &#176F is: " + FToCel + " &#176C");

document.write("<hr>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable.


document.write(" 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variable." + "<br><br>");

document.write("<br>" + "<b>" + " Shopping Cart" + "</b>" + "<br><br>");
// a. Price of item 1
var priceOfItem1 = 650;

// b. Price of item 2
var priceOfItem2 = 100;

// c. Ordered quantity of item 1
var OrderQuantity1 = 3;

// d. Ordered Quantity of item 2
var OrderQuantity2 = 7;

// e. Shipping charges
var ShippingCharges = 100;

// Compute the total cost & show the receipt in your browser.


var totalCost = priceOfItem1 * OrderQuantity1 + priceOfItem2 * OrderQuantity2 + ShippingCharges;


document.write("Price of item 1 is : " + priceOfItem1 + "<br>" + "Quantity of item 1 is :" + OrderQuantity1 + "<br>" + "Price of item 2 is : " + priceOfItem2 + "<br>" + "Quantity of item 2 is :" + OrderQuantity2 + "<br>" + "Shipping Charges : " + ShippingCharges + "<br><br>" + "Total cost of your order is : " + totalCost);


document.write("<hr>");
//=====================
// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

document.write(" 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser." + "<br><br>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained * 100) / totalMarks;

document.write("Total Marks: " + totalMarks + "<br>")
document.write("Obtained Marks: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "%")


document.write("<hr>");

//=====================

document.write("9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee " + "<br><br>");

var dollar = 104.80;
var dollars = 10;
var saudiRiyal = 28;
var saudiRiyals = 25;

totalUsDollars = dollar * dollars;
totalSaudiyals = saudiRiyal * saudiRiyals;

totalCurrrency = totalUsDollars + totalSaudiyals;


document.write("<br>" + "<b>" + " Currency in PKR" + "</b>" + "<br><br>");

document.write("Total Currency is PKR: " + totalCurrrency);

document.write("<hr>");


//=====================

document.write("10. Write a program to initialize a variable with some number and do arithmetic in following sequence: " + "<br><br>");

var num1 = 20;
//  a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression

num1 = num1 + 5 * 10 / 2;
document.write("Total sum of expression is: " + num1);

document.write("<hr>");

//=====================
document.write("11. The Age Calculator: Forgot how old someone is? Calculate it! " + "<br><br>");

// a. Store the current year in a variable.
var currentYear = 2020;

// b. Store their birth year in a variable.
var birthYear = 1996

// c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NNyears old”.
age = currentYear - birthYear;

document.write("Current year is: " + currentYear + "<br>");
document.write("birth year is: " + birthYear + "<br>");
document.write("Your Age is: " + age);

document.write("<hr>");

//=====================
document.write("12. The Geometrizer: Calculate properties of a circle. " + "<br><br>");

document.write("<br>" + "<b>" + "The Geometrizer " + "</b>" + "<br><br>");

// a. Store a radius into a variable
var radius = r;
var π = 3.142;
var r = 20;
var circumference = 2 * π * r;
var area = π * (r * r);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)



document.write("The radius of circle is: " + r + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");


document.write("<hr>");


//=====================
document.write("13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. " + "<br><br>");

document.write("<br>" + "<b>" + "The LifeTime Supply Calculator " + "</b>" + "<br><br>");

// a. Store your favorite snack into a variable
var favSnack = 'Twinkies';

// b. Store your current age into a variable.
var currentAge = 23;

// c. Store a maximum age into a variable.
var MaxAge = 24;

// d. Store an estimated amount per day (as a number).
var estimateAmPerDay = 3;

// e. Calculate how many would you eat total for the rest of your life.

var restOflife = MaxAge - currentAge;
var year = 365;
var totalEat = ((restOflife * year) * estimateAmPerDay);

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


document.write("Favourite Snack: " + favSnack + "<br>" + "Current age: " + currentAge + "<br>" + "Estimated Maximum Age: " + MaxAge + "<br>" + " Amount of snacks per day: " + estimateAmPerDay + "<br>" + " You will need  " + totalEat + " to last you until the ripe old age of  " + restOflife + "<br>");

document.write("<hr>");
document.write("Math Experssion Assignment 5 End");
document.write("<hr>");

