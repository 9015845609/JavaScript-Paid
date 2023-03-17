const printTriangleOne = (str) => {
    let result = "";
    for (let i = 0; i <= str.length - 1; i++) {
        result += `${str.substring(0, str.length - i)} \n`;
    }
    return result;
};

const printTriangleTwo = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += `${str.substring(0, str.length - i)} \n`;
    }
    return result;
};

const inputOneElement = document.querySelector("#input-one");
const displayOneElement = document.querySelector("#display-one");
inputOneElement.addEventListener('input', (event) => {
    displayOneElement.textContent = printTriangleOne(event.target.value);
});

const inputTwoElement = document.querySelector("#input-two");
const displayTwoElement = document.querySelector("#display-two");
inputTwoElement.addEventListener('input', (event) => {
    displayTwoElement.textContent = printTriangleTwo(event.target.value);
});

