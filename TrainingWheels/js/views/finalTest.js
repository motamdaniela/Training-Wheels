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
  
  for (let progres of progress){
    if (progres.username === currentUser.username){
      let currentProgress = progres
      lvlTitle.innerHTML = currentProgress.currentLvl
      
      testes.forEach((teste)=>{
        if (teste.level === lvlTitle.innerHTML){

          theTitle.innerHTML = teste.name

        }
      })

      document.querySelector()

      break;
    }
  }
}



function pageView(){


  progress.forEach((progres) => {
    if(currentUser.username === progres.username){
      let currentLvl = progres.currentLvl
      lvlTitle.innerHTML = currentLvl
      
      let listTestes = []
      testes.forEach((teste) => {
        if(teste.level === currentLvl){
          listTestes.push(teste);
        }
      })
      let divPages = document.querySelector(".allpagebtns")
      let string = ''
      listTestes.forEach((listTeste) => {
        string += `
        <div class="btn-group divPages" role="group" aria-label="First group">
          <button type="button" id="${listTeste.name}" class="btn btn BtnUp"> <b>${listTeste.name}</b> </button>
        </div>
        `
      })
      divPages.innerHTML = string

      defaultTab(listTestes) 
      let allBtns = document.querySelectorAll('.BtnUp')
      allBtns = Array.from(allBtns)
      allBtns.forEach((allBtn) => {
        allBtn.addEventListener('click',()=>{
          listTestes.forEach((listTeste) => {
            if(allBtn.id === listTeste.name){
              generateTab(listTeste)
            }
          })
        })
      })
    }
  })
}
pageView()

function generateTab(testeObj) {
  let divTabs = document.querySelector('#divTabs')
  // let result=''
  // let result2=''
  let string = ''
  string=`<h2 id="title">${testeObj.name}</h2>
  `
  let respostas=[]
  let perguntasList=[]
  let listResDiv=[]
  let esteTeste=currentProgress.currentVideo
  
  let resDiv=''
  
  for(let pergunta of perguntas){
    if(esteTeste==pergunta.test_name){
      string+=`<p class="pergunta">${pergunta.question}</p>
      <div class="d-grid gap-2 col-6 mx-auto divRespostas">

      </div>
      `
      respostas.push(pergunta.answers)
      perguntasList.push(pergunta.question)
    }
    divTabs.innerHTML = string 
    let pergs=document.querySelectorAll('.pergunta')
    pergs = Array.from(pergs)
    pergs.forEach(function(perg) {
      if(perg.innerHTML==pergunta.question){
        pergunta.answers.forEach(function(answer){
          console.log(answer)
          let divs=document.querySelectorAll('.divRespostas')
          divs = Array.from(divs)
          let i=0
          divs.forEach(function(div) {
            // console.log(div)
            let slay=`<button class="btn btn-primary opcao" type="button">${answer}</button>`
            console.log(answer)
            if(div.previousElementSibling.innerHTML==pergunta.question){
              div.innerHTML+=slay    
            }
            
            console.log(div.innerHTML)
            i+=1
          })
        })
        
      }
    })
    // if(pergunta.answers[0]===respostas[i][0]){
    //   let j=0
    //   respostas[i].forEach((resposta)=>{
    //     // console.log(respostas[i][j])
    //     let pergs=document.querySelector(`#${pergunta.question}`)
    //     if(pergunta.question==pergs){
    //       resDiv+=`<button class="btn btn-primary opcao" type="button">${respostas}</button>`
    //       j+=1

    //     }
        
    //     // console.log(resposta[j])
    //   })
    //   let coises = document.querySelectorAll('.divRespostas');
    //   for (let coise of coises){
        
    //     coise.innerHTML=resDiv
    //   }
    // }
  }
  
  // console.log(respostas)

    feather.replace()
    title = document.querySelector('#title');
    
    updateProgress()
    
  }

function defaultTab(listTestes) {
  listTestes.forEach((listTeste)=>{
    if(currentProgress.currentVideo === listTeste.name){
      generateTab(listTeste)
    }
    else{
      generateTab(listTestes[0])
    }

  })
}

function updateProgress() {
  title = document.querySelector('#title');
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      progres.currentVideo = title.innerHTML
      Progress.attProgressOnStorage(progres)
      // if(video.paused){
        
      //   progres.currentTag = video.currentTime

      //   sessionStorage.setItem('progress', JSON.stringify(progres))
        

      // }else if(video.currentTime >= video.duration - 40){
      //   let doneVideos = Array.from(progres.videosDone)
      //   if(doneVideos.includes(title.innerHTML)){

      //   }else{
      //     doneVideos.push(title.innerHTML)
      //     progres.videosDone = doneVideos
      //     console.log(progress)
  
      //     sessionStorage.setItem('progress', JSON.stringify(progres))
      //     Progress.attProgressOnStorage(progres)
      //   }
      // }
    }
  })
}


  
    // string = `<h2 id="title">${videoObj.name}</h2>
    // <p class="pergunta">Pergunta</p>
    //   <div class="d-grid gap-2 col-6 mx-auto divRespostas">
    //     <button class="btn btn-primary certa" type="button">Button</button>
    //     <button class="btn btn-primary errada" type="button">Button</button>
    //     <button class="btn btn-primary errada" type="button">Button</button>
    //     <button class="btn btn-primary errada" type="button">Button</button>
    // </div>
    // `

    
  // let divPergs=document.querySelectorAll('.divRespostas')
  // divPergs = Array.from(divPergs)
  // for(let pergunta of perguntas){
  //   if(esteTeste==pergunta.test_name){
  //     for(let resposta of pergunta.answers){
  //       divPergs.forEach((divPerg) => {
  //         if(divPerg.innerHTML==perguntas.question){
  //           result2+=`<button class="btn btn-primary opcao" type="button">${resposta}</button>`
  //         }
  //         })
        
  //     }
  //     divPergs.innerHtml=result2
  //   }
  // }
  
    // divTabs.innerHTML = string
    
    
    // if(divPergs.innerHTML==perguntas.question){
      
    // }

    // perguntasList.push(pergunta.question) 
      // respostas.push(pergunta.answers)
      // console.log(pergunta.question)
      // console.log(respostas)
      // for(let resposta of pergunta.answers){
      //   result2+=`<button class="btn btn-primary opcao" type="button">${resposta}</button>`
      // }
      // console.log(result2)