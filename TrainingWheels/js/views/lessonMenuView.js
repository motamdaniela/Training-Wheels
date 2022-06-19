import * as Level from "../models/levelModel.js";
import * as User from "../models/userModel.js";
import * as Progress from "../models/progressModel.js";
import * as Videos from "../models/videoModel.js";
import * as PopUpQuestions from "../models/popupModel.js";
Level.init()
User.init()
Progress.init()
Videos.init()
PopUpQuestions.init()

let currentUser = User.getUserLogged()

function rankTable(){
    let levels= Level.getLevels()
    let videos = Videos.getVideos()
    let listVideos = []
    let result = ''

    let i=0
    for (let level of levels) {
        i+=1

        videos.forEach((video) => {
          if(video.level === level.name){
            listVideos.push(video)
          }
        })


        result +=
        `
        <div class="title4 lvlTitle">
          <i class="nav-icon4" data-feather="circle"></i> 
          <h3>${level.name}</h3>
        </div>
        <fieldset class="accordion blue">
          <div class="row toPad" id="subLevels">
            <div class="col">
        `

        listVideos.forEach((listVideo) => {
          result += `<p class="aVideo">${listVideo.name}</p>`
        })

        result += `
        </div>
            <div class="col goBtn">
              <i data-feather="arrow-right-circle" class="goIcon" id="${level.name}"></i>
            </div>
          </div>
        </fieldset>
        `
        listVideos = []
      }
      document.querySelector('#menuNiveis').innerHTML += result;

      feather.replace()
      lvlPage()
    }
rankTable()

function lvlPage(){
  let goBtns = document.querySelectorAll('.goIcon');
  goBtns = Array.from(goBtns)
  goBtns.forEach((goBtn)=>{
    goBtn.addEventListener('click',()=>{

      let progress = Progress.getProgress()
      progress.forEach((progres)=>{
        if (currentUser.username === progres.username){

          progres.currentLvl = goBtn.id
          sessionStorage.setItem('currentLvl', JSON.stringify(progres.currentLvl))
          Progress.attProgressOnStorage(progres)

        }
      })
      
      setTimeout(() => {
        location.replace("./tutorial.html");
      }, 1000);
    })
  })
}

// funcao que verifica se um video ja foi visto ou nao

function checkVideo(){
  let progress = Progress.getProgress()
  let listOfVideos = document.querySelectorAll('.aVideo')
  listOfVideos = Array.from(listOfVideos)
  
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let doneVideos = progres.videosDone
      listOfVideos.forEach((listOfVideo) => {
        let video = listOfVideo
        if(doneVideos.includes(video.innerHTML)){
          let string = ` <i data-feather="check"></i>`
          video.innerHTML += string
        }
      })
    }
  })
  feather.replace()
}

checkVideo()