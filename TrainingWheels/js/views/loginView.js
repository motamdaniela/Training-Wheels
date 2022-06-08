import * as User from "../models/userModel.js";

const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    alert(username, password);

    /*
    if (username === undefined){
      username = "";
      if (password === undefined){
        password = "";
      }
    }else if(password === undefined){
      password = "";
      if(username === undefined){
        username = "";
      }
    }
    */
    
    if (User.login(username, password)) {
      try{
        console.log("funciona")
        // Wait 1 second before reloading, so the user can see the login success message
        setTimeout(() => {
          location.replace("../index.html");
        }, 1000);
        // Wait 1 second before reloading, so the user can see the login success message
      }catch(e) {
        console.log('unknown error')
      }
    }else{
      displayMessage(User.login(username, password))
    }
})

function displayMessage(message) {
  const errorMessage = document.querySelector("#errorSlot");
  errorMessage.innerHTML = `<div class="alert alert-danger" role="alert" id="errorSlot">${message}</div>`;
}