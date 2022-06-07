import * as User from "../models/userModel.js";

const logout = document.querySelector("#log-out");

User.init()

logout.addEventListener("click", (event) =>{
    event.preventDefault();
    User.logout()
    if(coise==true){
        setTimeout(() => {
          location.replace("../index.html");
        }, 1000);
    }

})