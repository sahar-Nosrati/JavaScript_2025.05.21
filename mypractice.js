// "use strict";

// const errorTest = function () {
//   const fruits = ["pineapple", "fig", "cherry", "grap"];

//   for (let element of fruits) {
//     try {
//       console.log(element);
//       if (element.includes("g")) {
//         throw new customError("It contains 'g'");
//       }
//       console.log(`Nice fruit${element}`);
//     } catch (error) {
//       console.error(error.message);
//       console.error(error.name);
//       console.error(error.stack);
//     } finally {
//       console.log("...finally😁🦆");
//     }
//   }
// };

// errorTest();

// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name} : ${this.message}`;
// }

// Try-catch

// try {
//   const testedNumber = prompt("Please enter a number");
//   const convertedNumber = +testedNumber;

//   const confirmedMessage = `The input is equal ${convertedNumber}, correct😊😊`;

//   if (convertedNumber) {
//     console.log(confirmedMessage);
//   } else {
//     throw new customError("The input is not correct, please enter new one");
//   }
// } catch (error) {
//   console.warn(error.name);
//   console.warn(error.message);
//   console.warn(error.stack);
// } finally {
//   const findSolutionMessage = `Finally, I have found solution 😊😁😀`;
//   console.log(findSolutionMessage);
// }

// function customError(message) {
//   this.name = "Custom Error";
//   this.message = message;
//   this.stack = `${this.name}: ${this.message}`;
// }

// scop in js

// const fistName = "Sahar";
// function fullName (tName){
//   var lastName = "jjj";
//   if (fistName == "Sahar"){
//     var fullName1 = `${fistName} ${lastName}`;
//     console.log(fullName);
//     console.log(lastName);
//   }
// }

// console.log(fullName("Mahtab"));
// console.log(fullName1);
// console.log(lastName);

// let flowerProperties = { flower: "Rose", color: "Red", hasSmell: true };

// Object.defineProperty(flowerProperties, "flower", {
//   writable: false
// });
// let descriptor1 = Object.getOwnPropertyDescriptor(flowerProperties, "flower");

// console.log(descriptor1);
// flowerProperties.flower = "Pancy";
// console.log(flowerProperties);

// const oddNumbers = [1,3,5,7];
// console.log(oddNumbers);

// ######## this key word

// console.log(getFullName.fullName())
// console.log(this);
// const x = this;
// console.log(x)

// const multiplicationNumbers = function(number1, number2){
//   const resultNumber = number1 * number2;
//   console.log(this);
//   return resultNumber
// }

// console.log(multiplicationNumbers(8,8));

// bind ()

// const firstAndLastName1 = {
//   first_Name: "Sahar",
//   last_Name: "MM",
// };

// const firstAndLastName2 = {
//   first_Name: "Rose",
//   last_Name: "jj",
// };

// const fullName = function (country , city) {
//   const fullName = `${this.first_Name} ${this.last_Name} is full name of this function and ${country}, ${city} will be tested by  and apply methods`;
//   console.log(this);
//   return fullName;
// };

// console.log(fullName());

// const getFullName1 = fullName.bind(firstAndLastName1);
// console.log(getFullName1());

// const getFullName2 = fullName.bind(firstAndLastName2);
// console.log(getFullName2());

// const fullNameAndCity1 = fullName.call(firstAndLastName1, "Warsaw");
// console.log(fullNameAndCity1)

// const fullNameAndCity2 = fullName.call(firstAndLastName2, "Vienna");
// console.log(fullNameAndCity2)

// const fullNameAndCity3 = fullName.apply(firstAndLastName1, ["poland","Warsaw"]);
// console.log(fullNameAndCity3)

// const fullNameAndCity4 = fullName.apply(firstAndLastName2, ["Austria","Vienna"]);
// console.log(fullNameAndCity4)

// classes

// class FullName {
//   constructor (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName
//   }
// }

// console.log(typeof FullName);

// const firstPersonel = new FullName("Mina", "Mohamadi");
// console.log(firstPersonel);

//
// json

// const employeeDataServer =`
//   [
//     {
//       "name": "Leila",
//       "lastName": "Minaei",
//       "city": "Tehran",
//       "age": "25"
//     },
//     {
//       "name": "Marziyeh",
//       "lastName": "Mohamadi",
//       "city": "Tabriz",
//       "age": "30"
//     }
//   ]`;

// console.log(typeof employeeDataServer)

// const employeesDataJs1 = JSON.parse(employeeDataServer);
// const employeesDataJs2 = JSON.stringify(employeesDataJs1);

// console.log(employeesDataJs1);
// console.log(typeof employeesDataJs1);
// console.log(employeesDataJs2);
// console.log(typeof employeesDataJs2);

// const isolatedNames = [];

// for(element of employeesDataJs1){
//   isolatedNames.push(element.name)
// }

// console.log(isolatedNames);

// // debugging

// let iterationNumber = 5;

// for (let i = 0; i <= iterationNumber; i++){
//   console.log(i)
// }

// const findBanana = function (fruits) {
//   var banana = [];
//   let pineappale = [];
//   const grap = [];

//   for (fruit of fruits) {
//     if (fruit === "banana") {
//       banana.push(fruit);
//     } else if (fruit === "pineapple") {
//       pineappale.push("pineappale");
//     } else if (fruit === "grap") {
//       grap.push("grap");
//     }
//   }
//   return [banana, pineappale, grap];
// };

// const fruits = ["pineapple", "banana", "cherry", "grap"];
// console.log(findBanana(fruits));

// var firstCar = "Volvo";

// const myFavoriteCar = function () {
//   var secondCar = "Benz";
//   const fixedNumber = 50;
//   console.log(thirdCar)

//   if (fixedNumber === 50) {
//     console.log(123)
//     var thirdCar = "BMW";
//   }
// };

// myFavoriteCar()

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// getter



// let person = {
//   name: 'John',
//   get name() {
//     return this.name;
//   },
//   set name(value) {
//     this.name = value;
//   }
// };

// person.name = 'Jane';