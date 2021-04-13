let operatorStorage = null;
let firstDigit = 0;
let secondDigit = 0;

const display = document.querySelector(".display");
display.textContent = firstDigit;

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(){
    firstDigit = 0;
    secondDigit = 0;
    operatorStorage = null;
    display.textContent = firstDigit;

}

function add(a,b){
    return parseInt(a) + parseInt(b);
}

function subtract(a,b){
    return parseInt(a) - parseInt(b);
}

function multiply(a,b){
    return parseInt(a) * parseInt(b);
}

function divide(a,b){
    return parseInt(a) / parseInt(b);
}

const digitPressed = document.querySelectorAll(".digitBtn");
digitPressed.forEach(btn => {
    btn.addEventListener('click', (e) => {
       if(firstDigit == 0 | operatorStorage == null){
        firstDigit += parseInt(e.target.value);
        display.textContent += parseInt(e.target.value);
       } else if(operatorStorage != null && firstDigit != 0){
        secondDigit += parseInt(e.target.value);
        display.textContent += parseInt(e.target.value);
       }
    });
 });

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function(){
    operatorStorage = add;
    display.textContent = `${firstDigit} + `
})

const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click", function(){
    operatorStorage = subtract;
    display.textContent = `${firstDigit} - `
})

const multiBtn = document.querySelector(".multiBtn");
multiBtn.addEventListener("click", function(){
    operatorStorage = multiply;
    display.textContent = `${firstDigit} * `
})

const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener("click", function(){
    operatorStorage = divide;
    display.textContent = `${firstDigit} / `
})


function operate(num1, operator, num2){
    display.textContent = operator(num1, num2);
}

const equalButton = document.querySelector(".equalsBtn");
equalButton.addEventListener("click", function(){
    if(firstDigit == 0){
        return;
    }
    operate(firstDigit, operatorStorage, secondDigit);
    firstDigit = parseInt(display.textContent);
    secondDigit = 0;
});






