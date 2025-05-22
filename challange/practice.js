import { calculatedSum, additionNumbers } from "../module.js";
import lastName from "../module.js";

// let number = prompt("Please enter a number");

// if (number >= 0) {
//   console.log(" Peach🍑");
// } else {
//   console.log("Bell paper🌶️");
// }

// const myFruite = "Pineapple";

// if (myFruite === "Cherry") {
//   console.log("I like cherry🍒");
// } else if (myFruite === "Pineapple") {
//   console.log("I like Pineapple🍍");
// } else {
//   console.log("I like bluebarry🫐");
// }

// let grade = 80;

// grade >= 50 ? console.log("pass") : console.log("fail");

// const personDatailsObj = {
//   firstName: "sahar",
//   lastName: "Nosrati",
//   year: 40,
//   eyeColor: "Brown",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName} is ${this.year} years old with ${this.eyeColor} eye`;
//   },
// };

// console.log(personDatailsObj.fullName());

// personDatailsObj.explanation = function () {
//   return "This is function definition stored as a property value.";
// };

// console.log(personDatailsObj);
// console.log(personDatailsObj.explanation());

// console.log(personDatailsObj.eyeColor);
// console.log(personDatailsObj["firstName"]);
// console.log(Object.values(personDatailsObj));
// console.log(Object.entries(personDatailsObj));

// console.log(JSON.stringify(personDatailsObj));

// for (let i = 10; i >= -5; i--) {
//   console.log(i);
// }

// let sumOfNumber = 0;
// const number = 100;

// for (let i = 1; i <= number; i++) {
//   sumOfNumber += i;
// }

// console.log(sumOfNumber);

// const fruitArray = ["apple", "banana", "cherry"];

// for (let i = 0; i <= fruitArray.length; i++) {
//   for (let j = 0; j < fruitArray.length; j++) {
//     console.log(fruitArray[i]);
//   }
// }

// let factorialsOfIntegers = 1;

// const factorialFunction = function (number) {
//   if (number > 0) {
//     for (let i = 1; i <= number; i++) {
//       factorialsOfIntegers *= i;
//     }
//     return factorialsOfIntegers;
//   }
//   return `${number} is not acceptable`;
// };

// console.log(factorialFunction(12));

// function Person(name, lastName, age, city, phoneNumber) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
//   this.city = city;
//   this.phoneNumber = phoneNumber;
//   this.fullName = function () {
//     const detailName = `${this.name} ${this.lastName} is ${this.age} years old and lives in ${this.city} city. You can cntact with him/her ${this.phoneNumber} phone number.`;
//     return detailName;
//   };
// }

// Person.prototype.nationality = "German";
// console.log(Person, Person.prototype);

// let solmaz = new Person("solmaz", "Nosrati", 41, "Tehran", 12345678);

// console.log(solmaz.fullName());

// solmaz.fullName = function () {
//   const fullNameInformation = `${this.name} ${this.lastName} is ${this.age}and she is in  ${this.city}and her phonenumber is ${this.phoneNumber}`;
//   return fullNameInformation;
// };

// solmaz.nationality = "Iranian";
// console.log(solmaz.nationality);

// const myLetters = "sdfgsergr\vsdytrdytdryd";
// const myTemplateLiteral = `I wrote ${myLetters} as an example`;
// console.log(myTemplateLiteral);

// const newStringByObj = new String("Sahar");
// console.log(newStringByObj, typeof newStringByObj);

// const factorialFunction = function (number) {
//   let factorialsOfIntegers = 1;
//   if (number > 0) {
//     for (let i = 1; i <= number; i++) {
//       factorialsOfIntegers *= i;
//     }
//     return factorialsOfIntegers;
//   }
//   return `${number} is not acceptable`;
// };

// console.log(factorialFunction(4));
// console.log(factorialFunction(5));
// console.log(factorialFunction(-5));

// //
// const mostFrequent = function (array) {
//   const myObj = {};
//   const findMaxKey_ValueOfObj = [0];
//   const findMinKeyOfObj = ["a"];

//   for (element of array) {
//     myObj[element] = (myObj[element] || 0) + 1;
//   }

