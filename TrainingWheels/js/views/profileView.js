import * as User from "../models/userModel.js";

let logout = document.querySelector("#log-out");

User.init()

logout.addEventListener("click", () =>{
    User.logout();
    setTimeout(() => {
      location.replace("../index.html");
    }, 1000);

})