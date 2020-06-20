/* Chapter 21 - 25 */

/* Task 1 */

// var firstName, secondName, fullName;
// firstName = prompt("Enter your first name");
// secondName = prompt("Enter your second name");
// fullName = firstName + " " + secondName;
// alert("Hello! " + fullName);

/* Task 2 */

// var mobile = prompt("Enter your favorite mobile phone model");
// var length = mobile.length;
// document.write("My favorite phone is: " + mobile + "<br>");
// document.write("Length of string: " + length);

/* Task 3 */

// var string = "Pakistani";
// var index = string.indexOf("n");
// document.write("<b>String:</b> " + string + "<br>");
// document.write("<b>Index of 'n'</b>: " + index);

/* Task 4 */

// var string = "Hello World";
// var index = string.lastIndexOf("l");
// document.write("<b>String:</b> " + string + "<br>");
// document.write("<b>Index of 'l'</b>: " + index);

/* Task 5 */

// var string = "Pakistani";
// var char = string.charAt(3);
// document.write("<b>String:</b> " + string + "<br>");
// document.write("<b>Character at index 3</b>: " + char);

/* Task 6 */

// var firstName, secondName, fullName;
// firstName = prompt("Enter your first name");
// secondName = prompt("Enter your second name");
// fullName = firstName.concat(secondName);
// alert("Hello! " + fullName);

/* Task 7 */

// var copy1, copy2, replacement, afterReplacement;
// var city = "Hyderabad";
// copy1 = city.slice(0, 5);
// copy2 = city.slice(5);
// replacement = copy1.replace("Hyder", "Islam");
// afterReplacement = replacement.concat(copy2);
// document.write("<b>City:</b> " + city + "<br>");
// document.write("<b>After replacement:</b> " + afterReplacement);

/* Task 8 */

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterReplace = message.replace(/and/g, "&");
// document.write("<b>Before replacement:</b> " + message + "<br>");
// document.write("<b>After replacement:</b> " + afterReplace);

/* Task 9 */

// var string = "472";
// var value = parseInt(string);
// document.write("<b>Value: " + string + "</b>" + "<br>");
// document.write("<b>Type: string</b>" + "<br>");
// document.write("<b>Value: " + value + "</b>" + "<br>");
// document.write("<b>Type: number</b>");

/* Task 10 */

// var input, convert;
// input = prompt("Enter any string");
// convert = input.toUpperCase();
// document.write("<b>User input:</b> " + input + "<br>");
// document.write("<b>Upper case:</b> " + convert);

/* Task 11 */

// var input, copy1, copy2, convert;
// input = prompt("Enter any string");
// copy1 = input.slice(0, 1);
// copy2 = input.slice(1);
// copy1 = copy1.toUpperCase();
// convert = copy1.concat(copy2);
// document.write("<b>User input:</b> " + input + "<br>");
// document.write("<b>Title case:</b> " + convert);

/* Task 12 */

// var number = 35.36;
// var string = number.toString();
// string = string.replace(".", "");
// document.write("<b>Number:</b> " + number + "<br>");
// document.write("<b>String:</b> " + string);

/* Task 13 */

// var userName = prompt("Enter your username");
// for(var i = 0; i < userName.length; i++){
//     if(userName[i] === "!" || userName[i] === "," || userName[i] === "." || userName[i] === "@"){
//         alert("Please enter a valid username");
//         break;      
//     }
// }

/* Task 14 */

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var count = 0;
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// input = input.toLowerCase();
// for(var i = 0; i < A.length; i++){
//     if(input === A[i]){
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         count++;       
//     }
// }
// if(count === 0){
//     document.write("We are Sorry. " + input + " is <b>not available</b> in our bakery");
// }

/* Task 15 */

