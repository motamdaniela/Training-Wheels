import * as Level from "../models/levelModel.js";
Level.init()


function rankTable(){
    let result = ''
    let levels= Level.getLevels()
    console.log(levels)
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
        document.querySelector('#menuNiveis').innerHTML += result;
        feather.replace()
    }

rankTable()

function lvlPage(){
  
}