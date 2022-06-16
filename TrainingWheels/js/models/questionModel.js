let perguntas

export function init() {
    perguntas = localStorage.perguntas ? JSON.parse(localStorage.perguntas) : [];
  }

export function add(test_name, question, answers, right_answer,points) {
    perguntas.push(new Question(test_name, question, answers, right_answer,points));
    localStorage.setItem("perguntas", JSON.stringify(perguntas));
}

export function getQuestions() {
    return perguntas;
}

export function remove(question) {
    perguntas = perguntas.filter((pergunta) => pergunta.question !== question);
    localStorage.setItem("perguntas", JSON.stringify(perguntas));
}

class Question{
    test_name=''
    question=''
    answers=[]
    right_answer=''
    points=''

    constructor(test_name, question, answers, right_answer,points) {
        this.test_name=test_name;
        this.question=question;
        this.answers=answers;
        this.right_answer=right_answer;
        this.points=points;
    }
}