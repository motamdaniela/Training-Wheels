class Progress{
    username = ''
    points = 0
    questionsDone = []
    levelsDone = []
    currentVideo = {}
    currentTag = ''

    constructor(username, points = 0, questionsDone = [], levelsDone = [], currentVideo = {}, currentTag = '') {
        this.username = username
        this.points = points
        this.questionsDone = questionsDone
        this.levelsDone = levelsDone
        this.currentVideo = currentVideo
        this.currentTag = currentTag
    }
}