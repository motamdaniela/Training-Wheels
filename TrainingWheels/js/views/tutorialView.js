import * as User from '../models/userModel.js';
import * as Levels from '../models/levelModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
import * as Progress from '../models/progressModel.js';
User.init()
Levels.init()
Videos.init()
Tags.init()
PopUpQuestions.init()
Progress.init()

let allLevels = Levels.getLevels();
let allVideos = Videos.getVideos();
let allTags = Tags.getTags();
let allPopUps = PopUpQuestions.getPopUp();
let currentUser = User.getUserLogged()
let progress = Progress.getProgress()









//funcao que cria a pagina
function renderPage(){
  let lvlTitle = document.querySelector('#lvlTitle')
  
  progress.forEach((progres) => {
    if(currentUser.username === progres.username){
      let currentLvl = progres.currentLvl
      lvlTitle.innerHTML = currentLvl
      
      let listVideos = []
      allVideos.forEach((allVideo) => {
        if(allVideo.level === currentLvl){
          listVideos.push(allVideo);
        }
      })

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
      generateTable()

      let allBtns = document.querySelectorAll('.BtnUp')
      allBtns = Array.from(allBtns)
      let allTabs = document.querySelectorAll('.aTab')
      allTabs = Array.from(allTabs)
      allBtns.forEach((allBtn) => {
        allBtn.addEventListener('click',()=>{

          allTabs.forEach((allTab) =>{
            if(allBtn.id === allTab.id){
              allTab.classList.remove('hide');
            }else{
              allTab.classList.add('hide');
            }
          })
        })
      })

    }
  })
}
renderPage()

//funcao que gera um fieldset(tab) para cada video
function generateTable() {
  let divTabs = document.querySelector('#divTabs')
  let string = ''

    string += `
    <fieldset id="${listVideo.name}" class="aTab hide">
              <div class="row">
                <div>
                  <div class="container">
                  <div class="row">
                    <div class="col-7">
                      <h2 id="title">${listVideo.name}</h2>
                      <div class="divVideo">
                        <video src="${listVideo.url}" controls></video>
                      </div>
                      <i class="heartIcon" data-feather="heart"></i>
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
                      <fieldset class="commentsField">
                        comentssss
                      </fieldset>
                    </div>
                    <div class="col">
                      <fieldset class="leaveComentField">
                        <label>Dê a sua opinião!</label>
                        <div class="form-floating">
                          <textarea id="commentTextArea" class="form-control" placeholder="Leave a comment here" style="height: 150px; resize: none;"></textarea>
                          
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </fieldset>
    `
    tagsList(listVideo.name)
  divTabs.innerHTML = string
}

function defaultTab() {
  let allTabs = document.querySelectorAll('.aTab')
  allTabs = Array.from(allTabs)
  allTabs[0].classList.remove('hide')
}
defaultTab()
let currentTab = ''





//const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []
const myModal = document.getElementById('myModal');
const video = document.querySelector('video');
let title = document.querySelector('#title');


//funcao que abre a modal
function OpenBootstrapPopup() {
  $('#myModal').modal({
    backdrop: 'static',
    keyboard: false
  })
  $("#myModal").modal('show');
  $('#myModal').on('hidden.bs.modal', function () {
    video.play()
  })
}

//funcao converte uma tag de video para o tempo em segundos
function convertTag(time){
  let minutes = +time.substr(0, time.indexOf(':'))
  let seconds = +time.substr(time.indexOf(':')+1, time.length)
  time = (minutes*60) + seconds
  return time
}

//--------------------lista de etiquetas associadas às tags
 function tagsList(videoName){
  let allTabs = document.querySelectorAll('.aTab')
  allTabs = Array.from(allTabs)
  allTabs.forEach((allTab)=>{
    if (allTab.classList.contains('hide')){
    }else{ currentTab = allTab}
  })

  let anId =  currentTab.id.replace(' ', '_')
  anId = anId + 'tags'
  console.log(anId)
  let string = ''
  allTags.forEach((allTag)=>{
    if(allTag.video === videoName){
      string += `
      <a class="list-group-item list-group-item-action list-group-item tag">${allTag.name}</a>
      `
    }
  })
  anId = "#" + anId
  //document.querySelector(anId).innerHTML = string
  let tagBtns = document.querySelectorAll('.tag')
  tagBtns = Array.from(tagBtns)
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click',()=>{
      allTags.forEach((alltag)=>{
        if(alltag.name === tagBtn.innerHTML){
          let time = convertTag(alltag.tag)
          video.currentTime = time
          video.play()
        }
      })
    })
  })
}