//   for (element in myObj) {
//     if (myObj[element] == findMaxKey_ValueOfObj[0]) {
//       findMinKeyOfObj.unshift(element);
//       findMaxKey_ValueOfObj[0] = myObj[element];
//     }
//     if (myObj[element] > findMaxKey_ValueOfObj[0]) {
//       findMinKeyOfObj.shift();
//       findMinKeyOfObj[0] = element;
//       findMaxKey_ValueOfObj[0] = myObj[element];
//     }
//   }
//   return findMinKeyOfObj;
// };

// console.log(mostFrequent([4, 4, 4]));

//

// const arrayOfString = [];
// const convertedStrToNumber = [];
// let sumOfNumbers = 0;
// let positiveNumber = 0;

// const convertedNumberToSterFunc = function (number) {
//   let convertedNumberToSter = String(number);
//   for (element of convertedNumberToSter) {
//     arrayOfString.push(element);
//   }
//   return convertedStrToNumberFunc(arrayOfString);
// };

// const convertedStrToNumberFunc = function (arrayOfString) {
//   for (element of arrayOfString) {
//     convertedStrToNumber.push(parseInt(element));
//   }
//   return calculateOfSumOfNumbers(convertedStrToNumber);
// };

// const calculateOfSumOfNumbers = function (convertedStrToNumber) {
//   for (element of convertedStrToNumber) {
//     sumOfNumbers += element;
//   }
//   return sumOfNumbers;
// };

// const calculateTheSumOfDigit = function (number) {
//   if (number < 0) {
//     positiveNumber = Math.abs(number);
//     convertedNumberToSterFunc(positiveNumber);
//   } else {
//     convertedNumberToSterFunc(number);
//   }
//   return sumOfNumbers;
// };

// console.log(calculateTheSumOfDigit(25));

//

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// for (element of myObj.cars) {
//   const model = element.models[1];
//   console.log(model);
// }

// const isPalindrome = function (myStr) {
//   const punctuation = /[\.,?!'":]/g;

//   const convertToLowercase = myStr.replaceAll(punctuation, "").toLowerCase();
//   const arrOfStr = convertToLowercase.split(" ").join("").toString();

//   const reversedArrOfStr = arrOfStr.split("").reverse().join("");

//   return reversedArrOfStr == arrOfStr ? true : false;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

//

// const fizzBuzz = function (number) {
//   if (number > 0) {
//     if (number % 3 == 0 && number % 5 == 0) {
//       return "FizzBuzz";
//     } else if (number % 3 == 0) {
//       return "Fizz";
//     } else if (number % 5 == 0) {
//       return "Buzz";
//     } else {
//       return "Your number is even.";
//     }
//   } else {
//     return "Your number is not valid. Please select other number";
//   }
// };

// console.log(fizzBuzz(-12));

//

// const isPrime = function (number) {
//   const primeNumber = [];

//   if (number >= 1) {
//     for (let i = 2; i < number; i++) {
//       if (i % 2 != 0 && i % i == 0) {
//         if (i > 3 && i % 3 == 0) {
//           continue;
//         }
//         if (i > 5 && i % 5 == 0) {
//           continue;
//         }
//         primeNumber.push(i);
//       }
//     }
//     return primeNumber;
//   }
//   return "Your number is not valid";
// };

// console.log(isPrime(100));

////
// const countWords = function (myString) {
//   const contNumberOfElements = {};

//   const punctuation = /[\.,?!'":;]/g;
//   const newString = myString.replace(punctuation, "").toLowerCase();

//   const convertedStringToArray = newString.split(" ");

//   for (element of convertedStringToArray) {
//     contNumberOfElements[element] = (contNumberOfElements[element] || 0) + 1;
//   }
//   return contNumberOfElements;
// };

// const myString = "Hello, Sahar. I like you sahar. i know you";
// const countword1 = countWords(myString);
// console.log(countword1);

// const countword2 = countWords(myString);
// console.log(countword2);

////

// const firstNonRepeatingChar = function (myString) {
//   if (myString == "") {
//     return null;
//   } else {
//     const punctuation = /[\.,?!'":;]/g;
//     const newString = myString.replace(punctuation, "").toLowerCase();