// var password, check, firstChar, numberCheck, letterCheck;
// numberCheck = 0;
// letterCheck = 0;
// check = 0;
// password = prompt("Enter your password");
// firstChar = password.charAt(0);
// if(firstChar >= 0 && firstChar <= 9){
//     document.write("<b>Entered password:</b> " + password + "<br>");
//     document.write("Password can not begin with a number" + "<br>");
//     document.write("<b>Please enter a valid password</b>");
//     check++;
// }
// else if(password.length <= 6){
//     document.write("<b>Entered password:</b> " + password + "<br>");
//     document.write("Password cannot be less than and equal to 6 characters" + "<br>");
//     document.write("<b>Please enter a valid password</b>");
//     check++;
// }
// if(check === 0){
//     for(var i = 0; i < password.length; i++){
//         if(password[i].charCodeAt() > 57 || password[i].charCodeAt() < 48){
//             letterCheck++;
//         }
//     }
//     if(letterCheck === password.length){
//         document.write("<b>Entered password:</b> " + password + "<br>");
//         document.write("Password cannot contain only letters. It can be the combination of letters & numbers" + "<br>");
//         document.write("<b>Please enter a valid password</b>");
//     }
// }

/* Task 16 */

// var university = "University of Karachi";
// var array = [];
// for(var i = 0; i < university.length; i++){
//     array[i] = university[i];
// }
// for(var j = 0; j < array.length; j++){
//     document.write("<b>" + array[j] + "</b>" + "<br>");
// }

/* Task 17 */

// var input, length, lastChar;
// input = prompt("Enter any string");
// length = input.length;
// lastChar = input.charAt(length - 1);
// document.write("<b>User input:</b> " + input + "<br>");
// document.write("<b>Last character of input:</b> " + lastChar);

/* Task 18 */

// var count = 0;
// var lowerTxt;
// var array = [];
// var text = "The quick brown fox jumps over the lazy dog";
// lowerTxt = text.toLowerCase();
// array = lowerTxt.split(" ");
// for(var i = 0; i < array.length; i++){
//     if(array[i] === "the"){
//         count++;
//     }
// }
// document.write("<b>Text: " + text + "</b><br>");
// document.write("<b>There are " + count + " occurrence(s) of the word 'the'</b>");









/* Chapter 26 - 30 */

/* Task 1 */

// var round, floor, ceil;
// var integer = prompt("Enter any integer");
// round = Math.round(integer);
// floor = Math.floor(integer);
// ceil = Math.ceil(integer);
// document.write("<b>number: " + integer + "</b><br>");
// document.write("<b>round off value: " + round + "</b><br>");
// document.write("<b>floor value: " + floor + "</b><br>");
// document.write("<b>ceil value: " + ceil + "</b>");

/* Task 2 */

// var negativeDecimalInteger, round, floor, ceil;
// negativeDecimalInteger = +prompt("Enter negative decimal value");
// round = Math.round(negativeDecimalInteger);
// floor = Math.floor(negativeDecimalInteger);
// ceil = Math.ceil(negativeDecimalInteger);
// document.write("<b>number: " + negativeDecimalInteger + "</b><br>");
// document.write("<b>round off value: " + round + "</b><br>");
// document.write("<b>floor value: " + floor + "</b><br>");
// document.write("<b>ceil value: " + ceil + "</b>");

/* Task 3 */

// var value, absolute;
// value = +prompt("Enter any number and see its absolute value");
// absolute = Math.abs(value);
// document.write("<b>The absolute value of " + value + " is " + absolute + "</b>");

/* Task 4 */

// var random1, random2, dice1, dice2;
// random1 = Math.random() * 6;
// random2 = Math.random() * 6;
// dice1 = Math.ceil(random1);
// dice2 = Math.ceil(random2);
// document.write("<b>random dice value: " + dice1 + "</b><br>");
// document.write("<b>random dice value: " + dice2 + "</b>");

/* Task 5 */

// var random, dice;
// random = Math.random() * 2;
// dice = Math.ceil(random);
// if(dice === 1){
//     document.write("<b>" + dice + "</b><br>");
//     document.write("<b>random coin value: Tails</b>");
// }
// else{
//     document.write("<b>" + dice + "</b><br>");
//     document.write("<b>random coin value: Heads</b>");
// }

