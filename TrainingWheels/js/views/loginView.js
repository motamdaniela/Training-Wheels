import * as User from "../models/userModel.js";

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    try {
        User.login(username, password);
        
        console.log("funciona");
        // Wait 1 second before reloading, so the user can see the login success message
        /*setTimeout(() => {
          location.replace("../index.html");
        }, 1000);*/
      } catch (e) {
        displayMessage('User.login(username, password)');
      }

})

function displayMessage(message) {
  const errorMessage = document.querySelector("#errorSlot");
  errorMessage.innerHTML = `<div class="alert alert-danger" role="alert" id="errorSlot">${message}</div>`;
}