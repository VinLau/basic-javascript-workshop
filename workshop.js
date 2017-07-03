function firstLetter(inputString) {
   if (inputString === undefined){
      return undefined;
   }
   else {
      return inputString[0];
   }
}

function lastLetter(inputString) {
   if (inputString === undefined){
      return undefined;
   }
   else if (inputString === ""){
      return undefined;
   }
   else {
      return inputString.substr(-1); /* note we can slice strings in javascript via array method '[]' or with a substr method call*/
      /* NB: substring and substr calls are DIFFERENT */
      /* substr() is to take a string from X onwards as Y length, whereas substring() is to slice a string from X to Y inclusive */
      /* start Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start 
      where strLength is the length of the string. For example, str.substr(-3) is treated as str.substr(str.length - 3) */
   }
}

function letterAtPosition(inputString, position) {
   if (inputString === undefined){
      return undefined;
   }
   else if (position < 0) {
      return undefined;
   }
   else {
      return inputString.substr(position, 1); /* can slice just one character by specifiying the length (i.e. 1 character with '1') */
   }
}

function addTwoNumbers(num1, num2) {
   if ( typeof num1 != "number" || typeof num2 != "number" ){ /* recall we can check the data type/primitive with typeof call */
      return undefined;
   }
   else {
      return num1 + num2;
   }
}

function multiplyTwoNumbers(num1, num2) {
   if ( typeof num1 != "number" || typeof num2 != "number" ){ /* recall we can check the data type/primitive with typeof call */
      return undefined;
   }
   else {
      return num1 * num2;
   }
}

function calculator(operation, num1, num2) {
   if (operation === "add"){
      return num1 + num2;
   }
   else if (operation === "sub"){
      return num1 - num2;
   }
   else if (operation === "mult"){
      return num1 * num2;
   }
   else if (operation === "div"){
      return num1 / num2;
   }
   else {
      return undefined;
   }
}

function repeatString(inputString, numRepetitions) {
   if (numRepetitions < 0 || numRepetitions === 0){
      return "";
   }
   else {
      return inputString.repeat(numRepetitions); /* nifty repeat method call! */
   }
}

function reverseString(inputString) {
   var RV = "";
   for (var i = 0; i < inputString.length; i++) {
      RV += inputString[(inputString.length - 1) - i] ;
   }
   return RV;
}

function longestWord(inputString) {
   if (inputString === ""){
      return "";
   }
   else if (!(inputString.includes(" "))){ /* we don't have to make loops to check for existance of a char like java, use includes! */
      return inputString;
   }
   else {
      var testVar = "";
      var RV = "";
      
      for (var i = 0; i < inputString.length; i++) {
         
         if (inputString[i] === " " || inputString[i] === "." || inputString[i] === "," || i === (inputString.length - 1)) {
            /* need the last conditional in case the string does not have a period or space etc */
            if (testVar.length > RV.length) {
               RV = testVar;
            }
            testVar = ""; /* reset the testing variable */
            continue; /* ie if you encounter a new word, skip adding a character to RV */ 
         }
         testVar += inputString[i];

      }
      return RV;
   }
}

function capitalize(inputString) {
   var RV = "";
   for (var i = 0; i < inputString.length; i++) {
      if (inputString[i-1] === " " || inputString[i-1] === "." || inputString[i-1] === "," || i === 0) {
         /* last conditional is for the beginning word where you would not expect a space infront */
         RV += inputString.charAt(i).toLocaleUpperCase(); /* using charAt(i) instead of string[i], same thing really */
      }
      else {
         RV += inputString[i].toLocaleLowerCase();
      }
   } 
   return RV;
}

function sumOfNumbers(arrayOfNumbers) {
   var RV = 0; /* remember to initialize primitive ! */
   
   if (arrayOfNumbers.length === 0) {
      return 0;
   }
   
   for (var i = 0; i < arrayOfNumbers.length; i++) {
      if (typeof arrayOfNumbers[i] !== "number"){
         return undefined;
      }
      RV = RV + arrayOfNumbers[i];
   }
   return RV;
}

function uniqueElements(array1, array2) {
   var RA = [];
   if (!(Array.isArray(array1) || Array.isArray(array2))) {
      return undefined;
   }
   else if (array1.length === 0){
      return array2;
   }
   else if (array2.length === 0){
      return array1;
   }
   for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            break;
         }
         if ((array2.length - 1) === j) {
            RA.push(array1[i]);
         }
      }
   }
   for (var i = 0; i < array2.length; i++) {
      for (var j = 0; j < array1.length; j++) {
         if (array2[i] === array1[j]) {
            break;
         }
         if ((array1.length - 1) === j) {
            RA.push(array2[i]);
         }
      }
   }
   return RA;
}

function isPalindrome(inputString) {
   var testString = inputString.replace(/\W/g, "");
   testString = testString.toLowerCase(); /* easier to check if all letters are lower case */;
   if (reverseString(testString).toLowerCase() === testString) { /*using our function we made earlier!*/
      return true;
   }
   else {
      return false;
   }
}

function wrapCharacter(inputString) {
   for (var i = 0; i < inputString.length; i += 40) {
      inputString += "\n";
      // if (inputString.charAt(i+1) === " ") {
      //    /* NB: no replaceAt() function in javascript, need to make two strings and put em together */
      //    var pieceOne = inputString.slice(0, i);
      //    var pieceTwo = inputString.slice(i+2, inputString.length);
      //    inputString = pieceOne + pieceTwo;
      // }
   }
   return inputString;
}

console.log(wrapCharacter("Should work with strings less than 40 characters"));

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};