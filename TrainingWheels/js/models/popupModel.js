let popUpQuestions;


// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
    popUpQuestions = localStorage.popUpQuestions ? JSON.parse(localStorage.popUpQuestions) : [];
}

// ADICIONAR UTILIZADOR
export function add(question, image, answers, correctAnswer, reward,  video, tag, pointsEarned) {
    popUpQuestions.push(new PopUp(question, image, answers, correctAnswer, reward,  video, tag, pointsEarned));
    localStorage.setItem("popUpQuestions", JSON.stringify(popUpQuestions));
}


// OBTER lista de perguntas 
export function getPopUp() {
  return popUpQuestions;
}

class PopUp{
    question =""
    image =""
    answers =[]
    correctAnswer =""
    reward =""
    video =""
    tag =""
    pointsEarned =0

    constructor(question, image, answers, correctAnswer, reward, video, tag, pointsEarned) {
        this.question = question;
        this.image = image;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.reward = reward;
        this.video = video;
        this.tag = tag;
        this.pointsEarned = pointsEarned;
    }

}