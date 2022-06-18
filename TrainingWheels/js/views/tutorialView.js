import * as User from '../models/userModel.js';
import * as Levels from '../models/levelModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
import * as Progress from '../models/progressModel.js';
User.init()
Levels.init()
Videos.init()
Tags.init()
PopUpQuestions.init()
Progress.init()

let allLevels = Levels.getLevels();
let allVideos = Videos.getVideos();
let allTags = Tags.getTags();
let allPopUps = PopUpQuestions.getPopUp();
let currentUser = User.getUserLogged()


//const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []
const myModal = document.getElementById('myModal');
let video = document.querySelector('video');
let title = document.querySelector('#title');
let comments = ''


function renderPage(){
  let lvlTitle = document.querySelector('#lvlTitle')
  let progress = Progress.getProgress()
  
  progress.forEach((progres) => {
    if(currentUser.username === progres.username){
      let currentLvl = progres.currentLvl
      lvlTitle.innerHTML = currentLvl
      
      let listVideos = []
      allVideos.forEach((video) => {
        if(video.level === currentLvl){
          listVideos.push(video);
        }
      })

      let divPages = document.querySelector(".divPages")
      let string = ''
      listVideos.forEach((listVideo) => {
        string += `
        <button type="button" id="${listVideo.name}" class="btn btn BtnUp"> <b>${listVideo.name}</b> </button>
        `
      })
      divPages.innerHTML = string

    }
  })
}
renderPage()

function renderTab(){

}

/*
let btn3 = document.querySelector('.field3')
btn3.addEventListener('click', function(){
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.add('hide');
    field3.classList.remove('hide');
    field4.classList.add('hide');
})
*/





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
  let videoTitle = document.querySelector("#title").innerHTML
  let string = ''
  allTags.forEach((allTag)=>{
    console.log(allTag.video)
    if(allTag.video === videoTitle){
      string += `
      <a class="list-group-item list-group-item-action list-group-item tag">${allTag.name}</a>
      `
    }
  })
  document.querySelector(".tagsList").innerHTML = string
  let tagBtns = document.querySelectorAll('.tag')
  tagBtns = Array.from(tagBtns)
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click',()=>{
      allTags.forEach((alltag)=>{
        if(alltag.name === tagBtn.innerHTML){
          let time = convertTag(alltag.tag)
          video.currentTime = time
          video.play()
        }
      })
    })
  })
}
tagsList()

//-----------funcao que baralha(para as respostas)
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//-------------funcao para abrir a modal de perguntas pop up automaticamente
function Questions(){
  let question = document.querySelector('#questionPopUp')
  let imagePopUp = document.querySelector('#imagePopUp')
  let answers = document.querySelector('#answersPopUp')
  let cluesN = document.querySelector("#cluesN")
  let pointsN = document.querySelector("#pointsN")
  allPopUps.forEach((allPopUp) => {
    if(allPopUp.video === title.innerHTML){
      let time = convertTag(allPopUp.tag)
      if (video.currentTime >= time && video.currentTime <= time + 0.2){
        console.log('it runs')
        question.innerHTML = allPopUp.question
        imagePopUp.src = allPopUp.image
        cluesN.innerHTML = currentUser.clues + ' pistas'
        pointsN.innerHTML = currentUser.points + ' pontos'
        let randomBtns = shuffle(allPopUp.answers)
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
       CorrectAnswer(allPopUp.correctAnswer, allPopUp.pointsEarned, allPopUp.reward);
     }
    }
  })
}

//funcao que descobre se a resposta esta certa ou nao
function CorrectAnswer(gotAnswer, gotPoints, Reward){
  let answerBtns = document.querySelectorAll('.answerBtn');
  allPopUps.forEach((allPopUp) => {
    answerBtns.forEach((answerBtn) => {
      if(answerBtn.id === gotAnswer){
        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            $("#congratsModal").modal('hide');
            video.play();
            video.pause();
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${allPopUp.pointsEarned} pontos`
            let reward = document.querySelector('#reward')

            reward.src = allPopUp.reward
            currentUser.points += gotPoints
            currentUser.stickersLvl.push(Reward)

            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
            User.attUserOnStorage(currentUser)


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




//----------------- js paginas
let btn1 = document.querySelector('.field1')
btn1.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.remove('hide');
    field2.classList.add('hide') ;
    field3.classList.add('hide');
    field4.classList.add('hide');
})

let btn2 = document.querySelector('.field2')
btn2.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.remove('hide');
    field3.classList.add('hide');
    field4.classList.add('hide');
})

let btn3 = document.querySelector('.field3')
btn3.addEventListener('click', function(){
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.add('hide');
    field3.classList.remove('hide');
    field4.classList.add('hide');
})

let btn4 = document.querySelector('.field4')
btn4.addEventListener('click', function(){
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.add('hide');
    field3.classList.add('hide');
    field4.classList.remove('hide');
})
