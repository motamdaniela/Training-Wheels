import * as Levels from '../models/levelModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
Levels.init()
Videos.init()
Tags.init()
PopUpQuestions.init()

let allLevels = Levels.getLevels();
let allVideos = Videos.getVideos();
let allTags = Tags.getTags();
let allPopUps = PopUpQuestions.getPopUp();

//const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []
const video = document.querySelector('video')
const myModal = document.getElementById('myModal')
const title = document.querySelector('#title')

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

//-------------perguntas pop up aparecem automaticamente no tempo associado
 video.addEventListener('timeupdate', () => {
   Questions()
 })

//--------------------lista de etiquetas associadas às tags
 function tagsList(){
  let string = ''
  allTags.forEach((tag)=>{
   string += `
   <a class="list-group-item list-group-item-action list-group-item tag">${tag.name}</a>
   `
  })
  document.querySelector(".tagsList").innerHTML = string
  let tagBtns = document.querySelectorAll('.tag')
  tagBtns = Array.from(tagBtns)
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click',()=>{
      allTags.forEach((alltag)=>{
        if(alltag.name === tagBtn.innerHTML){
          let time = convertTag(alltag.tag)
          console.log(time)
          video.currentTime = time
          video.play()
        }
      })
    })
  })
}
tagsList()

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function Questions(){
  let question = document.querySelector('#questionPopUp')
  let imagePopUp = document.querySelector('#imagePopUp')
  let answers = document.querySelector('#answersPopUp')
  allPopUps.forEach((allPopUp) => {
     let time = convertTag(allPopUp.tag)
     if (video.currentTime >= time && video.currentTime <= time + 0.2){
       console.log('it runs')
       question.innerHTML = allPopUp.question
       imagePopUp.src = allPopUp.image
       let randomBtns = shuffle(allPopUp.answers)
       console.log(randomBtns)
       answers.innerHTML = `
       <div class="row row-cols-2">
         <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[0]}" data-bs-dismiss="modal">${randomBtns[0]}</button></div>
         <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[1]}" data-bs-dismiss="modal">${randomBtns[1]}</button></div>
         <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[2]}" data-bs-dismiss="modal">${randomBtns[2]}</button></div>
         <div class="col zeBtns"><button type="button" class="btn btn-primary answerBtn zeBtns" id="${randomBtns[3]}" data-bs-dismiss="modal">${randomBtns[3]}</button></div>
       </div>
       `
      video.pause();
      OpenBootstrapPopup();
      CorrectAnswer();
    }
  })
}

//funcao que descobre se a resposta esta certa ou nao
function CorrectAnswer(){
  let answerBtns = document.querySelectorAll('.answerBtn');
  allPopUps.forEach((allPopUp) => {
    answerBtns.forEach((answerBtn) => {
      if(answerBtn.id === allPopUp.correctAnswer){
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#congratsModal").modal('hide');
            video.play();
            video.pause();
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${allPopUp.pointsEarned}points`
            let reward = document.querySelector('#reward')
            reward.src = allPopUp.reward
            $("#congratsModal").modal('show');
            setTimeout(() => {
              $("#congratsModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }else{
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#wrongModal").modal('hide');
            video.play();
            video.pause()
            $("#wrongModal").modal('show');
            setTimeout(() => {
              $("#wrongModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }
    })
  })
}


/*
//funcao que descobre se a resposta esta certa
function CorrectAnswer(){
  let answerBtns = document.querySelectorAll('.answerBtn');
  let popUps = PopUpQuestions.getPopUp()
  popUps.forEach((popUp) => {
    answerBtns.forEach((answerBtn) => {
      if(answerBtn.id === popUp.correctAnswer){
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#myModal").modal('hide');
            video.pause();
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${popUp.pointsEarned}points`
            let reward = document.querySelector('#reward')
            reward.src = popUp.reward
            $("#congratsModal").modal('show');
            setTimeout(() => {
              $("#congratsModal").modal('hide');
              video.play();
            }, 1500);
          }, 200);
        })
      }else{
        answerBtn.addEventListener('click', ()=>{
          $("#myModal").modal('hide');
          video.pause()
          setTimeout(()=>{
            $("#wrongModal").modal('show');
            setTimeout(()=>{
              $("#wrongModal").modal('hide');
              video.play()
            }, 1000);
          }, 200);
        })
      }
    })
  })
}
*/