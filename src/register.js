document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

//get the values from the input fields
const name = document.getElementById("full-name").value; 
const role = document.getElementById("role").value;
const employee_id = document.getElementById("employee-id").value;
const password = document.getElementById("password").value; 

//store the data
console.log("Fulle Name:", name);
console.log("Role:",role);
console.log("Employee ID:",employee_id);
console.log("Password:",password); 


localStorage.setItem("Full Name:", name);
localStorage.setItem("Role:",role);
localStorage.setItem("Employee ID:",employee_id);
localStorage.setItem("Password:",password); 
});