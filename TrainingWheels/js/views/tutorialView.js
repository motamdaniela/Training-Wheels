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


const listTags = ['4:47', '5:01', '18:31']

//"links" para as tags no grouplist
for (const tagBtn of tagBtns){
  tagBtn.addEventListener('click', () => {
        let time = listTags[tagBtns.indexOf(tagBtn)]
        time = convertTag(time)
        video.currentTime = time;
        video.play()
    })
  }
  



  /*
  //--------------------funcao modals corresponde tag
  video.addEventListener('timeupdate', ()=>{
    perguntas.forEach((pergunta) => {
      let time = convertTag(pergunta.tag)
      if (video.currentTime >= time && video.currentTime <= time + 0.1){
        video.pause()
        document.querySelector('#imagePopUp').src = pergunta.image
        document.querySelector('#questionPopUp').innerHTML = pergunta.question
        OpenBootstrapPopup();
      }
    });
  })
  */

function Questions(){
  let popUps = PopUpQuestions.getPopUp
  popUps.forEach((popUp) => {
    let time = convertTag(popUp.tag)
    if (video.currentTime >= time && video.currentTime <= time + 0.1){
      video.pause();
      OpenBootstrapPopup();
    }
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
      pointsEarned:0,
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
      pointsEarned:0,
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
    pointsEarned:0,
  },
]

let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
  perguntas.forEach((pergunta)=>{
    PopUpQuestions.add(pergunta.question, pergunta.image, pergunta.answers, pergunta.correctAnswer, pergunta.reward, pergunta.level, pergunta.video, pergunta.tag, pergunta.pointsEarned)
  })
})


