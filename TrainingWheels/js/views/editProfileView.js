import * as User from "../models/userModel.js";

User.init()
let user= User.getUserLogged()

function show(){
    let result = ''
    console.log(user)
    let sexo=''
    if(user.sex=='f'){
      sexo='feminino'
    }else if(user.sex=='m'){
      sexo='masculino'
    }else{
      sexo='não especificado'
    }
  
    result+=`<img src="${user.username}" id="profilepic">
    <input type="text" class="form-control" id="name" placeholder="name@example.com" value="${user.name}">
    <fieldset id="campos">
      <h5>username</h5>
      <input type="text" class="form-control" id="user" placeholder="name@example.com" value="${user.username}">
      <h5>email</h5>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" value="${user.email}">
      <h5>data de nascimento</h5>
      <input type="date" class="form-control" id="bday" placeholder="name@example.com" value="${user.bday}">
      <h5>sexo</h5>
        <select class="form-select" aria-label="Default select example" id="sex" slected="${user.sex}">
            <option value="f">Feminino</option>
            <option value="m">Masculino</option>
            <option value="x">Outro</option>
        </select>
      <h5>cidade</h5>
      <input type="text" class="form-control" id="place" placeholder="name@example.com" value="${user.place}">
      </fieldset>`
    
    document.querySelector('#coisasPerfil').innerHTML = result;
  }
  show()

  let guardar = document.querySelector("#save");

  guardar.addEventListener('click',function(){
    let username = document.querySelector("#user").value;
    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let sex = document.querySelector("#sex").value;
    let bday = document.querySelector("#bday").value;
    let place = document.querySelector("#place").value;

    user.email = email
    user.name = nome
    user.username = username
    user.sex = sex
    user.bday = bday
    user.place = place

    sessionStorage.setItem('loggedUser', JSON.stringify(user))

    User.attUserOnStorage(user)
    
    


  })