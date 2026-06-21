// // document.getElementById("shehab").innerHTML="Hello developer";


// // document.getElementById("check").innerText="Go Ahead";

// // function greet(){
// //     //code block
// //     console.log(" Hello My Dear");
// // }
// // greet();

// // function expression

// // const calculate = function(number){
// //     return number*number;

// // }
// // // console.log(calculate(5)+10);

// // // calculator
// // // State variables to hold calculator memory
// // let currentInput = '';
// // let previousInput = '';
// // let activeOperator = null;
// // let resetDisplay = false;

// // const display = document.getElementById('display');

// // // Appends numbers to the display safely
// // function appendNumber(number) {
// //     if (resetDisplay) {
// //         currentInput = '';
// //         resetDisplay = false;
// //     }
// //     // Prevent typing multiple leading zeros
// //     if (currentInput === '0' && number === '0') return;
// //     if (currentInput === '0' && number !== '0') currentInput = '';
    
// //     currentInput += number;
// //     updateDisplay(currentInput);
// // }

// // // Controls decimal separation formatting rules
// // function appendDecimal() {
// //     if (resetDisplay) {
// //         currentInput = '0';
// //         resetDisplay = false;
// //     }
// //     // Ensure numbers only container a single decimal tracker
// //     if (!currentInput.includes('.')) {
// //         if (currentInput === '') currentInput = '0';
// //         currentInput += '.';
// //         updateDisplay(currentInput);
// //     }
// // }

// // // Caches operation status commands
// // function appendOperator(operator) {
// //     if (currentInput === '' && previousInput === '') return;
    
// //     if (currentInput !== '' && previousInput !== '') {
// //         calculate();
// //     }
    
// //     activeOperator = operator;
// //     previousInput = currentInput !== '' ? currentInput : previousInput;
// //     resetDisplay = true;
// // }

// // // Executes basic arithmetic without eval() risks
// // function calculate() {
// //     if (activeOperator === null || resetDisplay || currentInput === '') return;
    
// //     let result;
// //     const prev = parseFloat(previousInput);
// //     const current = parseFloat(currentInput);
    
// //     if (isNaN(prev) || isNaN(current)) return;

// //     switch (activeOperator) {
// //         case '+':
// //             result = prev + current;
// //             break;
// //         case '-':
// //             result = prev - current;
// //             break;
// //         case '*':
// //             result = prev * current;
// //             break;
// //         case '/':
// //             if (current === 0) {
// //                 updateDisplay("Error");
// //                 clearMemory();
// //                 return;
// //             }
// //             result = prev / current;
// //             break;
// //         default:
// //             return;
// //     }
    
// //     // Clean trailing floats securely 
// //     currentInput = Math.round(result * 100000000) / 100000000;
// //     activeOperator = null;
// //     previousInput = '';
// //     resetDisplay = true;
// //     updateDisplay(currentInput);
// // }

// // Hard resets current interface storage references
// // function clearDisplay() {
// //     clearMemory();
// //     updateDisplay('0');
// // }

// // function clearMemory() {
//     currentInput = '';
//     previousInput = '';
//     activeOperator = null;
//     resetDisplay = false;
// // }

// // // function updateDisplay(value) {
// // //     display.value = value;
// // }
// // empty arrey
// // const arrey = [];
// // const object = {};
// // // array ex
// // const arrey = ["A", "B", "C"];
// // const log(array);


// // const object = {
// //     firstName:"md",
// //     lastName:"Zim",
// //     department:"web Development"
// // }


// loop= for
// for(let i=0;i<=10; i++){
//     console.log(`${i}.shehab`);
// }


// loop=while

let i=0;
while(i<=10){
    console.log(`${i}.shehab`);
    i++;
}

