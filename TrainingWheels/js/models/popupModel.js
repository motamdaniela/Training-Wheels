export default class popUp{
    #question =""
    #image =""
    #answers =[]
    #correctAnswer =""
    #reward =""
    #level =0
    #video =""
    #tag =""
    #pointsEarned =0

    constructor(question, image, answer, correctAnswer, reward, level, video, tag, pointsEarned) {
        this.#question = question;
        this.#image = image;
        this.#answers = answers;
        this.#correctAnswer = correctAnswer;
        this.#reward = reward;
        this.#level = level;
        this.#video = video;
        this.#tag = tag;
        this.#pointsEarned = pointsEarned;
    }

    get getQuestion () { return this.#question}
    set setQuestion (value) { this.#question = value}

    get getImage () { return this.#image}
    set setImage (value) {this.#image = value}

    get getAnswers () { return this.#answers}
    set setAnswers (value) { this.#answers = value}

    get getCorrectAnswer () { return this.#correctAnswer}
    set setCorrectAnswer (value) { this.#correctAnswer = value}

    get getReward () { return this.#reward}
    set setReward (value) { this.#reward = value}

    get getLevel () { return this.#level}
    set setLevel (value) { this.#level = value}

    get getVideo () { return this.#video}
    set setVideo (value) { this.#video = value}

    get getTag () { return this.#tag}
    set setTag (value) { this.#tag = value}

    get getPointsEarned () { return this.#pointsEarned}
    set setPointsEarned (value) { this.#pointsEarned = value}

}