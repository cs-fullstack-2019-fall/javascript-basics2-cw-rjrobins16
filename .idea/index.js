var name = "My name is: "
var firstname = " Rachel"
alert(name + firstname +".");
//problem one

var balance = prompt("What is your balance?");
var balanceInt = parseInt(balance);
var newbalance = (balanceInt - 10);
alert("You lost $10. Your new balance is: $" + newbalance);
//Ask the user “What is your balance”. Make sure to save that answer in a variable balance.
// Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".

var grade = prompt("Enter your number grade.");
var numberGrade = parseInt(grade)
var ecredit = prompt("Enter your extra credit.")
var ecreditInt = parseInt(ecredit)
var newGrade = (numberGrade + ecreditInt);
alert("Your grade is " + newGrade + ".");

//Create a variable. Ask the user to “Enter your number grade”.
// Ask the user “Enter your extra credit". Print the grade plus extra credit.

var balance1 = prompt("What is your balance?");
var balance1Int = parseInt(balance1);
var deduction = prompt("How much do you want to deduct?");
var deductInt = parseInt(deduction);
var rembal = (balance1 - deductInt);
alert("Your remaining balance is " + rembal + ".");

//Create a variable called balance and save it after asking the user “What is your balance?”.
// Create a variable called deduction and save it when asking the user “How much do you want to deduct?”
// Print the remaining balance after subtracting the deduction.
