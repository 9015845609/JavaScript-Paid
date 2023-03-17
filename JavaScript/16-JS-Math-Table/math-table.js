const numberInputElement = document.querySelector("#req-number");
const rangeElement = document.querySelector("#multiplier");
const initialNumberElement = document.querySelector("#number");
const multiplierElement = document.querySelector("#multi");
const resultElement = document.querySelector("#result");

// input event on number element
numberInputElement.addEventListener('input', (event) => {
    const enteredNumber = event.target.value;
    if (enteredNumber === "") {
        initialNumberElement.textContent = "1";
    } else {
        initialNumberElement.textContent = enteredNumber;
    }
    calculate();
});

// input event on range selector
rangeElement.addEventListener('input', (event) => {
    const selectedNumber = event.target.value;
    multiplierElement.textContent = selectedNumber;
    calculate();
});

const calculate = () => {
    const initialNumber = Number(initialNumberElement.textContent);
    const multiplier = Number(multiplierElement.textContent);
    const result = initialNumber * multiplier;
    resultElement.textContent = result.toString()
};