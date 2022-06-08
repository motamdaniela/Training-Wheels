import * as User from "../models/userModel.js";
import * as Video from "../models/videoModel.js";

User.init()
Video.init()


function rankTable(){
    let result = ''
    let users= User.getUsers()
    console.log(users)
    
    let i=0
    for (let user of users) {
        i+=1
        result += `
        <tr>
        <th scope="row">${i}</th>
        <td>${user.username}</td>
        <td>perguntas</td>
        <td><button id="blockBtn" type="button" class="btn btn-danger">Bloquear</button>
        <button id="removeBtn" type="button" class="btn btn-danger">Remover</button></td>
      </tr>
            `
    }

    document.querySelector('#rankbody').innerHTML += result;
}
rankTable()

function addNivel() {
    
}



/*
- bloquear users
- adicionar/remover nível: -> licao(video/pergunta/stickers...)
*/