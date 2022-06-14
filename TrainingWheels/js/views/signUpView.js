import * as User from "../models/userModel.js";
User.init()

const signUpBtn = document.querySelector("#signUpBtn");

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
      if(displayMessage(User.add(username, type, pass, name, email, sex, bday)) == true){
      }else{
        displayMessage(User.add(username, type, pass, name, email, sex, bday))
      }
      // Wait 1 second before reloading, so the user can see the login success message
      // setTimeout(() => {
      //   location.replace("../index.html");
      // }, 1000);
    }catch(e) {
      User.add(username, type, pass, name, email, sex, bday);
      User.login(username,pass)
         setTimeout(() => {
           location.replace("../index.html");
         }, 1000);
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