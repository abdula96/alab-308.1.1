// mathProblems.js

// Initialize numbers
let n1 = 15; // First number
let n2 = 10; // Second number
let n3 = 5;  // Third number
let n4 = 20; // Fourth number

// Function to verify the criteria
function verifyNumbers(n1, n2, n3, n4) {
    // Check if the numbers add up to 50
    let sum = n1 + n2 + n3 + n4 === 50;
    // Check if at least two numbers are odd
    let oddCount = [n1, n2, n3, n4].filter(n => n % 2 !== 0).length;
    let atLeastTwoOdd = oddCount >= 2;
    // Check if numbers are unique
    let unique = new Set([n1, n2, n3, n4]).size === 4;
    // Check if all numbers are less than or equal to 25
    let withinLimit = [n1, n2, n3, n4].every(n => n <= 25);
    
    return { sum, atLeastTwoOdd, unique, withinLimit }; // Return an object with results
}

// Verify the numbers and log the result
let verificationResults = verifyNumbers(n1, n2, n3, n4);
console.log(`The four numbers are valid according to the provided criteria: ${verificationResults.sum && verificationResults.atLeastTwoOdd && verificationResults.unique && verificationResults.withinLimit}.`);
console.log(`Sum equals 50: ${verificationResults.sum}`);
console.log(`At least two numbers are odd: ${verificationResults.atLeastTwoOdd}`);
console.log(`All numbers are unique: ${verificationResults.unique}`);
console.log(`All numbers are within limit (<= 25): ${verificationResults.withinLimit}`);

// Check if all numbers are divisible by 5
let allDivisibleBy5 = [n1, n2, n3, n4].every(n => n % 5 === 0);
console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

// Check if the first number is larger than the last
let isFirstLargerThanLast = n1 > n4;
console.log(`Is the first number (${n1}) larger than the last number (${n4})? ${isFirstLargerThanLast}`);

// Perform arithmetic operations
let subtractionResult = n2 - n1; // Subtract first number from second
let multiplicationResult = subtractionResult * n3; // Multiply result by third number
let remainderResult = multiplicationResult % n4; // Find the remainder when divided by fourth number
console.log(`Remainder of the arithmetic chain ((${n2} - ${n1}) * ${n3} % ${n4}): ${remainderResult}`);

// Refactor to avoid NOT operator
let isOver25 = [n1, n2, n3, n4].some(n => n > 25); // Check if any number is over 25
console.log(`Is any number over 25? ${isOver25}`);

// Note: Commit frequently as you work on each section
