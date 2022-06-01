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

    get getId () { return this.#id; }
    set setId (value) { this.#id = value; }

    get getQuestion () { return this.#question; }
    set setQuestion (value) { this.#question = value; }

    get getAnswers () {return this.#answers;}
    set setAnswers (value) { this.#answers = value;}

    get getCorrectAnswer () {return this.#correctAnswer}
    set setCorrectAnswer (value) { this.#correctAnswer = value}

    get getLevel () {return this.#level}
    set setLevel (value) { this.#level = value}

}
