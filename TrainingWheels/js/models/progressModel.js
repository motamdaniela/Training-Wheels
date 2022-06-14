class Progress{
    username = ''
    points = 0
    questionsDone = []
    levelsDone = []

    constructor(username, points = 0, questionsDone = [], levelsDone = []){
        this.username = username
        this.points = points
        this.questionsDone = questionsDone
        this.levelsDone = levelsDone
    }
}