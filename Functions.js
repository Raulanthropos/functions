/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log ("\n1. The area of the triangle is: ", area(4, 10));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2) {
    let sumIs = int1 + int2;
    if (int1 === int2) {
        sumIs *= 3;
    }

    return sumIs;
}

console.log("\n2. The sum of 2 and 3 is: ", crazySum(2,3));
console.log("\n2. The crazySum of 3 and 3 is: ", crazySum(3,3));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(num1) {
    let diff;
    if (num1 > 19) {
        diff = Math.abs(num1 - 19) * 3;
    } else {
        diff = Math.abs(num1 - 19);
    }

    return diff;
}

console.log("\n3. The crazyDiff between 20 and 19 is: ", crazyDiff(20));
console.log("\n3. The absolute diff between 10 and 19 is: ", crazyDiff(10));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
    if ((n >= 20 && n <=100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log("\n4. It shall be true for n = 25: ", boundary(25));
console.log("\n4. It shall also be true for n = 400: ", boundary(400));
console.log("\n4. It shall be false for n = 125: ", boundary(125));


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(inputString) {
    let wordArray = inputString.split(" ");
    if (wordArray[0] === "Strive") {
    return wordArray;
    } else {
        wordArray.unshift("Strive");
        return wordArray;
    }
}

console.log("\n5. This is lengthy - oh well, if the condition is put correctly, then the result should make sense: ", strivify("I am a dog"));
console.log("\n5. This is lengthy - oh well, if the condition is put correctly, then the result should make sense: ", strivify("Strive I am a dog"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(numnum) {
    if ((numnum > 0) && (numnum % 3 !== 0 || numnum % 7 !== 0)) {
        console.log("This numnum is not a multiple of 3 or 7");
    } else if ((numnum > 0) && (numnum % 3 === 0 || numnum % 7 === 0)) {
        console.log("This numnum is a multiple of either 3 or 7");
    } else {
        console.log("This is not a positive number! Please try again.")
    }
    return numnum;
}

console.log("\n6. For numnum equal to -1, we get: ", check3and7(-1));
console.log("\n6. For numnum equal to 10, we get: ", check3and7(10));
console.log("\n6. For numnum equal to 21, we get: ", check3and7(18));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(s){
    return s.split("").reverse().join("");
}

console.log("\n7. Let\'s see how the string Aries reverses: ", reverseString("Ares"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(s) {
    return s.charAt(0).toUpperCase() + s.substring(1, s.length);
}

console.log("\n8. I hope the word aries turns to uppercase: ", upperFirst("aries"));


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(s) {
    return s.substring(1, s.length-1);
}

console.log("\n9. I hope it works: ", cutString("subliminal"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n) {
    let arrayInQ = [];
    for (let i = 0; i < n; i++) {
     arrayN = Math.floor(Math.random() * 11);
     arrayInQ.push(arrayN);
    }
    return arrayInQ;
}

console.log("I see progress, and that makes me happy: ", giveMeRandom(5));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/