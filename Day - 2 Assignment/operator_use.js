// Arithmetic  operator
var num1 = 5;
var num2 = 5;

var num3 = num1 + num2;
console.log(num3);

var num4 = num1 - num2;
console.log(num4);

var num5 = num1 * num2;
console.log(num5);

var num6 = num1 / num2;
console.log(num6);

var num7 = num1 % num2;
console.log(num7);

// asignment Operator
var name = "Abhishek"

var age = 20;
age += 1;
console.log(age);

age -= 1;
console.log(age);

age /= 1;
console.log(age);

age %= 40;
console.log(age);

//Comparison Operator
var abhiAge = 20;
var shashiAge = 25;

var comparison = abhiAge != shashiAge;
console.log(comparison);

var comparison = abhiAge < shashiAge;
console.log(comparison);

var comparison = abhiAge > shashiAge;
console.log(comparison);

var comparison = abhiAge <= shashiAge;
console.log(comparison);

var comparison = abhiAge >= shashiAge;
console.log(comparison);

// identity operotor
 var ageAnurag = 21;
 var agePrince = "21";
 var ageYash = 21;

console.log(ageAnurag === agePrince);

console.log(ageAnurag === ageYash);

console.log(ageAnurag !== agePrince);

console.log(ageAnurag !== ageYash);

// Conditional Operator
var firstName = "Abhishek";
var age = 8;
if (firstName === "Abhishek" || age>18){
    console.log("Inside if block");
}
else {
    console.log("inside else block");

}
if (firstName === "Abhishek" && age>18){
    console.log("Inside if block");
}
else {
    console.log("inside else block");

}
if (!(firstName === "Abhishek" && age>18)){
    console.log("Inside if block");
}
else {
    console.log("inside else block");
}

// Unary operator
number = 5;
console.log(number);
++number;
console.log(number);
--number;
console.log(number);
number++;
console.log(number);
number--;
console.log(number);



