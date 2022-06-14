const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []

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


video.addEventListener("timeupdate", function(){
  popUps(video, listTags)
});


function popUps(video, listTags){
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


const listTags = ['4:47', '5:01', '18:31']

//"links" para as tags no grouplist
for (const tagBtn of tagBtns){
  tagBtn.addEventListener('click', () => {
        let time = listTags[tagBtns.indexOf(tagBtn)]
        let minutes = +time.substr(0, time.indexOf(':'))
        let seconds = +time.substr(time.indexOf(':')+1, time.length)
        time = (minutes*60) + seconds
        video.currentTime = time;
        video.play()
    })
  }
  
  
  
  //pergunta pop up



/*
let btn = document.querySelector('#btn')
let imageTest = document.querySelector('#imageTest')
btn.addEventListener('click', ()=>{
  imageTest.src = '../media/stickers/semaforo.svg'
})
*/

video.addEventListener('timeupdate', ()=>{
  modalPopUp(perguntas, video)
})

function modalPopUp(perguntas, video){
  perguntas.forEach((pergunta) => {
    let time = convertTag(pergunta.tag)
    if (video.currentTime >= time && video.currentTime <= time + 0.1){
      const imagePopUp = document.querySelector('#ImagePopUp')
      imagePopUp.src = pergunta.image
    }
  });
}
    
//-------Perguntas
    
    let perguntas = [
      {
    question:"Qual deve ser o comportamento do condutor perante esta situação?",
    image:"../media/stickers/semaforo.svg",
    answers:[],
    correctAnswer:"",
    reward:"",
    level:0,
    video:"",
    tag:"4:47",
    pointsEarned:0,
  },
  {
    question:"",
    image:"../media/stickers/acidente.svg",
    answers:[],
    correctAnswer:"",
    reward:"",
    level:0,
    video:"",
    tag:"5:01",
    pointsEarned:0,
  },
  {
    question:"",
    image:"../media/stickers/carro_mao.svg",
    answers:[],
    correctAnswer:"",
    reward:"",
    level:0,
    video:"",
    tag:"18:31",
    pointsEarned:0,
  },
]