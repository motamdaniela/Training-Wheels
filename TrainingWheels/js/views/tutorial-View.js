import * as User from '../models/userModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
import * as Progress from '../models/progressModel.js';
import * as Comments from '../models/commentsModel.js';
User.init()
Videos.init()
Tags.init()
PopUpQuestions.init()
Progress.init()
Comments.init()

let allVideos = Videos.getVideos();
let allTags = Tags.getTags();
let allPopUps = PopUpQuestions.getPopUp();
let currentUser = User.getUserLogged()
let progress = Progress.getProgress()
let comments = Comments.getComments();

let video = ''
let title = ''

let currentProgress = ''
for (let progres of progress){
  if (progres.username === currentUser.username){
    currentProgress = progres
    break;
  }
}
const myModal = document.getElementById('myModal');

//funcao que cria a pagina
function renderPage(){
  let lvlTitle = document.querySelector('#lvlTitle')
  
  progress.forEach((progres) => {
    if(currentUser.username === progres.username){
      let currentLvl = progres.currentLvl
      lvlTitle.innerHTML = currentLvl
      
      let listVideos = []
      allVideos.forEach((allVideo) => {
        if(allVideo.level === currentLvl){
          listVideos.push(allVideo);
        }
      })

      let divPages = document.querySelector(".allpagebtns")
      let string = ''
      listVideos.forEach((listVideo) => {
        string += `
        <div class="btn-group divPages" role="group" aria-label="First group">
          <button type="button" id="${listVideo.name}" class="btn btn BtnUp"> <b>${listVideo.name}</b> </button>
        </div>
        `
      })
      divPages.innerHTML = string

      defaultTab(listVideos) 
      let allBtns = document.querySelectorAll('.BtnUp')
      allBtns = Array.from(allBtns)
      allBtns.forEach((allBtn) => {
        allBtn.addEventListener('click',()=>{
          listVideos.forEach((listVideo) => {
            if(allBtn.id === listVideo.name){
              generateTab(listVideo)
            }
          })
        })
      })
    }
  })
}
renderPage()


//funcao que gera um fieldset(tab) para cada video
function generateTab(videoObj) {
  let divTabs = document.querySelector('#divTabs')
  let string = ''
  let nomeVid=videoObj.name.replace(' ','_')

    string = `
    <fieldset id="${nomeVid}" class="aTab">
              <div class="row">
                <div>
                  <div class="container">
                  <div class="row">
                    <div class="col-7">
                      <h2 id="title">${videoObj.name}</h2>
                      <div class="divVideo">
                        <video src="${videoObj.url}" controls></video>
                      </div>
                      <div class="divLikes">
                      
                      </div>
                    </div>
                    <div class="col">
                      <img id="etiquetas" src="../media/images/etiquetas.svg" height="30px">
                      <div class="list-group tagsList">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br><br>
              <div class="row">
                <div>
                  <div class="container">
                  <div class="row">
                    <div class="col-8">
                      <img id="comentariosTitle" src="../media/images/comentarios.svg" height="30px">
                      <fieldset id="commentsField">
                        Este vídeo ainda não tem comentários.
                      </fieldset>
                    </div>
                    <div class="col">
                      <fieldset class="leaveComentField">
                        
                      </fieldset>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </fieldset>
    `
    divTabs.innerHTML = string
    feather.replace()
    title = document.querySelector('#title');
    
    video = document.querySelector('video');
    tagsList(videoObj.name)
    renderComments()
    commentShow()
    likesShow()
    renderLikes()
    addLike()
    video.addEventListener("timeupdate", () => {
      Questions()
      updateProgress()
    })
    feather.replace()
    addLike()
    comentarButao()
    renderLikes()
  }
  

//funcao que gera um tab por default do ultimo vídeo que o utilizador estava a ver(caso seja deste nível)
function defaultTab(listVideos) {
  listVideos.forEach((listVideo)=>{
    if(currentProgress.currentVideo === listVideo.name){
      generateTab(listVideo)
      video = document.querySelector('video');
      video.currentTime = currentProgress.currentTag
    }
    else{
      generateTab(listVideos[0])
    }

  })
}


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

