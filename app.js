const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(){
    display.textContent ="0";
    numStore.number1 = 0;
    numStore.number2 = 0;
    numStore.operator = null;

}

const display = document.querySelector(".display");

function add(a,b){
    numStore.operator = add;
    display.textContent = parseInt(a) + parseInt(b);
}

let numStore={
    number1: 0,
    number2: 0,
    operator: null
};

function subtract(a,b){
    display.textContent = parseInt(a) - parseInt(b);
}

function multiply(a,b){
    display.textContent = parseInt(a) * parseInt(b);
}

function divide(a,b){
    display.textContent = parseInt(a) / parseInt(b);

}

function operate(num1, operator, num2){
    return operator(num1, num2);
}

const digitPressed = document.querySelectorAll(".digitBtn");

digitPressed.forEach(btn => {
    btn.addEventListener('click', (e) => {
       if(numStore.operator == null){
        numStore.number1 = numStore.number1 += e.target.value;
       } else if(numStore.number2 == 0){
        numStore.number2 = numStore.number2 += e.target.value;
       }
    });
 });

 const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function(e){
    numStore.operator = e.target.value;
})


const equalButton = document.querySelector(".equalsBtn");
equalButton.addEventListener("click", function(){
    numStore.operator(numStore.number1, numStore.number2);
    numStore.number1 = 0;
    numStore.number2 = 0;
    numStore.operator = null;
});

