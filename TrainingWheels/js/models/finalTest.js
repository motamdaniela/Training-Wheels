let exercicios

export function init() {
    exercicios = localStorage.exercicios ? JSON.parse(localStorage.exercicios) : [];
  }

class Exercise{
    nome=''
    question=[]
    answers=[]
    correctAnswer=''
    level=''

    constructor(nome, question, answers, correctAnswer, level) {
        this.nome = nome;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.level = level;
    }

    

}