/* Task 6 */

// var random = Math.random() * 100;
// var perfect = Math.ceil(random);
// document.write("<b>random number between 1 and 100: " + perfect + "</b>");

/* Task 7 */

// var weight = parseFloat(prompt("Enter your weight in kilograms"));
// document.write("<b>The weight of user is " + weight + " kilograms</b>")

/* Task 8 */

// var random, ceil;
// var input = +prompt("Enter a number between 1 and 10");
// random = Math.random() * 10
// ceil = Math.ceil(random);
// if(input === ceil){
//     alert("Congratulations! You guessed a right number");
// }
// else{
//     alert("Try again!");
// }









/* Chapter 31 - 34 */

/* Task 1 */

// var currentDateTime = new Date();
// document.write("<b>" + currentDateTime + "</b>");

/* Task 2 */

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var currentMonth = date.getMonth();
// for(var i = 0; i < month.length; i++){
//     if(currentMonth === i){
//         document.write("<b>Current Month: " + month[i] + "</b>");
//     }
// }

/* Task 3 */

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// for(var i = 0; i < dayNames.length; i++){
//     if(day === i){
//         document.write("<b>Today is " + dayNames[i] + "</b>");
//     }
// }

/* Task 4 */

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var day = date.getDay();
// if(day === 0 || day === 6){
//     document.write("<b>It's Fun day</b>");
// }
// else{
//     document.write("<b>It's working day</b>");
// }

/* Task 5 */

// var date = new Date();
// var day = date.getDate();
// if(day > 16){
//     document.write("<b>Last days of the month</b>");
// }
// else{
//     document.write("<b>First fifteen days of the month</b>");
// }

/* Task 6 */

// var date, miliSeconds, minutes, time;
// date = new Date();
// time = date.getTime();
// miliSeconds = date.getTime();
// minutes = miliSeconds / (1000 * 60 * 60);
// document.write("<b>Current Date: " + date + "</b><br>");
// document.write("<b>Elapsed milliseconds since January 1, 1970: " + miliSeconds + "</b><br>");
// document.write("<b>Elapsed minutes since January 1, 1970: " + minutes + "</b>");

/* Task 7 */

// var date = new Date();
// var hours = date.getHours();
// if(hours > 0 && hours < 12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

/* Task 8 */

// var laterDate = new Date("December 31, 2020");
// document.write("<b>Later date: " + laterDate + "</b>");

/* Task 9 */

// var date = new Date();
// var ramadanDate = new Date("June 18, 2015");
// var miliSeconds1 = ramadanDate.getTime();
// var miliSeconds2 = date.getTime();
// var diff = miliSeconds2 - miliSeconds1;
// var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// document.write("<b>" + daysPassed + " days have passed since 1st Ramadan, 2015</b>");

/* Task 10 */

// var date1 = new Date("January 1, 2015");
// var date2 = new Date();
// var miliSeconds1 = date1.getTime();
// var miliSeconds2 = date2.getTime();
// var diff = miliSeconds2 - miliSeconds1;
// var seconds = Math.floor(diff / (1000 * 60));
// document.write("<b>On reference date " + date2 + "</b><br>");
// document.write("<b>" + seconds + " seconds had passed since beginning of 2015</b>");

/* Task 11 */

// var currentDate = new Date();
// var date = new Date();
// var hour = date.getHours();
// var newDate = new Date(date.setHours(hour - 1));
// document.write("<b>current date: " + currentDate + "</b><br>");
// document.write("<b>1 hour ago, it was " + newDate + "</b>");

/* Task 12 */

// var currentDate = new Date();
// var date = new Date();
// var year = date.getFullYear();
// var newDate = new Date(date.setFullYear(year - 100));
// document.write("<b>current date: " + currentDate + "</b><br>");
// document.write("<b>100 years back, it was " + newDate + "</b>");

