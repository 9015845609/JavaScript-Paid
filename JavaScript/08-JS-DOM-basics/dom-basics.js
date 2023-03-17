console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title = "Iam changed";

// access the html elements
/**
 * document.getElementById();
 * document.getElementByTagName();
 * document.getElementByClassName();
 * document.querySelector()
 */
const navTag = document.querySelector("nav");
console.log(navTag);

const navTagUsingClass = document.querySelector(".navbar");
console.log(navTagUsingClass);

const navTagUsingId = document.querySelector("#nav-bar");
console.log(navTagUsingId);

// change the styles
const h1Element = document.querySelector("h1");
console.log(h1Element);

h1Element.style.backgroundColor = "orange";
h1Element.style.color = "white";
h1Element.style.textAlign = "center";
h1Element.style.margin = "10px";
h1Element.style.padding = "10px";

// update the content
h1Element.innerText = "Good Morning";

// update the html content
const divTag = document.querySelector("#text-div");
const htmlString = `<span style="color: red">Welcome to DOM Manipulation</span>`;
divTag.innerHTML = htmlString;

// update the attributes
const imageTag = document.querySelector('#image');
const imageAddress = imageTag.getAttribute('src');
console.log(imageAddress);
imageTag.setAttribute('src', "../images/card_2.jpg");
imageTag.setAttribute('width', "300");
imageTag.setAttribute('height', "200");

// Forms
const usernameTag = document.querySelector("#username");
usernameTag.setAttribute('type', 'range');

// data to table
const userList = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    }
];

const displayTableData = () => {
    const tableBodyElement = document.querySelector('#table-body');
    let tableRows = "";
    for (let user of userList) {
        tableRows += `<tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.address.suite}</td>
                        <td>${user.address.street}</td>
                        <td>${user.address.city}</td>
                      </tr>\n`;
    }
    tableBodyElement.innerHTML = tableRows;
};
displayTableData();













