import * as Level from "../models/levelModel.js";
import * as User from "../models/userModel.js";
import * as Progress from "../models/progressModel.js";
import * as Videos from "../models/videoModel.js";
import * as PopUpQuestions from "../models/popupModel.js";
import * as Test from "../models/testModel.js";
Level.init()
User.init()
Progress.init()
Videos.init()
PopUpQuestions.init()
Test.init()

let currentUser = User.getUserLogged()

function rankTable(){
    let levels= Level.getLevels()
    let videos = Videos.getVideos()
    let testes= Test.getTests()
    let listVideos = []
    let listTestes=[]
    let result = ''

    
    for (let level of levels) {
        

        videos.forEach((video) => {
          if(video.level === level.name){
            listVideos.push(video)
          }
        })
        testes.forEach((teste) => {
          if(teste.level === level.name){
            listTestes.push(teste)
          }
        })
        if (listVideos.some(e => e.level === level.name)) {
          
        }
        
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
        listTestes.forEach((listTeste) => {
          result += `<p class="aTeste">${listTeste.name}</p>`
        })

        if (listVideos.some(e => e.level === level.name)) {
          result += `
        </div>
            <div class="col goBtn">
              <i data-feather="play-circle" class="goIcon" id="${level.name}"></i>
            </div>
          </div>
        </fieldset>
        `
          
        }else if (listTestes.some(e => e.level === level.name)){
          result += `
        </div>
            <div class="col goBtn">
              <i data-feather="clipboard" class="goTeste" id="${level.name}"></i>
            </div>
          </div>
        </fieldset>
        `
        }else{
          result += `
        </div>
              <p>Nenhuma lição disponível de momento</p>
          </div>
        </fieldset>
        `

        }

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

          if(progres.levelsStarted.includes(goBtn.id) == false){
            progres.levelsStarted.push(goBtn.id)
          }

          Progress.attProgressOnStorage(progres)

        }
      })
      
      setTimeout(() => {
        location.replace("./tutorial.html");
      }, 500);
    })
  })
  let goTesteBtns = document.querySelectorAll('.goTeste');
  goTesteBtns = Array.from(goTesteBtns)
  goTesteBtns.forEach((goTesteBtn)=>{
    goTesteBtn.addEventListener('click',()=>{

      let progress = Progress.getProgress()
      progress.forEach((progres)=>{
        if (currentUser.username === progres.username){

          progres.currentLvl = goTesteBtn.id

          if(progres.levelsStarted.includes(goTesteBtn.id) == false){
            progres.levelsStarted.push(goTesteBtn.id)
          }

          // sessionStorage.setItem('currentLvl', JSON.stringify(progres.currentLvl))
          Progress.attProgressOnStorage(progres)

        }
      })
      
      setTimeout(() => {
        location.replace("./finalTest.html");
      }, 500);
    })
  })


}

// funcao que verifica se um video ja foi visto ou nao
function checkVideo(){
  let progress = Progress.getProgress()
  let listOfVideos = document.querySelectorAll('.aVideo')
  listOfVideos = Array.from(listOfVideos)
  let listOfTests = document.querySelectorAll('.aTeste')
  listOfTests = Array.from(listOfTests)
  
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let currentProgress = progres
      let doneVideos = progres.videosDone
      listOfVideos.forEach((listOfVideo) => {
        let video = listOfVideo
        if(doneVideos.includes(video.innerHTML)){
          let string = ` <i data-feather="check-circle" class="check"></i>`
          video.innerHTML += string
        }
      })
      listOfTests.forEach((listOfTest) => {
        if(currentProgress.videosDone.includes(listOfTest.innerHTML)){
          let string = ` <i data-feather="check-circle" class="check"></i>`
          listOfTest.innerHTML += string
        }
      })


    }
  })
  feather.replace()
}
checkVideo()
feather.replace()


//funcao que verifica se um nível ja foi feitos ou so comecados
function checkLevel() {
  let progress = Progress.getProgress()
  let videos = Videos.getVideos()
  let levels = Level.getLevels()
  
  
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let currentProgress = progres

      
      let videosDone = currentProgress.videosDone
      
      levels.forEach((level) => {
        let listVideos = [];
        videos.forEach((video)=>{
          if(video.level === level.name){
            listVideos.push(video.name)
          }
        })

        
        let containsAll = listVideos.every(element => {
          return videosDone.includes(element);
        });
        if(containsAll){
          currentProgress.levelsDone.push(level.name)
    
          sessionStorage.setItem('currentProgress', JSON.stringify(currentProgress))
          Progress.attProgressOnStorage(currentProgress)
        }
    
      })

    }
  })
  

}
checkLevel()

/*
=> todos videos de um nivel
=> todos os videos feitos
se todos nivel estao nos feitos => nivel passa para done
*/