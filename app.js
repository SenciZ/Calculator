function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, num1, num2){
    operator(num1, num2);
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearResult);

function clearResult(){
    result.textContent ="";
}



const result = document.querySelector(".result");
