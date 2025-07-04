// q1
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("q1 - a:", a);
console.log("q1 - b:", b);



// q2
let numbers = [4, 9, 2, 7, 5];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("q2 - Maximum:", max);



// q3
let str = "JavaScript is awesome";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("q3 - Vowel count:", count);


// q4
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("q4 - isPrime(17):", isPrime(17));



// q5
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("q5 - reversed 'hello':", reverseString("hello"));


// q6
let nums = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let num of nums) {
    if (num % 2 === 0) {
        sum += num;
    }
}

console.log("q6 - Even sum:", sum);



// q7
let arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [];

for (let num of arr) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}

console.log("q7 - No duplicates:", unique);



// q8
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("q8 - FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("q8 - Fizz");
    } else if (i % 5 === 0) {
        console.log("q8 - Buzz");
    } else {
        console.log("q8 -", i);
    }
}



// q9
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log("q9 - factorial(5):", factorial(5));


// q10
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};

for (let key in car) {
    console.log(`q10 - ${key}: ${car[key]}`);
}