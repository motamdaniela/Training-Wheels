import * as User from "../models/UserModel.js";


function rankTable(){
    let result = ''
    let users= User.getUsers()
    console.log(users)
    
    let i=1
    for (let user of Object.keys(obj)) {
        var 
        i+=1
        result += `
        <tr>
        <th scope="row">${i}</th>
        <td>${user.uername}</td>
        <td>perguntas</td>
        <td><button id="blockBtn" type="button" class="btn btn-danger">Bloquear</button>
        <button id="removeBtn" type="button" class="btn btn-danger">Remover</button></td>
      </tr>
            `
    }

    document.querySelector('tbody').innerHTML += result;
}
rankTable()
/*
- bloquear users
- adicionar/remover nível: -> licao(video/pergunta/stickers...)
*/