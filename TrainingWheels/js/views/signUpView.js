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
  
  if (pass == passCheck) {
    try{

      User.add(username, type, pass, name, email, sex, bday);
      displayMessage(User.add(username, type, pass, name, email, sex, bday))
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.replace("../index.html");
      }, 1000);
    }catch(e) {
      console.log('outro erro besides pass!=')
    }
  }else{
    displayMessage('Confirme que os campos da password coincidam')
  }
    
  })

function displayMessage(message) {
  const errorMessage = document.querySelector("#errorSlot");
  errorMessage.innerHTML = `<div class="alert alert-danger" role="alert" id="errorSlot">${message}</div>`;
}


/*

// Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.replace(".../index.html");
      }, 1000);



    */