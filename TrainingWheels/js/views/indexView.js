import * as User from "../models/userModel.js";

function pageView(){
    let result=`
    `
    if (User.isLogged()){
        result=`
        `
    }
    document.querySelector('#content').innerHTML += result;
}
pageView()