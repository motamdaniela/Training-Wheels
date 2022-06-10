import * as Level from "../models/levelModel.js";

Level.init()

function rankTable(){
    let result = ''
    let levels= Level.getLevels()
    
    let i=0
    for (let level of levels) {
        i+=1
        result += `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
            ${level.name}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <a  href="faq.html">liçao</a>
          </div>
          <div class="accordion-body">
              <a  href="faq.html">liçao</a>
          </div>
        </div>
      </div>`
        
        }
        document.querySelector('#menuNiveis').innerHTML += result;
    }
    
    

rankTable()