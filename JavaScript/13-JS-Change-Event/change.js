const langSelectElement = document.querySelector("#lang-select");
const displayElement = document.querySelector("#lang-option");
langSelectElement.addEventListener('change', (event) => {
    displayElement.textContent = event.target.value;
});
