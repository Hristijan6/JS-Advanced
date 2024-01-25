console.log("test");
document.body.style.backgroundColor = "beige";



//Exercise 01

function countDigits(number) {
    
    if (number === 0) {
        return 1;
    }

    let count = 0;
    let num = Math.abs(number);

    while (num > 0) {
        count++;
        num = Math.floor(num / 10); 
    }

    return count;
}


function checkEvenOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


function checkPositiveNegative(number) {
    if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}


function getNumberStats(number) {
    const digitCount = countDigits(number);
    const evenOdd = checkEvenOdd(number);
    const posNeg = checkPositiveNegative(number);

  
    console.log(`${digitCount} Digits, ${evenOdd}, ${posNeg}`);
}


getNumberStats(-25);

console.log("++++++++++++++++");

//Exercise 02

const changeTextColor = (element, color = 'black') => {
    element.style.color = color;
};


const changeTextSize = (element, textSize = 24) => {
    element.style.fontSize = `${textSize}px`;
};


const handleButtonClick = () => {
    const header = document.getElementById('header');
    const textSizeInput = document.getElementById('textSizeInput');
    const colorInput = document.getElementById('colorInput');

    const textSize = parseInt(textSizeInput.value) || 24;
    const color = colorInput.value || 'black';

    
    changeTextSize(header, textSize);
    changeTextColor(header, color);
};


const changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', handleButtonClick);

console.log("+++++++++++++++++++++++++");
// Exercise 03

let arrayOfNums = [1, 2, 3, 4, 5];

let numbers = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
};

let squaredArray = numbers(arrayOfNums);
console.log(`The array is ${squaredArray}`);

console.log("++++++++++++++++");

// Exercise 04

let factorielBtn = document.getElementById("factoriel");
let resultFactoriel = document.getElementById("result");

factorielBtn.addEventListener("click", () => {
    resultFactoriel.innerHTML = ``;
    let userInput = document.getElementById("factorielNumber");
    let factorielNumber = parseInt(userInput.value);

    let factorialResult = (function calculateFactorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return number * calculateFactorial(number - 1);
        }
    })(factorielNumber);

    resultFactoriel.innerHTML += `The result is: ${factorialResult}`;
});

console.log("++++++++++++++++++++");
//Exercise 05

let randomText = document.getElementById("randomText");
let reverseText = document.getElementById("reverseText");
let reversedResult = document.getElementById("reversedResult");

const reverseWords = (text) => {
    let textArray = text.split("");
    let reversedArray = textArray.reverse();
    let joinArrayToString = reversedArray.join("");

    return joinArrayToString
  };

  reverseText.addEventListener("click", () => {
    reversedResult.innerHTML = "";
    let text = randomText.value;

    let result = reverseWords(text);

    reversedResult.innerHTML += result;
});


console.log("+++++++++++++++++");
// Exercise 06

let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];

const productOfPositiveNumbers = (arr) => {
  const positiveNumbers = arr.filter(element => typeof element === 'number' && element > 0);
  
  if (positiveNumbers.length === 0) {
    return "No positive numbers found";
  }
  console.log(arr);
  return positiveNumbers.reduce((member, number) => member * number, 1);
};

const result = productOfPositiveNumbers(array);
console.log(result);
  
console.log("+++++++++++++++++");
// Exercise 07

let rndInput = document.getElementById("randomInput");
let resultBtn = document.getElementById("numberOfVowels");
let vowelsResult = document.getElementById("vowelsResult");
let vowels = "aeiou";
let count = 0;  


let printVowels = inputString => {
    vowelsResult.innerHTML = "";
    for (let i = 0; i < inputString.length; i++) {
        
        if (vowels.includes(inputString[i])) {
           
            count++;
        }
    }
    console.log(`Number of vowels in "${rndInput.value}": ${count}`);
    vowelsResult.innerHTML += `Number of vowels in "${rndInput.value}" is: ${count}`
};

resultBtn.addEventListener("click", () => {
    let userInput = rndInput.value;
    printVowels(userInput);
})