//--------------------lista de etiquetas associadas às tags
 function tagsList(videoName){

  let string = ''
  allTags.forEach((allTag)=>{
    if(allTag.video === videoName){
      string += `
      <a class="list-group-item list-group-item-action list-group-item tag">${allTag.name}</a>
      `
    }
  })
  document.querySelector('.tagsList').innerHTML = string
  let tagBtns = document.querySelectorAll('.tag')
  tagBtns = Array.from(tagBtns)
  tagBtns.forEach((tagBtn) => {
    tagBtn.addEventListener('click',()=>{
      allTags.forEach((allTag)=>{
        if(allTag.name === tagBtn.innerHTML){
          let time = convertTag(allTag.tag)
          video.currentTime = time
          video.play()
        }
      })
    })
  })
}

function commentShow(){
  let result=''
  result=`<label>Deixe um comentário!</label>
  <div class="form-floating">
    <textarea id="commentTextArea" class="form-control" placeholder="Leave a comment here" style="height: 150px; resize: none;"></textarea>
    
  </div>
  <button type="button" class="btn btn-primary" id="commentBtn" data-bs-dismiss="modal">Comentar</button>`
  document.querySelector('.leaveComentField').innerHTML=result
}

function likesShow(){
  
  let result2=''
  title=document.querySelector('#title').innerHTML
  allVideos.forEach(function(video){ 
    if(video.name==title){
      result2=`<button class="caralho"><i id="heartIcon" data-feather="heart"></i></button><p id="likesN">${video.likes}</p>`
      let ot=document.querySelector('.divLikes')
      
      ot.innerHTML=result2
    }
   })
  
}

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
    if(allPopUp.video === title){
      let time = convertTag(allPopUp.tag)
      if (video.currentTime >= time && video.currentTime <= time + 0.3){

        //if(currentProgress.questionsCorrect.includes(allPopUp.question)){

        //}else{
          question.innerHTML = allPopUp.question
          imagePopUp.src = allPopUp.image
          
          cluesN.innerHTML = currentUser.clues
          pointsN.innerHTML = currentUser.points
  
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
        CorrectAnswer(allPopUp.question,allPopUp.correctAnswer, allPopUp.pointsEarned, allPopUp.reward);
        //}

    }
  }
})
}


//funcao que descobre se a resposta esta certa ou nao
function CorrectAnswer(gotAnswer, gotPoints, Reward){
  let answerBtns = document.querySelectorAll('.answerBtn');
  allPopUps.forEach((allPopUp) => {
    answerBtns.forEach((answerBtn) => {
      console.log(answerBtn.id, gotAnswer)

      answerQuestion()

      if(answerBtn.id === gotAnswer){


        answerBtn.addEventListener('click',()=>{
          setTimeout(() => {
            video.play();
            video.pause();
            let points = document.querySelector('#pointsEarned')
            points.innerHTML = `+ ${allPopUp.pointsEarned} pontos`
            let reward = document.querySelector('#reward')

            reward.src = allPopUp.reward
            currentUser.points += gotPoints
            currentUser.stickersLvl.push(Reward)

            currentUser.ranking[0] += 1
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
            video.play();
            video.pause()
            $("#wrongModal").modal('show');
            setTimeout(() => {
              $("#wrongModal").modal('hide');
              video.play();
              currentUser.ranking[1] += 1
              sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
              User.attUserOnStorage(currentUser)
            }, 1500);
          }, 200);
        })
      }
    })
  })
}

