/*
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await getAllUsersFromServer();
        displayUsers(users);
    } catch (e) {
        console.error(e);
    }
})
*/

const theButton = document.querySelector("#get-user-btn");
theButton.addEventListener('click', async () => {
    try {
        const response = await getAllUsersFromServer();
        const users = response.data;
        displayUsers(users);
    } catch (e) {
        console.error(e);
    }
})

const getAllUsersFromServer = () => {
    const serverUrl = "https://jsonplaceholder.typicode.com/users";
    return axios.get(serverUrl);
};


const displayUsers = (users) => {
    const tableBodyElement = document.querySelector("#table-body");
    let tableRows = "";
    for (let user of users) {
        tableRows += `<tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.address.suite}</td>
                            <td>${user.address.street}</td>
                            <td>${user.address.city}</td>
                            <td>${user.address.zipcode}</td>
                       </tr>`;
    }
    tableBodyElement.innerHTML = tableRows;
};

