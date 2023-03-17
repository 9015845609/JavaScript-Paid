console.log(new Date().toLocaleTimeString());
const greet = () => {
    console.log(`Hello Iam from greet ${new Date().toLocaleTimeString()}`);
};

const intervalId = setInterval(() => {
    greet();
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 5000)
