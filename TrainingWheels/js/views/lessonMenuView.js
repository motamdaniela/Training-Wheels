import * as Level from "../models/levelModel.js";
import * as User from "../models/userModel.js";
import * as Progress from "../models/progressModel.js";
Level.init()
User.init()
Progress.init()

let currentUser = User.getUserLogged()

function rankTable(){
    let result = ''
    let levels= Level.getLevels()
    let i=0
    for (let level of levels) {
        i+=1
        result +=
        `
        <div class="title4 lvlTitle">
          <i class="nav-icon4" data-feather="circle"></i> 
          <h3>${level.name}</h3>
        </div>

        
        <fieldset class="accordion blue">
          <div class="row toPad" id="subLevels">
            <div class="col">
              <p>
                video
            
                <i data-feather="check"></i>

              </p>
              <p>
                video
              </p>
              <p>
                video
              </p>
            </div>
            <div class="col goBtn">
              <i data-feather="arrow-right-circle" class="goIcon" id="${level.name}"></i>
            </div>
          </div>
        </fieldset>
        `
        
      }
      document.querySelector('#menuNiveis').innerHTML = result;
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
      
      redirect(goBtn.id)
    })
  })
}

function redirect(lvlName){


  console.log(lvlName)
  setTimeout(() => {
    location.replace("./tutorial.html");
  }, 1000);
}