"use strict";

//HTML Variables
const usersTableBody = document.querySelector("#usersTableBody");

//Functions
function loadUsersTable(users) {
  for (const user of users) {
    buildTableRow(user);
  }
}

function buildTableRow(user) {
  let row = usersTableBody.insertRow();

  let cell1 = row.insertCell();
  cell1.innerText = user.name;

  let cell2 = row.insertCell();
  cell2.innerText = user.username;

  let cell3 = row.insertCell();
  cell3.innerText = user.email;
}



function fetchAndDisplayUserData() {
  fetch("http://localhost:3000/users/")
    .then((response) => response.json())
    .then((users) => {
      loadUsersTable(users);
    });
}



//Associate Function to Event

//Initial Loading
fetchAndDisplayUserData();
