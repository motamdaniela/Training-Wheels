import * as User from "../models/userModel.js";

const signUpBtn = document.querySelector("#signUpBtn");


signUpBtn.addEventListener("click",()=>{
  let username = document.querySelector("#username");
  let type = 'user';
  let name = document.querySelector("#name");
  let pass = document.querySelector("#pass");
  let passCheck = document.querySelector("#passCheck");
  let email = document.querySelector("#email");
  let sex = document.querySelector("#sex");
  let bday = document.querySelector("#bday");
  
  if (pass.value !== passCheck.value) {
    console.log('passe');         
  }
    
})

/*

// Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.replace(".../index.html");
      }, 1000);

  try {
      if (pass !== passCheck) {
          console.log('passe');         
      }
      User.add(username, type, pass, name, email, sex, bday);
      console.log('olaa')
      displayMessage(
        "msgRegister",
        "User registered with success!",
        "success"
      );
      // Wait 1 second before reloading, so the user can see the login success message
      setTimeout(() => {
        location.replace(".../index.html");
      }, 1000);
    } catch (e) {
      displayMessage("msgRegister", e.message, "danger");
    }
    
})


    */