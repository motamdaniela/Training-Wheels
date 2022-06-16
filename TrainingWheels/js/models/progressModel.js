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

class Progress{
    username = ''
    questionsDone = []
    questionsCorrect = []
    levelsDone = []
    currentVideo = {}
    currentTag = ''
    likedVideos = []

    constructor(username, questionsDone = [], questionsCorrect = [], levelsDone = [], currentVideo = {}, currentTag = '', likedVideos = []) {
        this.username = username
        this.questionsDone = questionsDone
        this.questionsCorrect = questionsCorrect
        this.levelsDone = levelsDone
        this.currentVideo = currentVideo
        this.currentTag = currentTag
        this.likedVideos = likedVideos
    }
}