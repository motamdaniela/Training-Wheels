import * as User from "../models/userModel.js";
import * as Review from "../models/reviewsModel.js";
import * as Progress from "../models/progressModel.js";
import * as Levels from "../models/levelModel.js";
import * as Videos from "../models/videoModel.js";
import * as PopUps from "../models/popupModel.js";

User.init()
Review.init()
Progress.init()
Levels.init()
Videos.init()
PopUps.init()

function pageView(){
  
    let result=`
    <img id="fundo" src="../media/images/imagem.svg">
    <div class="buttons">
      <a  href="login.html">
        <button type="button" id="entrar" class="btn btn-outline ">Entrar</button>
      </a>
      <a  href="signUp.html">
        <button type="button" id="registar" class="btn btn">Registar</button>
      </a>
      
    </div>
    <video id="video" src="../media/videos/VideoPromocional.mp4" controls></video>
    
    
    <div class="tutorial" >
      <p id="tituloTutorial">Como usar Training Wheels</p>
      <img id="imgTutorial" src="../media/images/inicio_tutorial.svg">
    </div>
    `
    // <img id="fundo3" src="../media/images/fundo_logado.svg">
    let result2=''
    let result3=''
    if (User.isLogged()){
      // let coisoo=document.querySelector('#fundo')
      // coisoo.src ="../media/images/fundojalog.svg";
      // coisoo.innerHTML+=`<img id="fundo3" src="../media/images/fundo_logado.svg"></img>`
        
        result=`<img id="fundo2" src="../media/images/fundojalog.svg">
        <div id="topo"> 
        <img id="bemVindo" src="../media/images/bemvindo.svg">

          <div id="coisas">
            <div id="progresso">

            <div class="container_bar">
                <div class="layer1">
                  <img id="barra" src="../media/images/linha.svg">
                </div>
                <div class="layer2">
                    
                </div>
            </div>

              <fieldset id="continuar">
              <div class="row continuar">
                <div class="col-9"><p id="lvlNameInput">nivel</p></div>
                <div class="col"><i data-feather="play-circle" class="goIcon"></i></div>
              </div>
              </fieldset>

            </div>
            <fieldset id="nextSticker">
            </fieldset>
          </div>

        </div>
        <div id="baixo">
        <div id="quadroLideres" class="divInicio">
          <fieldset class="titulo">
          <h2>Quadro de líderes</h2>
          <i class="nav-icon" data-feather="bar-chart"></i>
        </fieldset>
          <table class="table table-borderless" id="ranking">
          <thead>
            <tr>
              <th id="top3" scope="col">Top 3</th>
              <th id="nometop3" scope="col">Nome</th>
              <th id="respostastop3" scope="col">Respostas</th>
            </tr>
          </thead>
          <tbody id='body_rank'>
            
          </tbody>
        </table>
      </div>
      <div id="avalDiv" class="divInicio">
        <fieldset class="titulo">
          <h2>Avaliações</h2>
          <div>`
          for (let i=0; i< media(); i++){
            result+=`<i class="star starFilled" data-feather="star"></i>`
          }
          for(let i=media(); i< 5; i++){
            result+=`<i class="star" data-feather="star"></i>`
          }

          result+=`
          </div>
        </fieldset>
        <div id="commentDiv" class="carousel slide " data-ride="carousel">
          <div id="reviewsCom" class="carousel-inner ">
          
          </div>
        </div>
        </div>
      
      <div id="reviewsDiv" class="divInicio">
        <fieldset class="titulo">
          <h2>Avalia-nos!</h2>
        </fieldset>
        <fieldset id="reviews">
          <div class="form">
            <textarea class="form-control" placeholder="Deixe aqui a sua avaliação!" style="height: 150px" id="commentReview"></textarea>
          </div>
          <div id="avaliacoes">
            <div class="input-group flex-nowrap" id="num">
              <span class="input-group-text" id="addon-wrapping"><i class="fa-regular fa-star"></i></span>
              <input type="number" class="form-control" min="1" max="5" placeholder="ex: 5" aria-describedby="addon-wrapping" id="starReview">
            </div>  
            <button type="button" id="avaliar" class="btn btn-primary">Avaliar</button>
          </div>
        </fieldset>
      </div>
      
      
        `
        let nomes=rankingOrder()
        
        let users=User.getUsers()
        let cont=0;
        for (let nome of nomes) {
          let user = users.find(user => nome.name === user.username);
          if(user.type == 'user'){
            cont+=1;
          if(cont<4 && nome.name==user.username ){
            result2+=`<tr>
          <td scope="row"><img src=${user.photo}></td>
          <td>${user.name}</td>
          <td class="respostas"><i class="certo" data-feather="check"></i> ${user.ranking[0]}<i class="errado" data-feather="x"></i>${user.ranking[1]}</td>
        </tr>
          `
          
          }
          }
        }
          
        let reviews=Review.getReviews()
        
        if(reviews.lenght==0){
          result3+=`<fieldset id="comentarios">
          <div>
            <img id="perfilCom" src="../media/images/default.svg">
            <div>
              <p><strong></strong></p>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
            </div>
          </div>
          <p id="comentario">Avaliações não disponíveis</p>
        </fieldset>
          `
            
          }else{
            for(let review of reviews){
              result3+=`
              <div class="carousel-item">
                <div class="carousel-caption">
                  <fieldset class="comentarios">
                    <div class="topo">
                      <img class="perfilCom" src="${review.photo}">
                      <div class="nomeStar">
                        <p><strong>${review.username}</strong></p>
                        <div>`

                        for (let i=0; i< review.rating; i++){
                          result3+=`<i class="star starFilled" data-feather="star"></i>`
                        }
                        for(let i=review.rating; i< 5; i++){
                          result3+=`<i class="star" data-feather="star"></i>`
                        }

                        result3+=`
                        </div>
                      </div>
                    </div>
                    <p class="comentario">${review.txtReview}</p>
                  </fieldset>
                </div>
              </div>
            `}
          }  
        }
        
        
  
    document.querySelector('#content').innerHTML += result;
    document.querySelector('#body_rank').innerHTML = result2;
    document.querySelector('#reviewsCom').innerHTML = result3;
    let item=document.querySelector('.carousel-item')
    item.classList.add('active');
    
}
pageView()
feather.replace()