//-----------funcao que baralha(para as respostas)
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//-------------funcao para abrir a modal de perguntas pop up automaticamente
function Questions(){
  let question = document.querySelector('#questionPopUp')
  let imagePopUp = document.querySelector('#imagePopUp')
  let answers = document.querySelector('#answersPopUp')
  let cluesN = document.querySelector("#cluesN")
  let pointsN = document.querySelector("#pointsN")
  allPopUps.forEach((allPopUp) => {
    if(allPopUp.video === title.innerHTML){
      let time = convertTag(allPopUp.tag)
      if (video.currentTime >= time && video.currentTime <= time + 0.2){
        question.innerHTML = allPopUp.question
        imagePopUp.src = allPopUp.image
        
        cluesN.innerHTML = currentUser.clues
        pointsN.innerHTML = currentUser.points

        let randomBtns = shuffle(allPopUp.answers)
        answers.innerHTML = `
        <div class="row row-cols-2">
          <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[0]}" data-bs-dismiss="modal">${randomBtns[0]}</button></div>
          <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[1]}" data-bs-dismiss="modal">${randomBtns[1]}</button></div>
          <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[2]}" data-bs-dismiss="modal">${randomBtns[2]}</button></div>
          <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[3]}" data-bs-dismiss="modal">${randomBtns[3]}</button></div>
        </div>
        `
       video.pause();
       OpenBootstrapPopup();
       CorrectAnswer(allPopUp.correctAnswer, allPopUp.pointsEarned, allPopUp.reward);
     }
    }
  })
}


//funcao que descobre se a resposta esta certa ou nao
function CorrectAnswer(gotAnswer, gotPoints, Reward){
  let answerBtns = document.querySelectorAll('.answerBtn');
  allPopUps.forEach((allPopUp) => {
    answerBtns.forEach((answerBtn) => {

      answerQuestion()

      if(answerBtn.id === gotAnswer){
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#congratsModal").modal('hide');
            video.play();
            video.pause();
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${allPopUp.pointsEarned} pontos`
            let reward = document.querySelector('#reward')

            reward.src = allPopUp.reward
            currentUser.points += gotPoints
            currentUser.stickersLvl.push(Reward)

            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
            User.attUserOnStorage(currentUser)


            $("#congratsModal").modal('show');
            setTimeout(() => {
              $("#congratsModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }else{
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#wrongModal").modal('hide');
            video.play();
            video.pause()
            $("#wrongModal").modal('show');
            setTimeout(() => {
              $("#wrongModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }
    })
  })
}

function answerQuestion(){
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let doneQuestions = Array.from(progres.questionsDone)
      let question = document.querySelector('#questionPopUp').innerHTML
      if(doneQuestions.includes(question)){

      }else{
        doneQuestions.push(question)
        progres.questionsDone = doneQuestions
    
        sessionStorage.setItem('progress', JSON.stringify(progres))
        Progress.attProgressOnStorage(progres)
      }
    }
  })
}



//funcao que atualiza o progresso a medida que o utilizador vai avancando no tutorial
function updateProgress() {
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      if(video.paused){
        progres.currentVideo = title.innerHTML
        progres.currentTag = video.currentTime

        sessionStorage.setItem('progress', JSON.stringify(progres))
        Progress.attProgressOnStorage(progres)

      }else if(video.currentTime >= video.duration - 40){
        let doneVideos = Array.from(progres.videosDone)
        if(doneVideos.includes(title.innerHTML)){

        }else{
          doneVideos.push(title.innerHTML)
          progres.videosDone = doneVideos
          console.log(progress)
  
          sessionStorage.setItem('progress', JSON.stringify(progres))
          Progress.attProgressOnStorage(progres)
        }
      }
    }
  })
}

/*
    questionsDone = []
    questionsCorrect = []
    likedVideos = []

    to not repeat questions correct
    not gain points from questions done

    like videos(maybe unlike)
*/

video.addEventListener("timeupdate", () => {
  Questions()
  updateProgress()
})
