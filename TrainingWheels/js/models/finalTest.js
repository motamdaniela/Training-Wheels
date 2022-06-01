export default class exercise{
    id=''
    question=''
    answers=[]
    correctAnswer=''
    level=0

    constructor(id, question, answers, correctAnswer, level) {
        this.#id = id;
        this.#question = question;
        this.#answers = answers;
        this.#correctAnswer = correctAnswer;
        this.#level = level;
    }
}
