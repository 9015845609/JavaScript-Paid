/**
 * let prepare a coffee
 * 1. Get milk from Shop
 * 2. Boil milk with Sugar
 * 3. Add Coffee Powder
 */
const getMilkFromShop = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isSuccess = true;
        if (isSuccess) {
            resolve("1. Get milk from Shop");
        } else {
            reject("getMilkFromShop is Failed");
        }
    }, 3000);
});

const boilMilk = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isSuccess = true;
        if (isSuccess) {
            resolve("2. Boil milk with Sugar");
        } else {
            reject("boilMilk is Failed");
        }
    }, 1000);
});

const addCoffeePowder = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isSuccess = true;
        if (isSuccess) {
            resolve("3. Add Coffee Powder");
        } else {
            reject("addCoffeePowder is Failed");
        }
    }, 2000);
});

const makeCoffee = () => {
    getMilkFromShop.then((msg) => {
        console.log(msg);
        boilMilk.then((msg) => {
            console.log(msg);
            addCoffeePowder.then((msg) => {
                console.log(msg);
            }).catch((error) => {
                console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.error(error);
    });
};
makeCoffee();