const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearResult);

const result = document.querySelector(".result");

function clearResult(){
    result.textContent ="";
}

function insertNumber(number){
    result.textContent = number;
}
const seven = document.querySelector(".seven");
seven.addEventListener("click", insertNumber(seven.textContent) );