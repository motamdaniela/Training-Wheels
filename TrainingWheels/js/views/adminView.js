import * as User from "../models/userModel.js";
import * as Video from "../models/videoModel.js";
import * as Level from "../models/levelModel.js";

User.init()
Video.init()
Level.init()

const newAdminBtn = document.querySelector("#createBtn")
newAdminBtn.addEventListener("click", (event) =>{
    event.preventDefault()
    let username = document.querySelector("#username").value;
    let type = 'admin';
    let name = document.querySelector("#name").value;
    let pass = document.querySelector("#pass").value;
    let passCheck = document.querySelector("#passCheck").value;
    let email = document.querySelector("#email").value;

    if (pass == passCheck) {
        try{
          if(displayMessage(User.add(username, type, pass, name, email))){
            User.add(username, type, pass, name, email);
            /*setTimeout(() => {
                location.reload();
              }, 1000);
            alert("User added successfully");  */
          }else{
            displayMessage(User.add(username, type, pass, name, email))
          }
        }catch(e) {
            setTimeout(() => {
                location.reload();
              }, 1100);
            const errorMessage = document.querySelector("#errorSlot");
            errorMessage.innerHTML = `<div class="alert alert-success" role="alert" id="errorSlot">Nova conta admin criada com sucesso!</div>`;
        }
      }else{
        displayMessage('Confirme que os campos da password coincidam')
      }

})

function displayMessage(message) {
    const errorMessage = document.querySelector("#errorSlot");
    errorMessage.innerHTML = `<div class="alert alert-danger" role="alert" id="errorSlot">${message}</div>`;
  }


function rankTable(){
    let result = ''
    let users= User.getUsers()
    console.log(users)
    
    let i=0
    for (let user of users) {
        if(user.type == 'user'){
            i+=1
            result += `
            <tr>
            <th scope="row">${i}</th>
            <td>${user.username}</td>
            <td>perguntas</td>
            <td><button id="blockBtn" type="button" class="btn btn-danger">Bloquear</button>
            <button id="removeBtn" type="button" class="btn btn-danger">Remover</button></td>
          </tr>`
        }
    }
    
    document.querySelector('#rankbody').innerHTML += result;
    
}
rankTable()

const nivel = document.querySelector("#addNivel")
nivel.addEventListener("click", (event) =>{
    event.preventDefault()
    console.log('olaa')
    let nome=document.querySelector("#levelName").value;
    console.log('olaaaaa')
    Level.add(nome)
    addNivel(nome)
})

function addNivel(nome){
    let result = ''
    let levels=Level.getLevels()
    let i=0
    for (let level of levels) {
        i+=1
        if(nome==level.name){
        result += `
        <tr>
            <th scope="row">${i}</th>
            <th>${level.name}</th>
            <td><button id="addLicao" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#licaoModal">Add lição</button>
            <button id="addLicao" type="button" class="btn btn-danger">Remover lição</button></td>
        </tr>
            `
        }
        
    }
    document.querySelector('#lessonbody').innerHTML += result;

}

function renderNivel() {
    let result = ''
    console.log('olaa2')
    let levels=Level.getLevels()
    console.log('olaa3')
    
    let i=0
    for (let level of levels) {
        i+=1
        result += `
        <tr>
            <th scope="row">${i}</th>
            <th>${level.name}</th>
            <td><button id="addLicao" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#licaoModal">Add lição</button>
            <button id="addLicao" type="button" class="btn btn-danger">Remover lição</button></td>
        </tr>
            `
    }

    document.querySelector('#lessonbody').innerHTML += result;
    
}

renderNivel()




/*
- bloquear users
- adicionar/remover nível: -> licao(video/pergunta/stickers...)
*/