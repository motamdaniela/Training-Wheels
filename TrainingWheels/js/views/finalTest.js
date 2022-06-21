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
            finishTest()
            
            break;
          }
        }
      }
      renderPage()
      

  
  
  function correctAnswer(questionObj, theFld, answerBtn){
      
      if(answerBtn.innerHTML === questionObj.right_answer){
          
        currentUser.points += +questionObj.points
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

              correctAnswer(pergunta, fld, answerBtn)
            }
  
          })
        }

    })


  }

  function finishTest(){
    let progress = Progress.getProgress()
    let lvlTitle = document.getElementById('theTitle').innerHTML
    testes.forEach((teste) => {
      if(teste.name === lvlTitle){
        let sticker = teste.sticker


        let finishBtn = document.querySelector('#finish')
    
        finishBtn.addEventListener('click',()=>{
          let right = document.querySelectorAll('.green').length
          let wrong = document.querySelectorAll('.red').length
          let all = document.querySelectorAll('.fldfld').length
    
          if(right + wrong == 0){
            alert('Não deixes o teste for fazer!')
          }else if (((+right *100) / +all) >= 80){

    
            let reward = document.querySelector('#reward')
            reward.src = sticker

            currentUser.stickersLvl.push(sticker)            
            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
            User.attUserOnStorage(currentUser)

              $("#congratsModal").modal('show');
    
          }else{
            
              $("#wrongModal").modal('show');
    
          }
          progress.forEach((progres) => {
            if(progres.username == currentUser.username){
              progres.videosDone.push(lvlTitle)            
              Progress.attProgressOnStorage(progres)
            }
          })
          setTimeout(() => {
            location.replace("./lessonMenu.html");
          }, 1500);
          
        })


      }
    })
    
  }
  
  feather.replace()