import * as User from "../models/userModel.js";

let logout = document.querySelector("#log-out");

User.init()

logout.addEventListener("click", () =>{
    User.logout();
    setTimeout(() => {
      location.replace("index.html");
    }, 1000);

})

function show(){
  let result = ''
  let user= User.getUserLogged()
  console.log(user)
  let sexo=''
  if(user.sex=='f'){
    sexo='feminino'
  }else if(user.sex=='m'){
    sexo='masculino'
  }else{
    sexo='não especificado'
  }

  result+=`<img src="${user.photo}" id="profilepic">
  <h4>${user.name}</h4>
  <fieldset id="campos">
    <h5>username</h5>
    <p>${user.username}</p>
    <h5>email</h5>
    <p>${user.email}</p>
    <h5>data de nascimento</h5>
    <p>${user.bday}</p>
    <h5>sexo</h5>
    <p>${sexo}</p>
    <h5>cidade</h5>
    <p>${user.place}</p>
    </fieldset>`
  
  
  let edit = document.querySelector("#edit");

  edit.addEventListener('click',function(){
    result+=`
    <form class="form">
          <h5>username</h5>
          <input type="text" class="form-control" id="user" placeholder="name@example.com" value="coiso">
          <h5>email</h5>
          <input type="text" class="form-control" id="email" placeholder="name@example.com" value="em">
          <h5>data de nascimento</h5>
          <input type="text" class="form-control" id="bday" placeholder="name@example.com" value="3/#>
          <h5>sexo</h5>
          <input type="text" class="form-control" id="sex" placeholder="name@example.com" value="test@example.com">
          <h5>cidade</h5>
          <input type="text" class="form-control" id="city" placeholder="name@example.com" value="test@example.com">
        </form>`
  })
  document.querySelector('#coisasPerfil').innerHTML = result;
}
show()