/*
function CorrectAnswer(Question, gotAnswer, gotPoints, Reward){
  console.log(gotPoints)
  let answerBtns = document.querySelectorAll('.answerBtn');
  answerBtns = Array.from(answerBtns)
  for(let allPopUp of allPopUps){
    for(let answerBtn of answerBtns){
      if(answerBtn.id === gotAnswer){
        answerBtn.addEventListener('click',()=>{
          let points = document.querySelector('#pointsEarned')
          points.innerHTML = `+ ${allPopUp.pointsEarned} pontos`
          let reward = document.querySelector('#reward')
          
          let pointsContent = document.querySelector('.forPoints')
          
          if (currentProgress.questionsDone.includes(Question)==true){
            pointsContent.classList.add('hide');
            reward.src = Reward
            currentUser.stickersLvl.push(Reward)
            
            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
            User.attUserOnStorage(currentUser)
            currentProgress.questionsCorrect.push(Question)
            
            Progress.attProgressOnStorage(currentProgress)
            
            setTimeout(() => {
              $("#myModal").modal('hide');
              video.pause();
              $("#congratsModal").modal('show');
              setTimeout(() => {
                $("#congratsModal").modal('hide');
                video.play();
              }, 1500);
            }, 200);
          }else{
            console.log(Question)
            console.log(currentProgress.questionsDone)
            console.log(currentProgress.username)
            // console.log(gotPoints)
            // let pontosGanhos=currentUser.points 
            // console.log(pontosGanhos)
            // pontosGanhos+= gotPoints
            // console.log(pontosGanhos)
            currentUser.points += gotPoints
            console.log(currentUser.points)
            reward.src = Reward
            currentUser.stickersLvl.push(Reward)
  
            sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
            User.attUserOnStorage(currentUser)
            currentProgress.questionsCorrect.push(Question)
            Progress.attProgressOnStorage(currentProgress)
            
            setTimeout(() => {
              $("#myModal").modal('hide');
              video.pause();
              $("#congratsModal").modal('show');
              setTimeout(() => {
                $("#congratsModal").modal('hide');
                video.play();
              }, 1500);
            }, 200);
          }
                    
        })
        answerQuestion()
      break;
    }else{
      answerBtn.addEventListener('click',()=>{
        setTimeout(() => {
          $("#myModal").modal('hide');
          video.play();
          video.pause()
          $("#wrongModal").modal('show');
          setTimeout(() => {
            $("#wrongModal").modal('hide');
            video.play();
            }, 1500);
          }, 200);
        })
        answerQuestion()
        break;
      }
      
    }    
    break;}
  }
  */
  
  //funcao que coloca a pergunta na lista do progresso como pergunta ja feita
  function answerQuestion(){
    progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let doneQuestions = Array.from(progres.questionsDone)
      let question = document.querySelector('#questionPopUp').innerHTML
      if(doneQuestions.includes(question)){
        
      }else{
        doneQuestions.push(question)
        progres.questionsDone = doneQuestions
        
        sessionStorage.setItem('progress', JSON.stringify(progres))
        Progress.attProgressOnStorage(progres)
      }
    }
  })
}

//chama funcao useClue com o botao associado
$('#myModal').on('shown.bs.modal', function () {
  let clueBtn = document.querySelector('#clueBtn')
  allPopUps.forEach((allPopUp) => {
    if (allPopUp.question == document.querySelector('#questionPopUp').innerHTML){
      clueBtn.addEventListener('click', () =>{
        useClue(allPopUp)
        return false
      })
    }
  })
});

//funcao para usar pistas
function useClue(popUpObj){
    if(!!currentUser.clues == !!true){
      let wrongQuestions = Array.from(popUpObj.answers)
      wrongQuestions = wrongQuestions.filter((i) => i !== popUpObj.correctAnswer)
      wrongQuestions = shuffle(wrongQuestions)

      let wrongBtn = document.getElementById(wrongQuestions[0])
      wrongQuestions = []
      wrongBtn.disabled = true
      clueBtn.disabled = true

      currentUser.clues -= 1
      sessionStorage.setItem('loggedUser', JSON.stringify(currentUser))
      User.attUserOnStorage(currentUser)

      document.querySelector('#cluesN').innerHTML = currentUser.clues
    }else if(!!currentUser.clues == !!false){
      alert('Nao tens nenhuma pista!')
    }
}



