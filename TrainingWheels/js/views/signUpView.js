import * as User from "../models/userModel.js"

let Rank = 0

const signUpBtn = document.querySelector("#signUpBtn");

signUpBtn.addEventListener("submit",(event)=>{
    
    let username = document.querySelector("#username");
    let name = document.querySelector("#name");
    let pass = document.querySelector("#pass");
    let passCheck = document.querySelector("#passCheck");
    let email = document.querySelector("#email");
    let sex = document.querySelector("#sex");
    let bday = document.querySelector("#bday");
    
    try {
        if (pass.value !== passCheck.value) {
            console.log('naooo')
            throw Error("Password and Confirm Password are not equal");
          
        }
        User.add(username.value, 'user',pass.value, name.value,email.value, sex.value,bday.value);
        console.log('olaa')
        displayMessage(
          "msgRegister",
          "User registered with success!",
          "success"
        );
        // Wait 1 second before reloading, so the user can see the login success message
        setTimeout(() => {
          location.reload();
        }, 1000);
      } catch (e) {
        displayMessage("msgRegister", e.message, "danger");
      }

      event.preventDefault();
})


/*
 #username = ''
    #type = ''
    #password = ''
    #name = ''
    #email = ''
    #sex = ''
    #bday = ''
    #place = ''
    #photo = ''
    #ranking = 0 
    #progress = 0
    #points = 0
    #clues = 0
    #book = {}
*/