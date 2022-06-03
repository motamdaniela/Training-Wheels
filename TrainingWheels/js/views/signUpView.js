import * as User from "../models/userModel.js";

const signUpBtn = document.querySelector("#signUpBtn");

signUpBtn.addEventListener("click",()=>{
    let username = document.querySelector("#username").value;
    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    let passCheck = document.querySelector("#passCheck").value;
    let email = document.querySelector("#email").value;
    let sex = document.querySelector("#sex").value; //value=> f for fem m for male
    let bday = document.querySelector("#bday").value;
    
    try {
        if (pass !== passCheck) {
            console.log('passe')
            throw Error("Password and Confirm Password are not equal");          
        }
        User.add(username, 'user',pass, name, email, sex.value, bday);
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