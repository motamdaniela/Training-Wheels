import User from "./models/userModel.js"

let Rank = 0

const signUpBtn = document.querySelector("#signUpBtn");

signUpBtn.addEventListener("click",()=>{
    let username = document.querySelector("#username");
    let name = document.querySelector("#name");
    let pass = document.querySelector("#pass");
    let passCheck = document.querySelector("#passCheck");
    let email = document.querySelector("#email");
    let sex = document.querySelector("#sex");
    let bday = document.querySelector("#bday");
    let place = ''
    let photo = '../media/images/default.svg'
    let ranking = 0 
    let progress = 0
    let points = 0
    let clues = 0
    let book = {}

    let newUser = new User(username, type,  password, name, email, sex, bday, place, photo, ranking, progress, points,clues, book)

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