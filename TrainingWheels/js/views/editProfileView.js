import * as User from "../models/userModel.js";

User.init()
let user= User.getUserLogged()

function show(){
    let result = ''
    
    let sexo=''
    if(user.sex=='f'){
      sexo='feminino'
    }else if(user.sex=='m'){
      sexo='masculino'
    }else{
      sexo='não especificado'
    }
  
    result+=`<img src="${user.photo}" id="profilepic">
    <div id="imgSelect">
      <img src="../media/images/default.svg" id="photoD" class="choosepfp">
      <img src="../media/images/photo1.svg" id="photo1" class="choosepfp">
      <img src="../media/images/photo2.svg" id="photo2" class="choosepfp">
      <img src="../media/images/photo3.svg" id="photo3" class="choosepfp">
      <img src="../media/images/photo4.svg" id="photo4" class="choosepfp">
      <img src="../media/images/photo5.svg" id="photo5" class="choosepfp">
      <img src="../media/images/photo6.svg" id="photo6" class="choosepfp">
    </div>
    <input type="text" class="form-control" id="name" placeholder="name@example.com" value="${user.name}">
    <fieldset id="campos">
      <h5>username</h5>
      <input type="text" class="form-control" id="user" placeholder="name@example.com" value="${user.username}">
      <h5>email</h5>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" value="${user.email}">
      <h5>data de nascimento</h5>
      <input type="date" class="form-control" id="bday" placeholder="name@example.com" value="${user.bday}">
      <h5>sexo</h5>
        <select class="form-select" aria-label="Default select example" id="sex" >
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

  let fotos=document.querySelectorAll(".choosepfp")
  fotos=Array.from(fotos)
  fotos.forEach(function(foto) {
    let src=foto.src
    let myArray = src.split("TrainingWheels");
    let result=myArray[1]
    let resul2=".."+result
    if(resul2==user.photo){
      foto.classList.add('pfpSelected')
    }
    foto.addEventListener("click",function(){
      let pic = document.querySelector(".pfpSelected")
      pic.classList.remove("pfpSelected")
     if(this.classList.contains("pfpSelected")){
        this.classList.remove("pfpSelected")
     }else{
      this.classList.add("pfpSelected")
     }
    })
  })

  let guardar = document.querySelector("#save");

  guardar.addEventListener('click',function(){
    let username = document.querySelector("#user").value;
    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let sex = document.querySelector("#sex").value
    let bday = document.querySelector("#bday").value;
    let place = document.querySelector("#place").value;
    let photo=document.querySelector(".pfpSelected").src
    let myArray = photo.split("TrainingWheels");
    let result=myArray[1]
    let result2=".."+result

    user.email = email
    user.name = nome
    user.username = username
    user.sex = sex
    user.bday = bday
    user.place = place
    user.photo=result2

    sessionStorage.setItem('loggedUser', JSON.stringify(user))

    User.attUserOnStorage(user)

    window.location.replace("./profile.html");
    
  })