function media(){
  let reviews = Review.getReviews()
  let allRatings = []
  reviews.forEach((review) => {
    allRatings.push(+review.rating)
  })

  let media = allRatings.reduce((a, b) => a + b, 0) / allRatings.length;
  media = Math.round(media)

  return media
}



let avaliarBtn=document.querySelector('#avaliar');
avaliarBtn.addEventListener("click",()=>{
  let comment=document.querySelector('#commentReview').value;
  let starsN=document.querySelector('#starReview').value;
  let userLog=User.getUserLogged().username
  let userPhoto=User.getUserLogged().photo
  Review.add(userLog, comment, starsN, userPhoto)
  window.location.reload()


  let allStars = document.querySelectorAll('.star')
  allStars = Array.from(allStars)
  for (let i=0; i< starsN; i++){
    allStars[i].addClass('starFilled')
  }




})

function rankingOrder(){
  let array=[]
  let users=User.getUsers()
  for(let user of users){
    let respostasCertas= +user.ranking[0]
    let respostasErradas= +user.ranking[1]
    let total=respostasCertas+respostasErradas
    let conta
    if(total==0){
      conta=0
    }else{
      conta=respostasCertas/total
    }
    let coiso=user.username
    let idk={
      name:coiso,
      rank:conta

    }
    array.push(idk)
  }
  array.sort(function(a, b) { return (b.rank-a.rank);});

  return array

}
feather.replace()

let currentUser = User.getUserLogged()

function ProgressBar(){
  let layer2 = document.querySelector('.layer2')
  let levels = Levels.getLevels()
  let string = ''

  levels.forEach((level) => {
    string += `<label title="${level.name}"><i id="${level.name}" class="aLvl red" data-feather="circle"></i></label>`
  })
  layer2.innerHTML = string
  feather.replace()

  
    let goBtns = document.querySelectorAll('.aLvl');
    goBtns = Array.from(goBtns)
    goBtns.forEach((goBtn)=>{
      goBtn.addEventListener('click',()=>{
  
        let progress = Progress.getProgress()
        progress.forEach((progres)=>{
          if (currentUser.username === progres.username){
  
            progres.currentLvl = goBtn.id
  
            if(progres.levelsStarted.includes(goBtn.id) == false){
              progres.levelsStarted.push(goBtn.id)
            }
  
            Progress.attProgressOnStorage(progres)
  
          }
        })
        
        setTimeout(() => {
          location.replace("./tutorial.html");
        }, 500);
      })
    })


}
ProgressBar()




//funcao que verifica se o utilizador tem algum nivel feito ou a meio
function lvlsDone() {
  let progress = Progress.getProgress()
  
  let listLevels = document.querySelectorAll('.aLvl')
  listLevels = Array.from(listLevels)
  
  progress.forEach((progres) => {
    if(progres.username === currentUser.username){
      let currentProgress = progres
      let levelsDone = currentProgress.levelsDone
      let levelsStarted = currentProgress.levelsStarted
      

      listLevels.forEach((listLevel)=>{
        if(levelsStarted.includes(listLevel.id)){
         $(listLevel).attr("class", "");
         $(listLevel).attr("class", "yellow");
        }
      })

      listLevels.forEach((listLevel)=>{
        if(levelsDone.includes(listLevel.id)){
         $(listLevel).attr("class", "");
         $(listLevel).attr("class", "green");
        }
      })
      
    }
  })
 }
lvlsDone()

//funcao para a barra que aparece de baixo da barra de progresso
function currentLevel(){
  let videos = Videos.getVideos()
  let progress = Progress.getProgress()

  document.querySelector('.goIcon').addEventListener('click',()=>{
    setTimeout(() => {
      location.replace("./tutorial.html");
    }, 500);
  })

  progress.forEach((progres) => {
    let currentProgress = progres

    videos.forEach((video)=>{
      if(currentProgress.currentLvl === video.level){
        document.querySelector('#lvlNameInput').innerHTML = video.level
      }else{
        document.querySelector('#lvlNameInput').innerHTML = videos[0].level
      }
    })
  })

}
currentLevel()

function nextSticker(){
  let popUps = PopUps.getPopUp()
  let stickerFld = document.querySelector('#nextSticker')
  let progress = Progress.getProgress()
  
  stickerFld.innerHTML = `<img src="../media/images/proximosticker.svg" width="70%"><img src="../media/stickers/semaforo.svg" class="dark height="50px"">`
  
  progress.forEach((progres) => {
    let currentProgress = progres
    let currentVideo = currentProgress.currentVideo

  
    popUps.forEach((popUp) => {
      if(popUp.video === currentVideo){
        if(currentProgress.questionsDone.includes(popUp.question)){

        }else{
          document.querySelector('.dark').src = popUp.reward
        }
      }
    })
  })
}
nextSticker()

