// -------------------------------------CHAPTER 35-38-------------------------------------------------------

// Question 01:
function currDate() {
    return new Date();
}

console.log(currDate());

// Question 02:
function greet(fName, lName) {
    var fullName = fName+ " " +lName;
    alert(`Hello ${fullName}!`)
}

var firstName=prompt("Enter your first name:");
var lastName=prompt("Enter your last name:");

greet(firstName, lastName);

// Question 03:
var num1=+prompt("Enter first number:");
var num2=+prompt("Enter second number:");

function sum(a,b) {
    return a+b;
}

console.log(sum(num1, num2));

// Question 04:
var num1=+prompt("Enter first number:");
var num2=+prompt("Enter last number:");
var operator=prompt("Enter an operator:");

function calculator(a, b, c) {
    var sum;
    switch(c) {
        case '+':
            sum=a+b;
            break;
        case '-':
            sum=a-b;
            break;
        case '/':
            sum=a/b;
            break;
        case '*':
            sum=a*b;
            break;
        default:
            sum="Invalid operator!";
    }
    return sum;
}

console.log(calculator(num1, num2, operator));

// Question 05:
function square(a) {
    var result=a*a;
    return result;
}

var num=+prompt("Enter a number:");

console.log(`The square is: ${square(num)}.`);

// Questiion 06:
function factorial(a) {
    var fact=1;
    for(var i=a; i>1; i--) {
        fact=fact*i;
    }
    return fact;
}

console.log(`The factorial of ${num} is: ${factorial(num)}.`);

// Question 07:
function count(a, b) {
    for(var i=a; a<=b; a++) {
        console.log(a);
    }
}

 var startNum=+prompt("Enter starting number:");
 var endNum=+prompt("Enter ending number:");
 
 count(startNum, endNum);

// Question 08:
var base=+prompt("Enter base of a right-angled triangle:");
var perp=+prompt("Enter perpendicular of the right-angled triangle:");

function calculateHypotenuse(base, perp) {
    function calculateSquare(a) {
        return a*a;
    }
    var baseSquare = calculateSquare(base);
    var perpSquare = calculateSquare(perp);
    var hypotenuse = Math.sqrt(baseSquare + perpSquare);
    return hypotenuse;
}

console.log(calculateHypotenuse(base, perp));

// Question 09:

function calculateArea(a, b) {
    var area=a*b;
    return area;
}

// Part i
console.log(calculateArea(4, 5));

// Part ii
var width=+prompt("Enter width of a rectangle:");
var height=+prompt("Enter height of the rectangle:");

console.log(calculateArea(width, height));

// Question 10:

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}

var string = prompt("Enter a string to check if it's a palindrome or not?");
if(isPalindrome(string)) {
    alert("The entered string IS a palindrome!");
}
else {
    alert("The entered string is NOT a palindrome!");
}

// Question 11:
var str = "The quick brown fox";
var result = '';

function capitalize(string) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }
    return result;
}

console.log(capitalize(str));

// Question 12:
var str="Web Developmemnt Mondule";

