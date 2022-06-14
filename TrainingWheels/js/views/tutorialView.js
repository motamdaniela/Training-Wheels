const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []


const video = document.querySelector('video')
const divVideo = document.querySelector('#divVideo')
const title = document.querySelector('#title')
const duration = document.querySelector('#duration')

// PREENCHIMENTO AUTOMATICO DO NOME DO FICHEIRO DE VIDEO
let videoName = video.src.split('/')[video.src.split('/').length - 1]
videoName = videoName.replaceAll('_',' ')
videoName = videoName.substr(0, videoName.indexOf('.'))
title.innerHTML = videoName

const listTags = ['4:47', '5:01', '18:31']

//"links" para as tags no grouplist
let tagBtns = document.querySelectorAll('#tag')
tagBtns = Array.from(tagBtns)
console.log(tagBtns)

for (const tagBtn of tagBtns){
  tagBtn.addEventListener('click', () => {
        let time = listTags[tagBtns.indexOf(tagBtn)]
        let minutes = +time.substr(0, time.indexOf(':'))
        let seconds = +time.substr(time.indexOf(':')+1)
        time = (minutes*60) + seconds
        video.currentTime = time;
        video.play()
    })
  }
  
  const myModal = document.getElementById('myModal')
  
  //pergunta pop up
  video.addEventListener("timeupdate", function(){
    /*
    if(this.currentTime >= 287 && this.currentTime <= 288){
    this.pause()
  }
  */
 popUps(video, listTags)
});

function OpenBootstrapPopup() {
  $("#myModal").modal('show');
}

function popUps(video, listTags){
  let timesList = [];
  for(const tag of listTags){
    let time = listTags[listTags.indexOf(tag)]
    let minutes = +time.substr(0, time.indexOf(':'))
        let seconds = +time.substr(time.indexOf(':')+1)
        time = (minutes*60) + seconds
        timesList.push(time)
      }
      timesList.forEach((time) =>{
        if (video.currentTime >= time && video.currentTime <= time + 1){
          OpenBootstrapPopup();
        }
      })
}

let btn = document.querySelector('#btn')
let imagePopUp = document.querySelector('#imagePopUp')
let imageSrc = im.src.split('/')[video.src.split('/').length - 1]
btn.addEventListener('click', ()=>{
  imagemPopUp.src =
})
    
    //-------Perguntas
    
    let perguntas = [
      {
    question:"Qual deve ser o comportamento do condutor perante esta situação?",
    image:"/",
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
    image:"",
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
    image:"",
    answers:[],
    correctAnswer:"",
    reward:"",
    level:0,
    video:"",
    tag:"18:31",
    pointsEarned:0,
  },
]