import * as PopUpQuestions from '../models/PopUpModel.js';
//import * as Videos from '../models/videoModel.js';
//import * as Tags from '../models/tagModel.js';
PopUpQuestions.init()
//Videos.init()
//Tags.init()

//const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []

const video = document.querySelector('video')
const divVideo = document.querySelector('#divVideo')
const title = document.querySelector('#title')
const duration = document.querySelector('#duration')

// PREENCHIMENTO AUTOMATICO DO NOME DO FICHEIRO DE VIDEO
let videoName = video.src.split('/')[video.src.split('/').length - 1]
videoName = videoName.substr(0, videoName.indexOf('.')).replaceAll('_',' ')
title.innerHTML = videoName

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
const myModal = document.getElementById('myModal')

let tagBtns = document.querySelectorAll('#tag')
tagBtns = Array.from(tagBtns)



/*
function popUps(){
  let timesList = [];
  for(const tag of listTags){
    let time = listTags[listTags.indexOf(tag)]
    time =convertTag(time)
    timesList.push(time)
  }
  timesList.forEach((time) =>{
    if (video.currentTime >= time && video.currentTime <= time + 0.1){
      video.pause()
      OpenBootstrapPopup();
    }
  })
}
*/

/*
//"links" para as tags no grouplist
for (const tagBtn of tagBtns){
  tagBtn.addEventListener('click', () => {
        let time = listTags[tagBtns.indexOf(tagBtn)]
        time = convertTag(time)
        video.currentTime = time;
        video.play()
      })
  }
  */

  

 
 function tagsList(){
   let popUps = PopUpQuestions.getPopUp()
   let string = ''
   popUps.forEach((popUp)=>{
    string += `
    <a class="list-group-item list-group-item-action list-group-item tag">${popUp.tag}</a>
    `
  })
  console.log(popUps.length)
  document.querySelector(".tagsList").innerHTML = string
}
tagsList()

/*
  //--------------------funcao modals corresponde tag
  video.addEventListener('timeupdate', ()=>{
    let popUps = PopUpQuestions.getPopUp()
    popUps.forEach((popUp) => {
      let time = convertTag(popUp.tag)
      if (video.currentTime >= time && video.currentTime <= time + 0.1){
        video.pause()
        document.querySelector('#imagePopUp').src = popUp.image
        document.querySelector('#questionPopUp').innerHTML = popUp.question
        OpenBootstrapPopup();
      }
    });
  })
  */

function Questions(){
  let popUps = PopUpQuestions.getPopUp() 
  let question = document.querySelector('#questionPopUp')
  let imagePopUp = document.querySelector('#imagePopUp')
  let answers = document.querySelector('#answersPopUp')
  let timesList = []
  popUps.forEach((popUp) => {
    let time = convertTag(popUp.tag)
    timesList.push(time)
  console.log(timesList)
  timesList.forEach((time) =>{
    if (video.currentTime >= time && video.currentTime <= time + 0.1){
      console.log('its getting there')
      question.innerHTML = popUp.question
      imagePopUp.src = popUp.image
      answers.innerHTML = `
      <button type="button" class="btn btn-primary answerBtn" id="${popUp.answers[0]}" data-bs-dismiss="modal">${popUp.answers[0]}</button>
      <button type="button" class="btn btn-primary answerBtn" id="${popUp.answers[1]}" data-bs-dismiss="modal">${popUp.answers[1]}</button>
      <button type="button" class="btn btn-primary answerBtn" id="${popUp.answers[2]}" data-bs-dismiss="modal">${popUp.answers[2]}</button>
      <button type="button" class="btn btn-primary answerBtn" id="${popUp.answers[3]}" data-bs-dismiss="modal">${popUp.answers[3]}</button>
      `
      video.pause();
      OpenBootstrapPopup();
      CorrectAnswer(popUp.pointsEarned);
    }
    })
  })
}

//funcao que descobre se a resposta esta certa
function CorrectAnswer(pointsEarned){
  let answerBtns = document.querySelectorAll('.answerBtn');
  let popUps = PopUpQuestions.getPopUp()
  let modal = document.querySelector('#myModal')
  popUps.forEach((popUp) => {
    answerBtns.forEach((answerBtn) => {
      if(answerBtn.id === popUp.correctAnswer){
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#congratsModal").modal('hide');
            video.play();
            video.pause()
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${pointsEarned}points`
            let reward = document.querySelector('#reward')
            reward.src = popUp.reward
            $("#congratsModal").modal('show');
            setTimeout(() => {
              $("#congratsModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }
    })
  })
}


video.addEventListener('timeupdate', () => {
  Questions()
})

  
  
  
  //-------Perguntas
  
  
  let perguntas = [
    {
      question:"Qual deve ser o comportamento do condutor perante esta situação?",
      image:"../media/stickers/semaforo.svg",
      answers:['Parar','Acelerar','Abrandar','Mudar de via'],
      correctAnswer:"Parar",
      reward:"../media/stickers/semaforo.svg",
      level: '',
      video:"Sinalizacao_Luminosa.mp4",
      tag:"4:47",
      pointsEarned:10,
    },
    {
      question:"Pergunta 2 so pq sim",
      image:"../media/stickers/acidente.svg",
      answers:['1', '2', '3', '4'],
      correctAnswer:"1",
      reward:"../media/stickers/acidente.svg",
      level: '',
      video:"Sinalizacao_Luminosa.mp4",
      tag:"5:01",
      pointsEarned:15,
    },
    {
      question:"Pergunta 3 vamos ver se da",
      image:"../media/stickers/carro_mao.svg",
      answers:['1','2','3','4'],
      correctAnswer:"1",
      reward:"../media/stickers/carro_mao.svg",
      level: '',
      video:"Sinalizacao_Luminosa.mp4",
      tag:"18:31",
      pointsEarned:20,
    },
]

let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
  perguntas.forEach((pergunta)=>{
    PopUpQuestions.add(pergunta.question, pergunta.image, pergunta.answers, pergunta.correctAnswer, pergunta.reward, pergunta.level, pergunta.video, pergunta.tag, pergunta.pointsEarned)
  })
})