function findLongestWord(string) {
    var words=string.split(' ');
    var longestWord='';

    for(var i=0; i<words.length; i++) {
        if(words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord(str));

// Question 13:
function countOccurence(string, letter) {
    var count=0;
    for(var i=0; i<string.length; i++) {
        if(string[i] === letter) {
            count++;
        }
    }
    return count;
}

var str="The quick brown fox jumps over a lazy dog.";
console.log(`The occurence of 'o' in the string is: ${countOccurence(str, 'o')}.`);

// Question 14:
function calcCircumference(radius) {
    var circum = 2*3.142*radius;
    return circum;
}

function calcArea(radius) {
    var area=3.142*radius*radius;
    return area;
}

var rad=+prompt("Enter radius of circle:");

console.log(`The circumference of circle is: ${calcCircumference(rad)}.\nThe area of circle is: ${calcArea(rad)}.`);

// ----------------------------------------------------CHHAPTER 38-42-----------------------------------------

// Question 01:
function power(a, b) {
    var result = 1;
    for(var i=0; i<b; i++) {
        result=result*a;
    }
    return result;
}

console.log(power(2, 8));

// Question 02:
var input=+prompt("Enter a year to check if it's a leap year or not?");

function checkLeapYear(year) {
    var isLeap = false;
    if(year%4===0 && year%100!==0) {
        isLeap = true;
    }
    else if(year%400===0) {
        isLeap=true;
    }
    else {
        isLeap=false;
    }
    return isLeap;
}

if (checkLeapYear(input)) {
    console.log(`The entered year ${input} IS a leap year.`);
}
else {
    console.log(`The entered year ${input} is NOT a leap year.`);
}

// Question 03:
function areaOfTriangle(a, b, c) {
    function calcSemiParameter() {
        s = (a+b+c)/2;
        return s;
    }
    var area=Math.sqrt(calcSemiParameter() * (calcSemiParameter()-a) * (calcSemiParameter()-b) * (calcSemiParameter()-c));
    return area.toFixed(2);
}

console.log(`Area of triangle is: ${areaOfTriangle(2, 3, 4)}`);

// Question 04:
function mainFunction(eng, phy, cs) {
    var marksObt = eng+phy+cs;
    function avg() {
        var avg=marksObt/3;
        return avg.toFixed(2);
    }
    function per() {
        var per=marksObt/300*100;
        return per.toFixed(2);
    }
    console.log(`Average: ${avg()}.\nPercentage: ${per()}%.`);  
}

mainFunction(80, 90, 96);

// Question 05:
function findCharIndex(str, char) {
    for(var i=0; i<str.length; i++) {
        if(str[i] === char) {
            return i;
        }
    }
    return -1;
}

var string="There is no friend as loyal as a book.";
console.log(findCharIndex(string, 'k'));

// Question 06:
function delVowel(str) {
    return str.replace(/[aeiousAEIOU]/g, "");
}

var string="The quick brown fox jumps over the lazy dog."
console.log(delVowel(string));

// Question 07:
function countDoubleVowels(str) {
    str = str.toLowerCase();
    var count=0;
    for(var i=0; i<str.length - 1; i++) {
        var pair = str[i] + str[i+1];

        switch(pair) {
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu':
                count++;
        }
    }
    return count;
}

var string="Pleases read this application and give me gratuity";
console.log(`Double vowels count = ${countDoubleVowels(string)}.`);

// Question 08:
var distance=+prompt("Enter the distance between two cities in kilometer:");

function convM(num) {
    var disInM = num * 1000;
    console.log(`Distance in meter: ${disInM.toFixed(2)}.`);
}

function convFt(num) {
    var disInFt = num * 3280.84;
    console.log(`Distance in feet: ${disInFt.toFixed(2)}.`);
}

function convIn(num) {
    var disInIn = num * 39370.1;
    console.log(`Distance in inches: ${disInIn.toFixed(2)}.`);
}

function convCm(num) {
    var disInCm = num * 1000 * 100;
    console.log(`Distance in centimetres: ${disInCm.toFixed(2)}.`);
}

convCm(distance);
convFt(distance);
convIn(distance);
convM(distance);

// Question 09:
function overTimePay(workHr) {
    var extraPay;
    if(workHr>40) {
        var extraHr = workHr - 40;
        extraPay = extraHr * 12;
    }
    else {
        extraPay=0;
    }
    return extraPay;
}

var hr=+prompt("Enter working hour:");
console.log(`The over timne pay is: ${overTimePay(hr)}.`);

// Question 10:
function calcCurrencyNotes(amount) {
    var hundredNotes = Math.floor (amount / 100);
    amount = amount % 100;
    var fiftyNotes = Math.floor (amount/50);
    amount = amount % 50;
    var tenNotes = Math.floor (amount/10);
    return {
        hundredNotes: hundredNotes,
        fiftyNotes: fiftyNotes,
        tenNotes: tenNotes
    };
}

var totalAmount = +prompt("Enter amount:");
console.log(`The cashier will give \n${calcCurrencyNotes(totalAmount).hundredNotes} notes of 100\n${calcCurrencyNotes(totalAmount).fiftyNotes} notes of 50\n${calcCurrencyNotes(totalAmount).tenNotes} notes of 10.`);


// ---------------------------------------------CHAPTER 43-48------------------------------------------------

// Question 01:
function showAlert() {
    alert("Clicked the link!");
}

// Question 02:
function purchase() {
    alert("Thanks for purchasing this mobile!");
}

// Question 03:
function delRow(btn) {
    var row=btn.parentNode.parentNode;
    row.remove();

    var table=document.getElementById("studentTable");
    var rows = table.rows;    

    for(var i=1; i<rows.length; i++) {
        rows[i].cells[0].innerText=i-1;
    }
}

// Question 05:
function countIncrease(num) {
    var value=document.getElementById("countValue");
    var num=parseInt(value.innerHTML);
    num++;    
    value.innerText=num;
}

function countDecrease(num) {
    var value=document.getElementById("countValue");
    var num=parseInt(value.innerHTML);
    num--;    
    value.innerText=num;
}