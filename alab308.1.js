// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Function to verify the criteria
function verifyNumbers(n1, n2, n3, n4) {
  // Check if the numbers add up to 50
  let sum = n1 + n2 + n3 + n4 === 50;

// Check if at least two numbers are odd
    let oddCount = [n1, n2, n3, n4].filter(n => n % 2 !== 0).length;
    let atLeastTwoOdd = oddCount >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check if numbers are unique
let unique = new Set([n1, n2, n3, n4]).size === 4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Verify the numbers and log the result
console.log("Numbers verified:", verifyNumbers(n1, n2, n3, n4)); // Should return true or false

// Check if all numbers are divisible by 5
let allDivisibleBy5 = [n1, n2, n3, n4].every(n => n % 5 === 0);
console.log("All numbers divisible by 5:", allDivisibleBy5);

// Check if the first number is larger than the last
let isFirstLargerThanLast = n1 > n4;
console.log("Is the first number larger than the last?", isFirstLargerThanLast);

// Perform arithmetic operations
let subtractionResult = n2 - n1; // Subtract first number from second
let multiplicationResult = subtractionResult * n3; // Multiply result by third number
let remainderResult = multiplicationResult % n4; // Find the remainder when divided by fourth number
console.log("Remainder of the arithmetic chain:", remainderResult);

// Refactor to avoid NOT operator
let isOver25 = [n1, n2, n3, n4].some(n => n > 25); // Check if any number is over 25
console.log("Is any number over 25?", isOver25);