//     const convertedStrToArr = newString.split("");
//     const countEachElement = {};

//     for (element of convertedStrToArr) {
//       countEachElement[element] = (countEachElement[element] || 0) + 1;
//     }

//     const arrFromObjOfCoutElement = Object.entries(countEachElement);

//     for (element of arrFromObjOfCoutElement) {
//       if (element[1] == 1) {
//         return element[0];
//         break;
//       }
//     }
//   }
// };

// ######################

// const removeDuplicatedElement = function (data){
//   const selectedUniqueElement = [];

//   for (let element of data){
//     selectedUniqueElement.includes(element) ? selectedUniqueElement : selectedUniqueElement.push(element)
//   }

//   return selectedUniqueElement
// }

// const repeatitativeElemet = ["peach", "grap", "pear", "pineapple","peach", "grap", "pear", "pineapple"];
// const storeUniqueElement = removeDuplicatedElement(repeatitativeElemet);

// console.log(storeUniqueElement)

//###################

//

//##################
// let middleLetterIndex;
// let halfSlicedWord;
// let reversedHalfSlicedWord;

// const createWordsByevenIndex = function (palindromSring, middleLetterIndex) {
//   halfSlicedWord = palindromSring.slice(0, middleLetterIndex + 1);
//   console.log(halfSlicedWord);

//   reversedHalfSlicedWord = palindromSring
//     .slice(middleLetterIndex + 1)
//     .split("")
//     .reverse()
//     .join("");
//   console.log(reversedHalfSlicedWord);
// };

// const createWordsByoddIndex = function (palindromSring, middleLetterIndex){
//   halfSlicedWord = palindromSring.slice(0, middleLetterIndex);
//     console.log(halfSlicedWord);

//     reversedHalfSlicedWord = palindromSring
//       .slice(middleLetterIndex + 1)
//       .split("")
//       .reverse()
//       .join("");
//     console.log(reversedHalfSlicedWord);
// }

// const findIndex = function (string) {
//   const countLetters = string.length;

//   if (countLetters === 0) {
//     return;
//   }

//   if (countLetters % 2 !== 0) {
//     middleLetterIndex = (countLetters - 1) / 2;
//   } else {
//     middleLetterIndex = countLetters / 2 - 1;
//   }

//   return middleLetterIndex %2 === 0 ? createWordsByevenIndex(string, middleLetterIndex) : createWordsByoddIndex(string, middleLetterIndex)
// };

// findIndex("byebye")

// const evaluationPallindrom = function (halfSlicedWord, reversedHalfSlicedWord){
//   const positiveMessage = `The word is pallindrom`;
//   const negativeMessage = `The word is not pallindrom`;

//   return halfSlicedWord === reversedHalfSlicedWord ? positiveMessage : negativeMessage
// }

// console.log(evaluationPallindrom(halfSlicedWord, reversedHalfSlicedWord))

//  ########################### first day naming practice

// let fixedNumber = 5;
// let firstName = "John";
// let sequenceNumbers = [1, 2, 3, 4];
// let booleanEvaluation = true;
// let fruits = ["apple", "banana"];
// let cityTemprature = 167.5;
// let statusCheck = "OK";

// let userRole = "admin";
// let mixedNumber = [23, 56, 12, 78];
// let booleanEvaluation = true;
// let paymentDate = "2024-12-01";
// let warningMessage = "error";
// let authunticationPath = ["login", "logout", "signup"];
// let fixedCost = 44.6;
// let removedSelectedgoods = null;
// let coordinatePoint = { x: 12, y: 9 };
// let currancyUnit = "USD";
// let goodCost = "500";

// let isRainy = true;
// let jacketCost = 299.99;
// let jacketColors = ["Red", "Blue", "Green"];
// let confirmationTransduction = "confirm";
// let jacketNumers = 3;
// let isWashable = false;
// let selectedClothes = ["jeans", "jacket"];
// let goodCode = "product-8291";
// let confirmationPaymentMessage = "pending";
// let customerEmail = "user@example.com";