/* Task 13 */

// var age = prompt("Enter your age and see your birth year");
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// var birthYear = year - age;
// document.write("<b>Your age is " + age + "</b><br>");
// document.write("<b>Your birth year is " + birthYear + "</b>");

/* Task 14 */

// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var customerName, currentMonth, date, units, chargePerUnit, netAmountPayable, lateSurcharge, grossAmountPayable;
// units = 410;
// chargePerUnit = 16;
// lateSurcharge = 350;
// customerName = prompt("Enter your name");
// date = new Date();
// currentMonth = date.getMonth();
// for(var i = 0; i < monthNames.length; i++){
//     if(currentMonth === i){
//         currentMonth = monthNames[i];
//     }
// }
// netAmountPayable = units * chargePerUnit;
// grossAmountPayable = netAmountPayable + lateSurcharge;
// document.write("<b>K-Electric Bill</b><br><br>");
// document.write("Customer Name: " + "<b>" + customerName + "</b><br>");
// document.write("Month: " + "<b>" + currentMonth + "</b><br>");
// document.write("Number of units: " + "<b>" + units + "</b><br>");
// document.write("Charges per unit: " + "<b>" + chargePerUnit + "</b><br><br>");
// document.write("Net Amount Payable (within Due Date): " + "<b>" + netAmountPayable + "</b><br>");
// document.write("Late payment surcharge: " + "<b>" + lateSurcharge + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): " + "<b>" + grossAmountPayable + "</b>");









/* Chapter 35 - 38 */

/* Task 1 */

// function currentTimeAndDate(){
//     var date = new Date();
//     return date;   
// }
// document.write("<b>" + currentTimeAndDate() + "</b>");

/* Task 2 */

// function fullName(firstName, lastName){
//     firstName = prompt("Enter your first name");
//     lastName = prompt("Enter your last name");
//     return (firstName + " " + lastName);
// }
// alert("Hello! " + fullName());

/* Task 3 */

// function sum(firstNumber, secondNumber){
//     firstNumber = +prompt("Enter first value");
//     secondNumber = +prompt("Enter second value");
//     return (firstNumber + secondNumber);
// }
// document.write("<b>Sum of your values " + sum() + "</b>");

/* Task 4 */

// var firstNumber = +prompt("Enter first value");
// var secondNumber = +prompt("Enter second value");
// var operator = prompt("Enter operator like +, -, etc...");
// function calculator(first, second, oper){
//     var result;
//     if(oper === "+"){
//         result = first + second;
//     }
//     else if(oper === "-"){
//         result = first - second;
//     }
//     else if(oper === "*"){
//         result = first * second;
//     }
//     else if(oper === "/"){
//         result = first / second;
//     }
//     else if(oper === "%"){
//         result = first % second;
//     }
//     else{
//         return("Invalid operator!")
//     }
//     return result;
// }
// document.write(firstNumber + " " + operator + " " + secondNumber + " = " + calculator(firstNumber, secondNumber, operator));

/* Task 5 */

// var number = +prompt("Enter any integer");
// function square(integer){
//     integer = integer * integer;
//     return integer;
// }
// document.write("<b>Square of " + number + " is " + square(number) + "</b>");

/* Task 6 */

// var input = +prompt("Enter any integer and see its factorial");
// function factorial(number){
//     var count = 1;
//     for(var i = 1; i <= number; i++){
//         count = count * i; 
//     }
//     return count;
// }
// document.write("<b> Factorial of " + input + " is " + factorial(input) + "</b>");

/* Task 7 */

// var start, end;
// var array = [];
// start = +prompt("Enter the start number");
// end = +prompt("Enter the end number");
// function counting(st, en){
//     for(var i = st; i <= en; i++){
//         array[i] = i;
//     }
//     array = array.join(" ");
//     return (array);
// }
// document.write("<b>Starting number is " + start + "</b><br>");
// document.write("<b>Ending number is " + end + "</b><br><br>");
// document.write("<b>Counting: </b><br>");
// document.write(counting(start, end));

