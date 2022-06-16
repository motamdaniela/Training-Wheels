import * as User from "../models/userModel.js";
import * as Video from "../models/videoModel.js";
import * as Level from "../models/levelModel.js";
import * as Tag from "../models/tagsModel.js";

User.init()
Video.init()
Level.init()
Tag.init()



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

let levels=Level.getLevels()
let resultado=''
for(let level of levels){
  resultado=`
  <option value="${level.name}">${level.name}</option>
  `
  document.querySelector("#escolheNivel").innerHTML+=resultado
}

let videos=Video.getVideos()
let resultadoPopup=''
for(let video of videos){
  resultadoPopup=`
  <option value="${video.name}">${video.name}</option>
  `
  document.querySelector("#escolheVideoPopup").innerHTML+=resultadoPopup
}



  const load = document.querySelector("#load")
  load.addEventListener("click", (event) =>{
      let result = ''
      event.preventDefault()
      let tipo=document.querySelector('#tipo').value
      if(tipo=='video'){
        result=`
        <div id="maisTags">
        <div class="input-group mb-3">
                <input type="text" class="form-control" id="nomeVideo" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
                <input type="file" class="form-control" id="linkVideo">
              </div>
              <div class="formTags">
                <div class="input-group mb-3">
                  <input type="text" class="form-control tagVideo" placeholder="Tag" aria-label="Tag" aria-describedby="basic-addon1">
                  <input type="text" class="form-control nomeTagVideo" placeholder="Nome Tag" aria-label="Nome Tag" aria-describedby="basic-addon1">              
                </div>
              </div>
        </div>
              <div class="input-group mb-3">
                <button id="addTag" type="button" class="btn btn-primary">+</button>
              </div>
        `
        document.querySelector('#formLicoes').innerHTML = result;
        let loadNew = document.querySelector("#addTag")
      loadNew.addEventListener("click", (event) =>{
        event.preventDefault()
        let mais = ''
        mais=`
      <div class="formTags">
        <div class="input-group mb-3">
          <input type="text" class="form-control tagVideo" placeholder="Tag" aria-label="Tag">
          <input type="text" class="form-control nomeTagVideo" placeholder="Nome Tag" aria-label="Nome Tag" >              
        </div>
      </div>
        `
        document.querySelector('#maisTags').innerHTML += mais;

      })

      }else{
        result=`
        <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Título" aria-label="Titulo" aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
                <select class="form-select" id='tipoPergunta' aria-label="Default select example">
                  <option selected>Escolha Multipla</option>
                  <option value="teste">Verdadeiro e Falso</option>
                </select>          
                <button id="loadPergunta" type="button" class="btn btn-primary">carregar</button>
              </div>
              <div id="formPerguntas">
                
              </div>
              <div class="input-group mb-3">
                  <button id="addPerg" type="button" class="btn btn-primary">+</button>
                </div>
        `
        document.querySelector('#formLicoes').innerHTML = result;
        let loadPergunta = document.querySelector("#loadPergunta")
        loadPergunta.addEventListener("click", (event) =>{
          event.preventDefault()
        let resultPerg = ''
        
        const tipoPerg=document.querySelector('#tipoPergunta').value
        if(tipoPerg=='Escolha Multipla'){
          resultPerg=`<div class="input-group mb-3">
          <input type="text" class="form-control perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control imgPerg" placeholder="Link Imagem" aria-label="Link Video" aria-describedby="basic-addon1">            
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
          `
        }else{
          resultPerg=`<div class="input-group mb-3">
          <input type="text" class="form-control perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control imgPerg" placeholder="Link Imagem" aria-label="Link Video" aria-describedby="basic-addon1">            
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
          `
        }
        document.querySelector('#formPerguntas').innerHTML += resultPerg;

        let addPerg = document.querySelector("#addPerg")
        addPerg.addEventListener("click", (event) =>{
          event.preventDefault()
          let maisPerg = ''
          
          let tipoPerg2=document.querySelector('#tipoPergunta').value
          if(tipoPerg2=='Escolha Multipla'){
            maisPerg=`<div class="input-group mb-3">
          <input type="text" class="form-control perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control imgPerg" placeholder="Link Imagem" aria-label="Link Video" aria-describedby="basic-addon1">            
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
          `
          }else{
            maisPerg=`<div class="input-group mb-3">
          <input type="text" class="form-control perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control imgPerg" placeholder="Link Imagem" aria-label="Link Video" aria-describedby="basic-addon1">            
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
          <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
        </div>
          `
          }

          document.querySelector('#formPerguntas').innerHTML += maisPerg;
        })


      })
      }    
  })


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
            <td><button type="button" class="btn btn-danger blockBtn">Bloquear</button>
            <button type="button" class="btn btn-danger removeBtn">Remover</button></td>
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



const licao = document.querySelector("#addLicaoNivel")
licao.addEventListener("click", (event) =>{
    event.preventDefault()
    let tipo=document.querySelector("#tipo").value;
    if(tipo=='video'){
      let nome=document.querySelector("#nomeVideo").value;
      let link=document.querySelector("#linkVideo").value;
      let nomeNivel=document.querySelector("#escolheNivel").value;
      let result=link.substring(12)
      console.log(result)
      //C:\fakepath\
      let linkCompleto='../media/videos/'+result
      console.log(linkCompleto)
      let NomeTags=[]
      document.querySelectorAll(".nomeTagVideo").forEach(eldom => NomeTags.push(eldom.value))
      console.log(NomeTags)
      let Tags=[]
      document.querySelectorAll(".tagVideo").forEach(eldom => Tags.push(eldom.value))
      console.log(Tags)
      console.log(nome)
      console.log(nomeNivel)
      let i=0
      Tags.forEach(tag=>{
        Tag.add(linkCompleto,tag,NomeTags[i])
        i+=1
      })
      Video.add(linkCompleto,nome,nomeNivel)
      location.reload()
    }
})
function addLesson(){
  let result = ''
  let videos=Video.getVideos()
  let tags=Tag.getTags()
  let i=0
  for (let video of videos) {
    let tag = tags.find(tag => tag.video === video.url);
    if(tag.video === video.url ){
      result += `
      <tr>
          <th scope="row">${video.level}</th>
          <td>video -> ${video.name}</td>
          <td>
          <button  type="button" class="btn btn-danger removeLicao">Remover tag</button></td>
      </tr>
          `

    }
      
  }
  document.querySelector('#lessonbody').innerHTML += result;
}
addLesson()

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
            <td>
            <button  type="button" class="btn btn-danger removeLicao">Remover lição</button></td>
        </tr>
            `
        }
        
    }
    document.querySelector('#lessonbody').innerHTML += result;

}

let addBtns=document.querySelectorAll('.addLicao')
for (let addBtn of addBtns){
  addBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    let idiota= this.parentElement.previousElementSibling.innerHTML;
    $("#licaoModal").modal('show');
    
    console.log(idiota)
  })
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
            <td>
            <button  type="button" class="btn btn-danger">Remover lição</button></td>
        </tr>
            `
    }

    document.querySelector('#lessonbody').innerHTML += result;
    
}

renderNivel()
