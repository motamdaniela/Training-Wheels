const annotations = localStorage.annotations ? JSON.parse(localStorage.annotations) : []


const video = document.querySelector('video')

const title = document.querySelector('#title')
const duration = document.querySelector('#duration')

// PREENCHIMENTO AUTOMATICO DO NOME DO FICHEIRO DE VIDEO
const videoName = video.src.split('/')[video.src.split('/').length - 1]
// ALTERNATIVA
//const videoName2 = video.src.substr(video.src.lastIndexOf('/') + 1, video.src.length)
title.innerHTML = videoName


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

video.addEventListener('timeupdate', () => {
    if (Math.trunc(video.currentTime) == annotations[0].frame) {
        alert(annotations[0].text)
    }
})