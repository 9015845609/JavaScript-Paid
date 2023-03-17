let count = 0;
const countElement = document.querySelector("#count-element");

const increment = () => {
    count++;
    countElement.textContent = count.toString();
};

const decrement = () => {
    count = count-- > 0 ? count-- : 0;
    countElement.textContent = count.toString();
};