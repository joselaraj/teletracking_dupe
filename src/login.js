//get the user information from the local storage

// Add event listener to the form
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

//get the values from the input fields
const username = document.getElementById("username").value; 
const password = document.getElementById("password").value; 

//store the data
console.log("Username:", username);
console.log("Password:",password); 

localStorage.setItem("Username:", username);
localStorage.setItem("Password:",password);});
