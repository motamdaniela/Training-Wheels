import * as User from "../models/userModel.js";
import * as Video from "../models/videoModel.js";
import * as Level from "../models/levelModel.js";
import * as Tag from "../models/tagsModel.js";
import * as PopUp from "../models/popupModel.js";
import * as Test from "../models/testModel.js";
import * as Question from "../models/questionModel.js";

User.init()
Video.init()
Level.init()
Tag.init()
PopUp.init()
Test.init()
Question.init()

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

let testes=Test.getTests()
let resultadoTeste=''
for (let teste of testes) {
  resultadoTeste=`
  <option value="${teste.name}">${teste.name}</option>
  `
  document.querySelector("#escolherTeste").innerHTML+=resultadoTeste
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
              <input type="text" class="form-control" id="titulo" placeholder="Título" aria-label="Titulo" aria-describedby="basic-addon1">
            </div>
            <h4>Sticker</h4>
            <div class="input-group mb-3">
                <input type="file" class="form-control" id="linkStickerTest">            
              </div>
      `
      document.querySelector('#formLicoes').innerHTML = result;
    }    
})

const loadPerg = document.querySelector("#loadPergunta")
loadPerg.addEventListener("click", (event) =>{
    let result = ''
    event.preventDefault()
    const tipoPerg=document.querySelector('#tipoPergunta').value
      if(tipoPerg=='Escolha Multipla'){
        result=`<div class="input-group mb-3">
        <input type="text" class="form-control" id="perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
        <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">  
        <input type="text" class="form-control opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
      </div>
      <div class="input-group mb-3">
        <input type="number" class="form-control" id="pontosTeste" placeholder="Pontos a receber" aria-describedby="basic-addon1">
      </div>
        `
      }else{
        result=`<div class="input-group mb-3">
        <input type="text" class="form-control" id="perguntaTeste" placeholder="Pergunta" aria-label="Tag" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" id="opcao_certa" placeholder="Opção certa" aria-label="Link Video" aria-describedby="basic-addon1">  
        <input type="text" class="form-control" id="opcao" placeholder="Opção" aria-label="Link Video" aria-describedby="basic-addon1">          
      </div>
      <div class="input-group mb-3">
        <input type="number" class="form-control " id="pontosTeste" placeholder="Pontos a receber" aria-describedby="basic-addon1">
      </div>
        `
      }
      document.querySelector('#formPergunta').innerHTML = result;

})


function rankTable(){
  let nomes=rankingOrder()
  let result = ''
  console.log(nomes)
  console.log(2)
  let users= User.getUsers()
  console.log(users)
  let i=0
  for (let nome of nomes) {
        let user = users.find(user => nome.name === user.username);
        if(user.type == 'user'){
          i+=1
          if(nome.name==user.username ){
            result += `
          <tr>
          <th scope="row">${i}</th>
          <td>${user.username}</td>
          <td><i class="nav-icon" data-feather="check"></i> ${user.ranking[0]}<i class="nav-icon" data-feather="x"></i>${user.ranking[1]}</td>
          <td><button type="button" class="btn btn-danger blockBtn">Bloquear</button>
          <button type="button" class="btn btn-danger removeUser">Remover</button></td>
        </tr>`

          }
          
      }
  }
  
  document.querySelector('#rankbody').innerHTML += result;
    
}
rankTable()

function rankingOrder(){
  let array=[]
  let users=User.getUsers()
  for(let user of users){
    let respostasCertas= +user.ranking[0]
    let respostasErradas= +user.ranking[1]
    let total=respostasCertas+respostasErradas
    let conta
    if(total==0){
      conta=0
    }else{
      conta=respostasCertas/total
    }
    let coiso=user.username
    let idk={
      name:coiso,
      rank:conta

    }
    array.push(idk)
  }
  console.log(array)
  array.sort(function(a, b) { return (b.rank-a.rank);});
  console.log(array)

  return array

}



const nivel = document.querySelector("#addNivel")
nivel.addEventListener("click", (event) =>{
    event.preventDefault()
    console.log('olaa')
    let nome=document.querySelector("#levelName").value;
    console.log('olaaaaa')
    Level.add(nome)
    location.reload()
})

const pergunta = document.querySelector("#addPergunta")
pergunta.addEventListener("click", (event) =>{
    event.preventDefault()
    let testeNome=document.querySelector("#escolherTeste").value;
    let perg= document.querySelector("#perguntaTeste").value;
    let opCerta=document.querySelector("#opcao_certa").value;
    let pontosTeste=document.querySelector("#pontosTeste").value;
    let tipoPerg=document.querySelector("#tipoPergunta").value;
    if(tipoPerg=="Escolha Multipla"){
      let erradas=[]
      document.querySelectorAll(".opcao").forEach(eldom => erradas.push(eldom.value))
      let coisa=[]
      coisa.push(opCerta)
      let todas=erradas.concat(coisa)
      Question.add(testeNome,perg,todas,opCerta,pontosTeste)
    }else{
      let errada=document.querySelector("#opcao").value;
      let todas=[]
      todas.push(errada,opCerta)
      Question.add(testeNome,perg,todas,opCerta,pontosTeste)
    }
    location.reload() 
    
})

const popup = document.querySelector("#addPopup")
popup.addEventListener("click", (event) =>{
    event.preventDefault()
    let video= document.querySelector("#escolheVideoPopup").value;
    let perg=document.querySelector("#perguntaPopup").value;
    let tagPopup=document.querySelector("#tagPopup").value;
    let img=document.querySelector("#linkImg").value;
    let resultImg=img.substring(12)
    let linkImg='../media/images/'+resultImg
    let op_certa=document.querySelector("#opcao_certa_popup").value;
    let opcoes=[] 
    document.querySelectorAll(".opcao_popup").forEach(eldom => opcoes.push(eldom.value))
    let sticker=document.querySelector("#linkSticker").value;
    let resultSticker=sticker.substring(12)
    let linkSticker='../media/stickers/'+resultSticker
    let pontos=document.querySelector("#pontos").value;
    let coisa=[]
    coisa.push(op_certa)
    let todas=opcoes.concat(coisa)
    console.log(todas)
    PopUp.add(perg,linkImg,todas,op_certa,linkSticker,video,tagPopup,pontos)
    location.reload()    
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
        Tag.add(nome,tag,NomeTags[i])
        i+=1
      })
      Video.add(linkCompleto,nome,nomeNivel)
      location.reload()
    }else{
      let nomeNivel=document.querySelector("#escolheNivel").value;
      console.log(nomeNivel);
      console.log(1)
      let titulo=document.querySelector("#titulo").value;
      let sticker=document.querySelector("#linkStickerTest").value;
      let result=sticker.substring(12)
      let linkSticker='../media/stickers/'+result
      Test.add(titulo, nomeNivel, linkSticker)
      location.reload()
    }
})
function addLesson(){
  let result = ''
  let videos=Video.getVideos()
  // let tags=Tag.getTags()
  for (let video of videos) {
    // let tag = tags.find(tag => tag.video === video.url);
    // if(tag.video === video.url ){
      result += `
      <tr>
          <th scope="row">${video.level}    video--></th>
          <td>${video.name}</td>
          <td>
          <button  type="button" class="btn btn-danger removeVideo">Remover video</button></td>
      </tr>
          `

    }
      
  // }
  document.querySelector('#lessonbody').innerHTML += result;
}
addLesson()

function addTest(){
  let result = ''
  let testes=Test.getTests()
  for (let teste of testes) {
    result += `
    <tr>
        <th scope="row">${teste.level}   teste --> </th>
        <td>${teste.name}</td>
        <td><button  type="button" class="btn btn-danger removeTeste">Remover teste</button></td>
    </tr>
        `
  }
  document.querySelector('#lessonbody').innerHTML += result;
}
addTest()

function addQuestion(){
  let result = ''
  let perguntas=Question.getQuestions()
  let testes=Test.getTests()
  for (let pergunta of perguntas) {
    let teste = testes.find(teste => teste.name === pergunta.test_name);
    if(teste.name === pergunta.test_name){
      result += `
    <tr>
        <th scope="row">${teste.level}</th>
        <td>${pergunta.test_name}</td>
        <td>${pergunta.question}</td>
        <td><button type="button" class="btn btn-danger removePergunta">Remover pergunta</button></td>
    </tr>
        `

    }
    
  }
  document.querySelector('#perguntaBody').innerHTML += result;
}

addQuestion()



function addNivel(){
    let result = ''
    let levels=Level.getLevels()
    let i=0
    for (let level of levels) {
        i+=1
      result += `
      <tr>
          <th scope="row">${i}</th>
          <th>${level.name}</th>
          <td>
          <button  type="button" class="btn btn-danger removeNivel">Remover nivel</button></td>
      </tr>
          `  
    }
    document.querySelector('#lessonbody').innerHTML += result;

}
addNivel()

function addPopup(){
  let result = ''
  let popups=PopUp.getPopUp()
  let videos=Video.getVideos()
  console.log(videos)
  for (let popup of popups) {
    let video = videos.find(video => video.name === popup.video);
    console.log(video)
    if(video.name === popup.video ){
      result += `
      <tr>
          <th scope="row">${popup.video}</th>
          <td>${popup.question}</td>
          <td>${popup.tag}</td>
          <td>
          <button  type="button" class="btn btn-danger removePopup">Remover popup</button></td>
      </tr>
          `   
    }
  }
  document.querySelector('#popupBody').innerHTML += result;
}
addPopup()

const removeUserBtns = document.querySelectorAll(".removeUser")
console.log(removeUserBtns)
for(let removeUserBtn of removeUserBtns){
  removeUserBtn.addEventListener("click", function(){ 
    let username=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
    console.log(username)
    User.remove(username)
    location.reload()
  })
}

const removePergBtns = document.querySelectorAll(".removePergunta")
console.log(removePergBtns)
for(let removePergBtn of removePergBtns){
  removePergBtn.addEventListener("click", function(){ 
    let perg=this.parentNode.previousElementSibling.innerHTML
    console.log(perg)
    Question.remove(perg)
    location.reload()
  })
}

const removePopupBtns = document.querySelectorAll(".removePopup")
for(let removePopupBtn of removePopupBtns){
  removePopupBtn.addEventListener("click", function(){ 
    let pop=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
    console.log(pop)
    PopUp.remove(pop)
    location.reload()
  })
}

const removeLevelBtns = document.querySelectorAll(".removeNivel")
for(let removeLevelBtn of removeLevelBtns){
  removeLevelBtn.addEventListener("click", function(){ 
    let nivel=this.parentNode.previousElementSibling.innerHTML
    let videos=Video.getVideos()
    let popups=PopUp.getPopUp()
    let pergs=Question.getQuestions()
    let testes=Test.getTests()
    let tags=Tag.getTags()
    for (let video of videos) {
      if (video.level==nivel){
        for(let tag of tags){
          if(tag.video==video.name){
            Tag.removeTag(tag.name)
          }
        } 
        for(let popup of popups){
          if(popup.video==video.name){
            PopUp.remove(popup.question)
          }
        }
        Video.removeVideo(video.name)
      } 
    }
    for(let teste of testes){
      if(teste.level==nivel){
        for(let perg of  pergs){
          if(perg.test_name==teste.name){
            Question.remove(perg.question)
          }
        }
        Test.remove(teste.name)
      }
    }
    Level.remove(nivel)
    location.reload()
  })
}

const removeVideoBtns = document.querySelectorAll(".removeVideo")
for(let removeVideoBtn of removeVideoBtns){
  removeVideoBtn.addEventListener("click", function(){ 
    let video=this.parentNode.previousElementSibling.innerHTML
    console.log(video)
    let popups=PopUp.getPopUp()
    let tags=Tag.getTags()
    for(let tag of tags){
      if(tag.video==video){
        console.log(tag.name)
        Tag.remove(tag.name)
      }
    } 
    for(let popup of popups){
      if(popup.video==video){
        console.log(popup.question)
        PopUp.remove(popup.question)
      }
    }
    Video.removeVideo(video)
    //location.reload()
  })
}

const removeTesteBtns = document.querySelectorAll(".removeTeste")
for(let removeTesteBtn of removeTesteBtns){
  removeTesteBtn.addEventListener("click", function(){ 
    let teste=this.parentNode.previousElementSibling.innerHTML
    let pergs=Question.getQuestions()
    for(let perg of  pergs){
      if(perg.test_name==teste){
        Question.remove(perg.question)
      }
    }
    Test.remove(teste)
    location.reload()
  })
}

const blockBtns = document.querySelectorAll(".blockBtn")
for(let blockBtn of blockBtns){
  blockBtn.addEventListener("click", function(){ 
    let users=User.getUsers();
    let username=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
    console.log(username);
    for(let user of users){
      if(user.username==username){
        if(user.state=='unblocked'){
          blockBtn.classList.remove("btn-danger")
          blockBtn.classList.add("btn-success") 
          blockBtn.innerHTML="Desbloquear"
          user.state='blocked'
        }else{
          blockBtn.classList.remove("btn-success") 
          blockBtn.classList.add("btn-danger")
          blockBtn.innerHTML="Bloquear"
          user.state='unblocked'
        }  
      }
      User.attUserOnStorage(user)
      console.log(user.state)
    }   
  })
}

feather.replace()