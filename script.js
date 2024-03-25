//1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
/*let a = 10;
let b = 5;

let sum=a+b;
console.log("Sum:", sum);
let diff=a-b;
console.log("Difference:",diff);
let product=a*b;
console.log("Product:",product);
let quotient=a/b; 
console.log("Quotient:", quotient);
let modulus=a%b;
console.log("Modulus:", modulus);*/

//2. Take two numbers and only print the integer part when a is divided by b.
/*let a=40;
let b=5;

if(a%b==0)
{
    console.log(a/b);
}
else
{
    console.log("Not divisible");
}*/

//3. Take two numbers a,b and print the exponential power of the first number raised by the second.

/*let a = 2;
let b = 3;
// let r=Math.pow(a, b);
let r=2**3;
console.log("Exponential power:",r);*/

//4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
/*let a = 10;
let b = 3;
let r= a/b;

let decimal=r%1;
console.log("Decimal part of division:", decimal);*/

//5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
// Define marks in 5 subjects
/*let A = 80;
let B = 75;
let C = 90;
let D = 85;
let E = 88;

let total=A+B+C+D+E;
let avg = total/5;
console.log("Average marks:",avg);*/

//6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
/*let c=100; 
let sp =150; 

let profit =sp-c;
console.log("Profit:", profit);*/

//7. Take a number and print out the last digit of the number.
/*let a=2456;
let b=a%10;
console.log("Last digit",b);*/

//8. Take a 2 digit number and return the first and last digits.
let n=67;
let first=Math.floor(n/10);
let last=n%10;
console.log("First digit:",first);
console.log("Last digit:",last);

//9. Write a JavaScript program to find the largest of three numbers.
let a=10;
let b=20;
let c=15;
if (a>=b && a>=c) 
{
    console.log(a+" is the largest.");
} 
else if(b>=a && b>=c) 
{
    console.log(b+" is the largest.");
} 
else 
{
    console.log(c+" is the largest.");
}

//10. Write a JavaScript program to check whether a number is even or odd.
let num=7;
if (num%2===0) 
{
    console.log(num+ " is even.");
} 
else 
{
    console.log(num+ " is odd.");
}
//11. Write a JavaScript program to check whether a given number is prime or not.


