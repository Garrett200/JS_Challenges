
// Q1. Calculate hours into seconds

//function hoursIntoSeconds(hours) {
//    return hours * 60 * 60;
//}

//console.log(hoursIntoSeconds(24));

// Q2. Calculate the perimeter of a rectangle

//function calcPerimeter(length, width) {
//    return (length + width) * 2;
//}

//console.log(calcPerimeter(30, 10));

// Q3. Calculate the area of a triangle

//function calcArea(base, height) {
//    return (1 / 2) * base * height;
//}

//console.log(calcArea(20, 20));

// Q4. Extend a string

//function extendString(string) {
//    return string + "Frontend";
//}

//console.log(extendString("Apple"));

// Q5. Greater than 100?

//function sumGreaterThan100(num1, num2) {
//    return num1 + num2 >= 100
//}

//console.log(sumGreaterThan100(100, 1));

// Q6. Less than or equal to zero?

//function lessThanOrEqualToZero(num) {
//    return num <= 0;
//}

//console.log(lessThanOrEqualToZero(-2));

// Q7. Opposite Boolean

//function oppositeBoolean(bool) {
//    return !bool;
//}

//console.log(oppositeBoolean(true))

// Q8. Is not the number 0

//function isNotZero(element) {
//    return element !== 0;
//}

//console.log(isNotZero(null));

// Q9. Calculate the remainder

//function calcRemainder(num1, num2) {
//    return num1 % num2;
//}

//console.log(calcRemainder(9, 8))

// Q10. Is the number odd?

//function isOdd(num) {
//    return num % 2 !== 0;
//}

//console.log(isOdd(11));

// Q11. If a number is even, return 1 otherwise return -1

//function booleanInteger(num) {
//    return num % 2 === 0 ? 1 : -1; // Ternary Operator cannot use return after but can be returned before
//}

//console.log(booleanInteger(5))

// Q12. Check if a user is logged in AND subscribed

//function isLoggedInAndSubscribed(loggedIn, subscribed) {
//    return loggedIn === "LOGGED_IN" && subscribed === "SUBSCRIBED";
//}

//console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

// Q13. Check if a user is logged in OR Subscribed

//function isLoggedInAndSubscribed(loggedIn, subscribed) {
//    return loggedIn === "LOGGED_IN" || subscribed === "SUBSCRIBED";
//}

//console.log(isLoggedInAndSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));


// ~~~~~~~~~~~~ MEDIUM CHALLENGES ~~~~~~~~~~

// Q1. Falsy or Truthy?

//function filterOutFalsy(elem1, elem2) {
//    return (!elem1) ? elem1 : elem2;
//}

//console.log(filterOutFalsy(0, 'Dog'))

// Q2. Return the legnth of any given array

//function arrLength(arr) {
//    return arr.length;
//}

//console.log(arrLength([1, 2, 3, 4,]));

// Q3. Get the last element in an array

//function lastElem(arr) {
//    return arr[arr.length -1]
//}

//console.log(lastElem([3, 2, 0, 6, 2]));

// Q4. Find the sum of an array

//function arrSum(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; ++i) {
//        // This is how you loop through every element in an array
//        sum = sum + arr[i];
//    }
//    return sum
//}

//console.log(arrSum([1, 2, 3, 4]))

// Q5. Add up the numbers from a single number

//function progressiveSum(num) {
//    let sum = 0;
//    for (let i = 0; i <= num; ++i) {
//        sum = sum + i;
//    }
//    return sum;
//}

//console.log(progressiveSum(3))

// Q6. Calculate the time

//function calcTime(seconds) {
//    let timerMinutes = Math.floor(seconds / 60);
//    let timerSeconds = seconds % 60;
//    if (timerMinutes.toString().length == 1) {
//        timerMinutes = '0' + timerMinutes;
//    }
//    if (timerSeconds.toString().length == 1) {
//        timerSeconds = '0' + timerSeconds;
//    }
//    return timerMinutes + ':' + timerSeconds;
//}

//console.log(calcTime(70));

// Q7. Find the largest number

//function getMax(arr) {
//    let max = arr[0];
//    for (let i = 1; i <= arr.length; ++i) {
//        if (arr[i] > max) {
//            max = arr[i];
//        }
//    }
//    return max;
//}

//console.log(getMax([5, 100, 0]));

// Q8. Reverse a string

// INCREMENTING FOR LOOP
//function reverseString(str) {
//    let reversedString = '';
//    for (let i = 0; i < str.length; ++i) {
//        //This is how you loop through every character in a string
//        reversedString = str[i] + reversedString;
//   }
//    return reversedString;
//}

