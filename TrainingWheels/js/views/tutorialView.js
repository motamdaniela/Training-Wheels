@ -1,26 +1,26 @@
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
  tagBtn.addEventListener('click', () => {
        let time = listTags[tagBtns.indexOf(tagBtn)]
        let minutes = +time.substr(0, time.indexOf(':'))
        let seconds = +time.substr(time.indexOf(':')+1)
@ -28,82 +28,81 @@ for (const tagBtn of tagBtns){
        video.currentTime = time;
        video.play()
    })
}

const myModal = document.getElementById('myModal')
const modalBtn = document.querySelector('#modalBtn')

//pergunta pop up
video.addEventListener("timeupdate", function(){
  if(this.currentTime >= 287) {
    let pausa=this.pause()
    $('#myModal').on('shown.bs.modal', function () {
      $('#myModal').modal('show');
    })

    this.pause()
    OpenBootstrapPopup();
  }
  function OpenBootstrapPopup() {
    $("#myModal").modal('show');
  
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


/*
function popUps(){
    let timesList = [];
    for(const tag of listTags){
        let time = listTags[tagBtns.indexOf(tag)]
        let minutes = +time.substr(0, time.indexOf(':'))
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
        if (video.currentTime === time){
            video.pause()
            $("#myModal").modal()
      }
      timesList.forEach((time) =>{
        if (video.currentTime >= time && video.currentTime <= time + 1){
          OpenBootstrapPopup();
        }
    })
      })
}

popUps()*/

/*
  <div id="addAdminModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
  
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Novo admin</h4>
        </div>
        <form class="formSignUp">
              <!-- user -->
              <div class="col-12">
                  <!-- div vazia que conterá uma mensagem de erro caso login sem sucesso -->
                  <div id="errorSlot"></div>
                  <label for="nome" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="name" required>
                  <label for="nome" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" required>
                  <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
                <label for="pass" class="form-label">Password</label>
                <input type="password" id="pass" class="form-control" aria-describedby="passwordHelpBlock">
                <label for="passCheck" class="form-label">Confirmar Password</label>
                <input type="password" id="passCheck" class="form-control" aria-describedby="passwordHelpBlock">
                <!-- butao submit -->
                <button id="createBtn" type="submit" class="btn btn-primary">Create</button>
              </div> 
      </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
  
    </div>
  </div>
*/
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