/* Task 8 */

// var base, perpendicular;
// base = +prompt("Enter base of right angle triangle");
// perpendicular = +prompt("Enter perpendicular of right angle triangle");
// function calculateHypotenuse(b, p){
//     var hypo;
//     b = b * b;
//     p = p * p;
//     hypo = b + p;
//     calculateSquare();
//     function calculateSquare(){
//         hypo = Math.sqrt(hypo);
//     }
//     return hypo;
// }
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("<b>The hypotenuse of a right angle triangle is " + hypotenuse + "</b>");

/* Task 9 */

/* Part 1 (Passing values as arguments) */

// function areaOfTriangle(w, h){
//     var area = w * h;
//     return area;
// }
// alert("Area of triangle is " + areaOfTriangle(4, 3));

/* Part 2 (Passing values using variables) */

// var width, height;
// width = +prompt("Enter the width of triangle");
// height = +prompt("Enter the height of triangle");
// function areaOfTriangle(w, h){
//     var area = w * h;
//     return area;
// }
// alert("Area of triangle is " + areaOfTriangle(width, height));

/* Task 10 */

// var string = prompt("Enter any word and see whether it is palindrome or not");
// string = string.toLowerCase();
// function checkPalindrome(str){
//     var check, final;
//     check = str;
//     var array = [];
//     array = str.split("");
//     array = array.reverse();
//     array = array.join("");
//     if(check === array){
//         final = "is a palindrome";
//     }
//     else{
//         final = "is not a palindrome";
//     }
//     return final;
// }
// document.write("<b>" + string + " " + checkPalindrome(string) + "</b>");

/* Task 11 */

// var string = prompt("Enter any string and see result");
// function upperCase(str){
//     var arr = [];
//     var otherChars = [];
//     var final = [];
//     arr = str.split(" ");
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i].toUpperCase();
//         otherChars[i] = arr[i].slice(1);
//         otherChars[i] = otherChars[i].toLowerCase();
//         final[i] = arr[i].charAt(0) + otherChars[i];
//     }
//     str = final.join(" ");
//     return str;
// }
// document.write("<b>Example string: " + string + "</b><br>");
// document.write("<b>Expected output: " + upperCase(string) + "</b>");

/* Task 12 */

// var string = prompt("Enter any string and see the longest word in the string");
// function longestWord(str){
//     var arr = [];
//     arr = str.split(" ");
//     var longest = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i].length > longest.length){
//             longest = arr[i];
//         }
//     }
//     return (longest);
// }
// document.write("Your string is: <b>" + string + "</b><br>");
// document.write("Longest word in it is: <b>" + longestWord(string) + "</b>");

/* Task 13 */

// var string = prompt("Enter any string");
// var letter = prompt("Enter any letter you want to search");
// function stringAndLetter(str, lett){
//     var count = 0;
//     str = str.toLowerCase();
//     lett = lett.toLowerCase();
//     var arr = [];
//     arr = str.split("");
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].charCodeAt() === lett.charCodeAt()){
//             count++;
//         }
//     }
//     return count;
// }
// document.write("String is <b>" + string + "</b><br>");
// document.write("The occurrence of letter " + "<b>" + letter + "</b>" + " in the string is <b>" + stringAndLetter(string, letter) + "</b>");

/* Task 14 */

// var radius = +prompt("Enter the radius to find the circumference and area of the circle");
// function calcCircumference(rad){
//     var pi = 3.142;
//     var circumference = 2 * pi * rad;
//     return circumference;
// }
// function calcArea(rad){
//     var pi = 3.142;
//     var area = pi * (rad * rad);
//     return area;
// }
// document.write("The circumference of the circle is <b>" + calcCircumference(radius) + "</b><br>");
// document.write("The area of the circle is <b>" + calcArea(radius) + "</b>");

/* THE END */