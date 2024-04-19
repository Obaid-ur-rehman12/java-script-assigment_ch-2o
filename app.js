// Q o 1

// function displayProperties() {

//     var number = parseInt(document.getElementById('number').value);


//     if (isNaN(number) || number <= 0) {
//         document.getElementById('result').innerHTML = "Please enter a positive integer.";
//         return;
//     }


//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);


//     document.getElementById('result').innerHTML = `
//         <p>a. Number: ${number}</p>
//         <p>b. Round off value: ${roundValue}</p>
//         <p>c. Floor value: ${floorValue}</p>
//         <p>d. Ceil value: ${ceilValue}</p>
//     `;
// }


// Q no 2


// function displayProperties() {

//     var number = parseFloat(document.getElementById('number').value);


//     var roundValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     document.getElementById('result').innerHTML = `
//         <p>a. Number: ${number}</p>
//         <p>b. Round off value: ${roundValue}</p>
//         <p>c. Floor value: ${floorValue}</p>
//         <p>d. Ceil value: ${ceilValue}</p>
//     `;
// }


// Q no 3

// function displayAbsoluteValue() {

//     var number = parseFloat(document.getElementById('number').value);


//     var absoluteValue = Math.abs(number);


//     document.getElementById('result').innerHTML = `The absolute value of ${number} is ${absoluteValue}.`;
// }


// Q no 4

// function rollDice() {

//     var diceValue = Math.floor(Math.random() * 6) + 1;


//     document.getElementById('result').innerHTML = `The dice rolled ${diceValue}.`;
// }


// Q no 5

// function tossCoin() {

//     var randomNumber = Math.random();


//     var coinValue = (randomNumber < 0.5) ? 'Heads' : 'Tails';


//     document.getElementById('result').innerHTML = `The coin landed on ${coinValue}.`;
// }


// Q no 6


// function generateRandomNumber() {

//     var randomNumber = Math.floor(Math.random() * 100) + 1;


//     document.getElementById('result').innerHTML = `Random number: ${randomNumber}`;
// }


// Q no 7


// function displayWeight() {

//     var userInput = document.getElementById('weightInput').value.trim();


//     var weightInKgs = parseFloat(userInput);

//     if (isNaN(weightInKgs)) {

//         var match = userInput.match(/^\s*(\d+(\.\d+)?)\s*(kg|kilograms|kgs)?\s*$/i);
//         if (match && match[1]) {
//             weightInKgs = parseFloat(match[1]);
//         } else {
//             document.getElementById('result').innerHTML = "Invalid input. Please enter weight in kgs.";
//             return;
//         }
//     }


//     document.getElementById('result').innerHTML = `Your weight is ${weightInKgs} kgs.`;
// }