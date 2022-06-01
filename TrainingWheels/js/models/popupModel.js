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
}