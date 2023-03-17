/**
 * let prepare a coffee
 * 1. Get milk from Shop
 * 2. Boil milk with Sugar
 * 3. Add Coffee Powder
 */

const getMilkFromShop = (boilMilk, addCoffeePowder) => {
    setTimeout(() => {
        console.log("1. Get milk from Shop")
        boilMilk(addCoffeePowder);
    }, 3000);
};

const boilMilk = (addCoffeePowder) => {
    setTimeout(() => {
        console.log("2. Boil milk with Sugar");
        addCoffeePowder();
    }, 1000);
};

const addCoffeePowder = () => {
    setTimeout(() => {
        console.log("3. Add Coffee Powder")
    }, 2000);
};

const makeCoffee = () => {
    getMilkFromShop(boilMilk, addCoffeePowder);
};
makeCoffee();