// ### naming function
//

// function countStringLengh(string) {
//   return data.split(" ").length;
// }

// function getFullNameInput(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// function isTruthyValue(list) {
//   return list.filter(Boolean);
// }

// function numberComparison(number1, number2) {
//   return number1 > number2 ? number1 : number2;
// }

// function toUpperCaseString(array) {
//   return array.map((letter) => letter.toUpperCase());
// }

// module

// console.log(calculatedSum);
// console.log(lastName);
// console.log(additionNumbers(8,8));

// ## naming practice

// const countCopletedTasks = function (taskList){};
// const isUserNameExist = function(userName){};
// const buildInternationalPhonNumber = function (phoneNumber){};
// const findMaxCostItem = function (items){};
// const sortingDatePosts = function (array){};
// const exceededLogUserAccount = function(number){};
// const isStrongPassword = function (input){};
// const converterTemprature = function(temperature){};

//  naming challange

// const calculatePrices = function(itemsList) {};
// const isInStore = function(clothes) {};
// const priceLimitation = function(Price) {};
// const informationDetails = function(itemProperties) {};
// const clothesClassification = function(clothesCollection) {};
// const temperatureConverter = function(temperature) {};
// const determinePrintWorkDirectory = function(path) {}; // I did not understand pwd (print work directory?)
// const responseModification = function(apiResponse) {};

// function caiculateTotalPrice(selectedClothes) {
//   let totalPrice = 0;
//   for (let clothes = 0; clothes < selectedClothes.length; clothes++) {
//     if (selectedClothes[clothes].isExist) {
//       y += selectedClothes[clothes].price;
//     }
//   }
//   return totalPrice;
// }

// let selectedClothes = [
//   { clothesItem: "Shoes", price: 49.99, isExist: true },
//   { clothesItem: "Hat", price: 19.99, isExist: false },
//   { clothesItem: "Bag", price: 29.99, isExist: true }
// ];

// console.log(caiculateTotalPrice(selectedClothes));

// naming challang

// function findActiveAccount(userInformation) {
//   return userInformation.filter((user) => user.age > 10 && user.isActiveAccount);
// }

// let userInformation = [
//   { firstName: "Ali", age: 14, isActiveAccount: true },
//   { firstName: "Sara", age: 8, isActiveAccount: true },
//   { firstName: "Mike", age: 12, isActiveAccount: false },
//   { firstName: "Luna", age: 15, isActiveAccount: true }
// ];

// console.log(findActiveAccount(userInformation));

// function findFirstNameWithA(nameList) {
//   let filteredName = [];
//   for (let index = 0; index < nameList.length; index++) {
//     if (nameList[index].firstName.startsWith("A")) {
//       filteredName.push(nameList[index].firstName.toUpperCase());
//     }
//   }
//   return filteredName;
// }

// let nameList = [
//   { firstName: "Ali" },
//   { firstName: "Mike" },
//   { firstName: "Adam" },
//   { firstName: "Luna" },
//   { firstName: "Amir" }
// ];

// console.log(findFirstNameWithA(nameList));

// logical and naming challanges

// naming challange
// function findTeenageIranianStudent(studentsInformation) {
//   let iranianTeenageStudents = [];
//   for (let index = 0; index < studentsInformation.length; index++) {
//     if (
//       studentsInformation[index].brithYear > 70 &&
//       studentsInformation[index].isIranian === true
//     ) {
//       iranianTeenageStudents.push(studentsInformation[index].firstName);
//     }
//   }
//   return iranianTeenageStudents;
// }

// let studentsInformation = [
//   { brithYear: 80, isIranian: true, firstName: "Sahar" },
//   { brithYear: 65, isIranian: true, firstName: "Ali" },
//   { brithYear: 90, isIranian: false, firstName: "Luna" },
//   { brithYear: 95, isIranian: true, firstName: "Reza" },
// ];

// console.log(findTeenageIranianStudent(studentsInformation));

// // logical challange
// const findSecondLargestNumber = function (unArrangedNumbers) {
//   const maxNumber = Math.max(...unArrangedNumbers);
//   let secondLargestNumber;

