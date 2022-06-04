import * as User from "../models/userModel.js";

const signUpBtn = document.querySelector("#signUpBtn");

User.init()

signUpBtn.addEventListener("click",(event)=>{
  event.preventDefault()
  let username = document.querySelector("#username").value;
  let type = 'user';
  let name = document.querySelector("#name").value;
  let pass = document.querySelector("#pass").value;
  let passCheck = document.querySelector("#passCheck").value;
  let email = document.querySelector("#email").value;
  let sex = document.querySelector("#sex").value;
  let bday = document.querySelector("#bday").value;
  
  try {
      if (pass == passCheck) {
          User.add(username, type, pass, name, email, sex, bday);
          alert("usar provavelemnte cirado")
          // Wait 1 second before reloading, so the user can see the login success message
          /* setTimeout(() => {
            location.replace(".../index.html");
          }, 1000); */
      }
    } catch (e) {
      alert('boa dia')
    }
    
  })

function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}


/*

// Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.replace(".../index.html");
      }, 1000);



    */