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

const TagBtns = document.querySelectorAll('.tagBtn')

foreach(TagBtns, () => {})

document.querySelector('#tag1').addEventListener('click', () => {
    let minutes = +listTags[0].substr(0, listTags[0].indexOf(':')); 
    let seconds = +listTags[0].substr(listTags[0].indexOf(':')+1);
    let time = (minutes*60) + seconds
    video.currentTime = time;
    video.play()
})
document.querySelector('#tag2').addEventListener('click', () => {
    video.currentTime = video.duration - (video.duration/2)
    video.play()
})
document.querySelector('#tag3').addEventListener('click', () => {
    video.currentTime = video.duration - (video.duration/4)
    video.play()
})



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