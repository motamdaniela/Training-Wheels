import * as User from "../models/userModel.js";
import * as Level from "../models/levelModel.js";
import * as Test from "../models/testModel.js";
import * as Question from "../models/questionModel.js";
import * as Progress from '../models/progressModel.js';

User.init()
Level.init()
Test.init()
Question.init()
Progress.init()

let currentUser = User.getUserLogged()
let progress = Progress.getProgress()
let testes=Test.getTests()
let perguntas=Question.getQuestions()


function renderPage(){
  let lvlTitle = document.querySelector('#lvlTitle')
  let theTitle = document.querySelector('#theTitle')
  let string = ''
  
  for (let progres of progress){
    if (progres.username === currentUser.username){
      let currentProgress = progres
      lvlTitle.innerHTML = currentProgress.currentLvl
      
      testes.forEach((teste)=>{
        if (teste.level === lvlTitle.innerHTML){
          theTitle.innerHTML = teste.name

          perguntas.forEach((pergunta)=>{
            if(pergunta.test_name === teste.name){

              string += `
              <fieldset class="accordion blue fldfld">
              <div class="title4 lvlTitle">
                  <i class="nav-icon4" data-feather="circle"></i> 
                  <h3>${pergunta.question}</h3>
              </div>

                    <div class="row toPad" id="subQuestion">`

                    pergunta.answers.forEach((answer)=>{
                      string += `
                      <button type="button" class="btn btn-primary answerBtn">${answer}</button>`
                    })

                    string +=`
                    </div></fieldset>
                    `
            }
          })

        }
      })

      document.querySelector('#divPages').innerHTML = string

      break;
    }
  }
}

renderPage()

function correctAnswer(){
  let answerBtns = document.querySelector('.answerBtn')
}