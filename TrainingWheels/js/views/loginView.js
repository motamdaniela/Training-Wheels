import * as User from "../models/userModel.js";

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("submit", () =>{
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    try {
        User.login(username, password);
        
        console.log("funciona");
        // Wait 1 second before reloading, so the user can see the login success message
        setTimeout(() => {
          location.replace("../index.html");
        }, 1000);
      } catch (e) {
        displayMessage("msgRegister", e.message, "danger");
      }

})