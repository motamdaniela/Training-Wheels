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
              <fieldset class="accordion blue fldfld" id="${pergunta.question}">
              <div class="title4 lvlTitle">
                  <i class="nav-icon4" data-feather="circle"></i> 
                  <h3 class="perguntaTitle">${pergunta.question}</h3>
              </div>

                    <div class="row toPad" id="subQuestion">`

                    pergunta.answers.forEach((answer)=>{
                      string += `
                      <button id="${pergunta.question}" type="button" class="btn btn-primary answerBtn">${answer}</button>`
                    })

                    string +=`
                    </div></fieldset>
                    `
                    
                    
                  }
                })
                
              }
            })
            
            document.querySelector('#divPages').innerHTML = string

            let answerBtns = document.querySelectorAll('.answerBtn')
            answerBtns = Array.from(answerBtns)

            answerBtns.forEach((answerBtn)=>{
              answerBtn.addEventListener('click',()=>{
                lookFor(answerBtn)
              })

            })
            
            break;
          }
        }
      }
      renderPage()
      

  
  
  function correctAnswer(questionObj, theFld, answerBtn){
      
      if(answerBtn.innerHTML === questionObj.right_answer){
        console.log(questionObj.right_answer, answerBtn.innerHTML)
          
        currentUser.points += questionObj.points
        sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
        User.attUserOnStorage(currentUser)
        
        theFld.classList.remove('blue')
        theFld.classList.add('green')
        theFld.innerHTML = `<img src="../media/images/point.svg" height="20px"> + ${questionObj.points}`
        
      }else{
        theFld.classList.remove('blue')
        theFld.classList.add('red')
        theFld.innerHTML = `Resposta errada! <img src="../media/images/sadgilf.svg" height="20px">`
      }

  }

  function lookFor(answerBtn){
    let flds = document.querySelectorAll('.fldfld')
    flds = Array.from(flds)


    flds.forEach((fld)=>{

        if(answerBtn.id == fld.id){
          perguntas.forEach((pergunta)=>{
            if(pergunta.question === fld.id){

              console.log(fld)
              correctAnswer(pergunta, fld, answerBtn)
            }
  
          })
        }

    })


  }

  feather.replace()
  