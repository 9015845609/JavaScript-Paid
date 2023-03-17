/*console.log("Person 1");
console.log("Person 2");
console.log("Person 3");
setTimeout(() => {
    console.log("Person 4");
}, 3000);
console.log("Person 5");
console.log("Person 6");
console.log("Person 7");*/

// callbacks
const sum = (a, b) => {
    return a + b;
};
const mul = (a, b) => {
    return a * b;
};

const sub = (a, b) => {
    return a - b;
};

const calculate = (a, b, callbackOne, callbackTwo, callbackThree) => {
    const result = callbackOne(a, b) + callbackTwo(a, b) + callbackThree(a, b); // 30 + 200 - 10
    console.log(result);
};
calculate(10, 20, sum, mul, sub);



