import * as User from '../models/userModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
import * as Progress from '../models/progressModel.js';
import * as Comments from '../models/commentsModel.js';
User.init()
Videos.init()
Tags.init()
PopUpQuestions.init()
Progress.init()
Comments.init()

let allVideos = Videos.getVideos();
let allTags = Tags.getTags();
let allPopUps = PopUpQuestions.getPopUp();
let currentUser = User.getUserLogged()
let progress = Progress.getProgress()
let comments = Comments.getComments();

let video = ''
let title = ''

let currentProgress = ''
for (let progres of progress){
  if (progres.username === currentUser.username){
    currentProgress = progres
    console.log(currentProgress)
    console.log('currentProgress')
    break;
  }
}
console.log(1)
console.log(currentProgress)
console.log(2)
const myModal = document.getElementById('myModal');

//funcao que cria a pagina
function renderPage(){
  let lvlTitle = document.querySelector('#lvlTitle')
  
  progress.forEach((progres) => {
    if(currentUser.username === progres.username){
      console.log(progres.username)
      let currentLvl = progres.currentLvl
      lvlTitle.innerHTML = currentLvl
      console.log(currentLvl)
      
      let listVideos = []
      allVideos.forEach((allVideo) => {
        if(allVideo.level === currentLvl){
          listVideos.push(allVideo);
          console.log(listVideos)
          console.log('listVideos')
        }
        console.log(listVideos)
      })
      console.log(listVideos)
      console.log(allVideos)

      let divPages = document.querySelector(".allpagebtns")
      let string = ''
      listVideos.forEach((listVideo) => {
        string += `
        <div class="btn-group divPages" role="group" aria-label="First group">
          <button type="button" id="${listVideo.name}" class="btn btn BtnUp"> <b>${listVideo.name}</b> </button>
        </div>
        `
      })
      divPages.innerHTML = string
      // mal
      defaultTab(listVideos) 
      let allBtns = document.querySelectorAll('.BtnUp')
      allBtns = Array.from(allBtns)
      allBtns.forEach((allBtn) => {
        allBtn.addEventListener('click',()=>{
          listVideos.forEach((listVideo) => {
            console.log(listVideo.name)
            console.log(allBtn.id)
            if(allBtn.id === listVideo.name){
              // mal
              generateTab(listVideos)
            }
          })
        })
      })
    }
  })
  console.log('omds')
}
renderPage()
console.log('okk')


//funcao que gera um fieldset(tab) para cada video
function generateTab(videoObj) {
  console.log('why')
  let divTabs = document.querySelector('#divTabs')
  let string = ''
  let nomeVid=videoObj.name.replace(' ','_')
  console.log(nomeVid)
  console.log('nomeVid')
  videoObj.forEach((video)=>{

  })
    string = `
    <fieldset id="${nomeVid}" class="aTab">
              <div class="row">
                <div>
                  <div class="container">
                  <div class="row">
                    <div class="col-7">
                      <h2 id="title">${videoObj.name}</h2>
                      <div class="divVideo">
                        <video src="${videoObj.url}" controls></video>
                      </div>
                      <div class="divLikes">
                      
                      </div>
                    </div>
                    <div class="col">
                      <img id="etiquetas" src="../media/images/etiquetas.svg" height="30px">
                      <div class="list-group tagsList">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br><br>
              <div class="row">
                <div>
                  <div class="container">
                  <div class="row">
                    <div class="col-8">
                      <img id="comentariosTitle" src="../media/images/comentarios.svg" height="30px">
                      <fieldset id="commentsField">
                        Este vídeo ainda não tem comentários.
                      </fieldset>
                    </div>
                    <div class="col">
                      <fieldset class="leaveComentField">
                        
                      </fieldset>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </fieldset>
    `
    divTabs.innerHTML = string
    feather.replace()
    title = document.querySelector('#title');
    console.log(title);
    video = document.querySelector('video');
    tagsList(videoObj.name)
    renderComments()
    commentShow()
    likesShow()
    renderLikes()
    addLike()
    video.addEventListener("timeupdate", () => {
      Questions()
      updateProgress()
    })
    feather.replace()
    addLike()
    comentarButao()
    renderLikes()
    console.log('omds')
    console.log('omds2')
  }
  

//funcao que gera um tab por default do ultimo vídeo que o utilizador estava a ver(caso seja deste nível)
function defaultTab(listVideos) {
  console.log('whyy')
  console.log('morte')
  listVideos.forEach((listVideo)=>{
    console.log('morte')
    if(currentProgress.currentVideo === listVideo.name){
      console.log('morte')
      generateTab(listVideo)
      video = document.querySelector('video');
      video.currentTime = currentProgress.currentTag
    }
    else{
      console.log('erro')
      generateTab(listVideos[0])
    }

  })
}