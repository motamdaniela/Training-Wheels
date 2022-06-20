let progress;

export function init() {
    progress = localStorage.progress ? JSON.parse(localStorage.progress) : [];
  }

export function add(username) {
      progress.push(new Progress(username));
      localStorage.setItem("progress", JSON.stringify(progress));
  }

export function getProgress() {
  return progress;
}

export function attProgressOnStorage(attProgress){
  let progress = JSON.parse(localStorage.getItem('progress'))
  progress.forEach((progres,i) => {
      if (progres.username === attProgress.username) progress[i] = attProgress
  })
  localStorage.setItem('progress', JSON.stringify(progress))
}

class Progress{
    username = ''
    questionsDone = []
    questionsCorrect = []
    levelsDone = []
    currentVideo = ''
    currentTag = ''
    likedVideos = []
    currentLvl = ''
    videosDone = []
    levelsStarted = []

    constructor(username, questionsDone = [], questionsCorrect = [], levelsDone = [], currentVideo = '', currentTag = 0, likedVideos = [], currentLvl = '', videosDone = [], levelsStarted = []) {
        this.username = username
        this.questionsDone = questionsDone
        this.questionsCorrect = questionsCorrect
        this.levelsDone = levelsDone
        this.currentVideo = currentVideo
        this.currentTag = currentTag
        this.likedVideos = likedVideos
        currentLvl = currentLvl
        videosDone = videosDone
        levelsStarted = levelsStarted
    }
}