//funcao que atualiza o progresso a medida que o utilizador vai avancando no tutorial
function updateProgress() {
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      if(video.paused){
        progres.currentVideo = title.innerHTML
        progres.currentTag = video.currentTime

        sessionStorage.setItem('progress', JSON.stringify(progres))
        Progress.attProgressOnStorage(progres)

      }else if(video.currentTime >= video.duration - 40){
        let doneVideos = Array.from(progres.videosDone)
        if(doneVideos.includes(title.innerHTML)){

        }else{
          doneVideos.push(title.innerHTML)
          progres.videosDone = doneVideos
  
          sessionStorage.setItem('progress', JSON.stringify(progres))
          Progress.attProgressOnStorage(progres)
        }
      }
    }
  })
}



//funcao para gostar video


function renderLikes(){
  progress.forEach((progres) =>{
    if(progres.username==currentUser.username){
      
      let arrayVids=progres.likedVideos
      if(arrayVids.includes(title)){
        $('#heartIcon').attr("class", "heartLiked")
      }}
    })
  let likesN = document.querySelector('#likesN')
  
  allVideos.forEach((allVideo) =>{
    if(allVideo.name === title){
      likesN.innerHTML = allVideo.likes
    }
  })

}
// likesShow()
// y


//funcao para comentar
function leaveComment(){
  
  let title = document.querySelector('#title').innerHTML;
  
  let commentTxt = document.querySelector('#commentTextArea').value
  let username=currentUser.username
  let photo=currentUser.photo
  Comments.add(title,username,commentTxt,photo)
}
function comentarButao(){
  let btn = document.querySelector('#commentBtn')
  btn.addEventListener('click', () =>{
    
    leaveComment()
    renderComments()
  })

}


//funcao para mostrar os comentarios
function renderComments(){
  
  let title = document.querySelector('#title').innerHTML;
  let string = ''
  // if (comments.length <= 0){
  //   Comments.add(title)
  // }

  comments.forEach(function(comment){
    if(comment.video == title){
      // comment.usernames.forEach((username)=>{
      //   let index = comment.usernames.indexOf(username)
        string += `
        <div class="aComment">
          <div class="row">

            <div class="col-2">
              <img class="nav-icon" id="profile" src="${comment.profilePhoto}">
            </div>
            <div class="col-5">
              <p>${comment.usernames}</p>
            </div>
          </div>    
            <fieldset class ="fldComment">
              <p>${comment.txtComments}</p>
            </fieldset>
        </div>
        `
      // })
      document.querySelector('#commentsField').innerHTML = string
    }
  })
}
function addLike(){
  let filhe=document.querySelector('.caralho')
  filhe.onclick = () => {
    
    title=document.querySelector('#title').innerHTML
    allVideos.forEach(function(allVideo){
      if(allVideo.name == title){
        progress.forEach((progres) =>{
          if(progres.username==currentUser.username){
            let arrayVids=progres.likedVideos
            if(arrayVids.includes(title)){
              allVideo.likes -= 1
              $('#heartIcon').attr("class", "")
              let ok =document.querySelector("#likesN").innerHTML
              let ok2 =+ok
              ok2-=1
              document.querySelector("#likesN").innerHTML=ok2
              let ola=progres.likedVideos.filter(function(value){ return value !== title;})
              
              progres.likedVideos=ola
              Progress.attProgressOnStorage(progres)
            }else{
              allVideo.likes += 1
              $('#heartIcon').attr("class", "heartLiked")
              let ok =document.querySelector("#likesN").innerHTML
              let ok2 =+ok
              ok2+=1
              document.querySelector("#likesN").innerHTML=ok2
              progres.likedVideos.push(title)
              Progress.attProgressOnStorage(progres)
            }
            
          } 
        })
      }
      Videos.attVideosOnStorage(allVideo)
      
    })
  }
}



/*
<div class="aComment">
    <div class="row">

      <div class="col-2">
        <img class="nav-icon" id="profile" src="../media/images/default.svg">
      </div>
      <div class="col-5">
        <p>username</p>
      </div>
    </div>    
      <fieldset class ="fldComment">
        <p>comment</p>
      </fieldset>
  </div>
*/
feather.replace()

/*
function CorrectAnswer(gotAnswer, gotPoints, Reward){
  let answerBtns = document.querySelectorAll('.answerBtn');
  allPopUps.forEach((allPopUp) => {
    answerBtns.forEach((answerBtn) => {

      answerQuestion()

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
*/