//console.log(reverseString('abc'));

// DECREMENTING FOR LOOP
//function reverseString(str) {
//    let reversedString = '';
//    for (let i = str.length - 1; i >= 0; --i) {
//        reversedString = reversedString + str[i]
//    }
//    return reversedString;
//}

//console.log(reverseString('abc'));

// CONVERT STRING TO ARRAY, REVERSE, AND JOIN ARRAY BACK TO STRING
//function reverseString(str) {
//    return str.split('').reverse().join('')
//}

//console.log(reverseString('abc'))

// Q9. Turn Every Element in an array into 0 

// FOR LOOP METHOD
//function convertToZeros (arr) {
//    let newArr = [];
//    for (let i = 0; i < arr.length; ++i) {
//        newArr[i] = 0;
//    }
//    return newArr;
//}

//console.log(convertToZeros([5, 100, 0]))

// CREATE NEW ARRAY AND FILL WITH ZEROS
//function convertToZeros(arr) {
//    return new Array(arr.length).fill(0);
//}

//console.log(convertToZeros([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// MAP METHOD - changes every element in the array to whatever is on the otherside of this arrow =>
//function convertToZeros(arr) {
//    return arr.map(elem => 0);
//}

//console.log(convertToZeros([1, 2 , 3, 4, 5, 6, 7]))

// Q10. Filter out all the apples

//function removeApples(arr) {
//    let newArr = []; // Creates a new array for the elements to go into
//    for (let i = 0; i < arr.length; ++i) { // Loops through every element of the array
//        if (arr[i] !== "Apple") { // If the current element is not "Apple" the next line works
//            newArr.push(arr[i]); // Takes the new array and pushes the current element of the old array into it
//        }
//    }
//    return newArr; // returns the new array without "Apple"
//}

//console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple', 'Tomato']));

// ARRAY FILTER METHOD
//function removeApples(arr) {
//    let newArr = arr.filter((element) => element !== "Apple");
//    return newArr;
//}

//console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple', 'Tomato']));

// Q11. Filter out all the falsy values

//function filterOutFalsy(arr) {
//    let newArr = [];
//    for (let i = 0; i < arr.length; ++i) {
//        if (!!arr[i] === true) {
//            newArr.push(arr[i]);
//        }
//    }
//    return newArr;
//}

//console.log(filterOutFalsy(["", [], 0, null, "Tomato", "0"]))

//function filterOutFalsy(arr) {
//    return arr.filter(elem => !!elem === true);
//}

//console.log(filterOutFalsy([null, undefined, "Tomato", "0", []]));

// Q12. Truthy to true, Falsy to false

// SOLUTION 1# Using If statements
//function convertToBoolean(arr) {
//    let newArr = [];
//    for (let i = 0; i < arr.length; ++i) {
//        if (!!arr[i] === true) {
//            newArr.push(true);
//        }
//        else {
//            newArr.push(false);
//        }
//    }
//    return newArr;
//}

//console.log(convertToBoolean([500, 0, "Garrett", "", []]));

// SOLUTION 2# Using ternary operators
//function convertToBoolean(arr) {
//    let newArr = [];
//    for (let i = 0; i < arr.length; ++i) {
//        !!arr[i] === true? newArr.push(true) : newArr.push(false);
//    }
//    return newArr;
//}

//console.log(convertToBoolean(['', NaN, 500, null, false, 0]));

//SOLUTION 3# Using .map to change all elements into booleans
//function convertToBoolean(arr) {
//    return arr.map(elem => !!elem);
//}

//console.log(convertToBoolean(['', NaN, 500, null, false, 0]));


// ~~~~~~~~~~~~ ADVANCED CHALLENGES ~~~~~~~~~~

// Q1. Show rating

//function showRating(stars) {
//    let ratings = "";
//    for (let i = 0; i < Math.floor(stars); ++i) { // .5 stars forces the loop to run a 5th time, math.floor rounds it down to 4
//        ratings += "*";
//        if (i !== Math.floor(stars) - 1) { // if i (0) is not equal to stars (rounded down to (4)) -1, put a space.
//            ratings += " ";                // The - 1 keeps the loop from adding a space after the total stars
//        }
//    }
//    if (!Number.isInteger(stars)) {  // !Number means is not an integer
//        ratings += " .";
//    }
//    return ratings;
//}

//console.log(showRating(4.5));

// Q2. Sort by lowest to highest price

function sortLowToHigh(arr) {
    arr.sort();
    return arr;
}

console.log(sortLowToHigh([3, 2, 1, 0]));

