//   for (let index = 0; index < unArrangedNumbers.length; index++) {
//     unArrangedNumbers.filter((number) =>
//       number > unArrangedNumbers[index] && number < maxNumber
//         ? (secondLargestNumber = number)
//         : secondLargestNumber
//     );
//   }
//   return secondLargestNumber;
// };

// const unArrangedNumbers = [5, 1, 9, 2, 8, 20, 80, 100, 6, 12];

// const getSecondLargestNumber = findSecondLargestNumber(unArrangedNumbers);
// console.log(getSecondLargestNumber);

// 2025.05.17
// naming challange
// function findNumberFruit(fruits) {
//   let fruitCounter = {};
//   for (let index = 0; index < fruits.length; index++) {
//     if (!fruitCounter[fruits[index]]) {
//       fruitCounter[fruits[index]] = 1;
//     } else {
//       fruitCounter[fruits[index]] += 1;
//     }
//   }
//   return fruitCounter;
// }

// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// console.log(findNumberFruit(fruits));

// challange

// let wordExample1 = "hello";
// let wordExample2 = "maryam";
// let sortedWord1;
// let sortedWord2;

// const getSortedWords = function (word1, word2) {
//   sortedWord1 = word1.split("").sort().join("");
//   sortedWord2 = word2.split("").sort().join("");

//   return isAnagram(sortedWord1, sortedWord2);
// };

// const isAnagram = function (sortedWord1, sortedWord2) {
//   if (sortedWord1 === sortedWord2) {
//     const eveluationMessage = ` The word ${sortedWord1} is Anagram of ${sortedWord2}`;
//     return eveluationMessage;
//   } else {
//     const eveluationMessage = ` The word ${sortedWord1} is not Anagram of ${sortedWord2}`;
//     return eveluationMessage;
//   }
// };

// const findAnagramWords = getSortedWords(wordExample1, wordExample2);
// console.log(findAnagramWords);

// naming challange

// function findFinishedTask(toDoList) {
//   let finishedTasks = [];
//   for (let index = 0; index < toDoList.length; index++) {
//     if (toDoList[index].done === true) {
//       finishedTasks.push(toDoList[index].task);
//     }
//   }
//   return finishedTasks;
// }

// let toDoList = [
//   { task: "Learn JS", done: true },
//   { task: "Wash dishes", done: false },
//   { task: "Solve challenge", done: true },
// ];

// console.log(findFinishedTask(toDoList));

// logical challange

// removeDuplicates([1, 2, 3, 2, 4, 1]);
// Output: [1, 2, 3, 4]

// const removeDuplicates = function (duplicatedNumbers) {
//   const removedDuplicatedNumbers = [];

//   for (let number of duplicatedNumbers) {
//     removedDuplicatedNumbers.includes(number) === false
//     ? removedDuplicatedNumbers.push(number)
//       : removedDuplicatedNumbers;
//   }
//   return removedDuplicatedNumbers;
// };

// const duplicatedNumbers = [1, 2, 3, 2, 4, 1, 10, 20, 30, 10, 100, 4];

// const uniqueNumbers = removeDuplicates(duplicatedNumbers);
// console.log(uniqueNumbers);

// naming challange

// function findFinishedDuty(dutyList) {
//   let confirmedFinishedDuty = [];
//   for (let index = 0; index < dutyList.length; index++) {
//     if (dutyList[index].pinned) {
//       confirmedFinishedDuty.push(dutyList[index].title);
//     }
//   }
//   return confirmedFinishedDuty;
// }

// let dutyList = [
//   { title: "Shopping List", pinned: true },
//   { title: "Workout Plan", pinned: false },
//   { title: "Interview Notes", pinned: true }
// ];

// console.log(findFinishedDuty(dutyList));


// // logical challange
// const sequenceNumbers = [];

// const flattenArray = function (numbers) {
//   numbers.map((element) => {
//     sequenceNumbers.push(...element);
//   });
  
//   return sequenceNumbers;
// };

// const numbers = [[1, 2], [3, 4], [5]];
// flattenArray(numbers);
console.log(sequenceNumbers);