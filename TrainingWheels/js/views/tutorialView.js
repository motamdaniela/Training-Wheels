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

document.querySelector('#modalBtn').addEventListener('click',()=>{
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
})

function PopUp(){
    if (video.currentTime == 287){
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          })
    }
}


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


//------------------

// MANIPULAÇÃO DE BOTÕES
document.querySelector('#btnDuration').addEventListener('click', () => {
    duration.innerHTML = video.duration
})

document.querySelector('#btnPlay').addEventListener('click', () => {
    video.play()
})

document.querySelector('#btnPause').addEventListener('click', () => {
    video.pause()
})

document.querySelector('#btnGotoStart').addEventListener('click', () => {
    video.currentTime = 0
    video.play()
})

document.querySelector('#btnGotoEnd').addEventListener('click', () => {
    video.currentTime = video.duration - 1
})

document.querySelector('#btnGotoFrame').addEventListener('click', () => {
    video.currentTime = +prompt("Qual a frame?")
})


document.querySelector('#btnSave').addEventListener('click', () => {
    const txtAnnotation = document.querySelector('#txtAnnotation').value

    const annotationObject = {
        frame: Math.trunc(video.currentTime),
        text: txtAnnotation
    }

    annotations.push(annotationObject)
    localStorage.setItem('annotations', JSON.stringify(annotations))
})

// EVENTOS DO VIDEO
video.addEventListener('volumechange', () => {
    if (video.volume > 0.5) {
        alert(`Be carefull with your ears! The current volume is ${video.volume}!`)
    }
})

video.addEventListener('ended', () => {
    alert(`Thanks for watching this video!`)
})

/*
video.addEventListener('timeupdate', () => {
    if (Math.trunc(video.currentTime) == annotations[0].frame) {
        alert(annotations[0].text)
    }
})
*/