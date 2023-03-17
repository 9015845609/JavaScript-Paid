const message = "Hello";
const displayElement = document.querySelector("#msg");

const gmButton = document.querySelector("#gm-btn");
gmButton.addEventListener('click', () => {
    displayElement.textContent = "Good Morning";
})

const gaButton = document.querySelector("#ga-btn");
gaButton.addEventListener('click', () => {
    displayElement.textContent = "Good Afternoon";
})

const geButton = document.querySelector("#ge-btn");
geButton.addEventListener('click', () => {
    displayElement.textContent = "Good Evening";
})
