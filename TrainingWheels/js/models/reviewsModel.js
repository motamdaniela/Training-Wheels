export default class Reviews{
    #usernames =""
    #txtReview =""
    #rating = 0

    constructor (usernames, txtReview, rating) {
        this.#usernames = usernames;
        this.#txtReview = txtReview;
        this.#rating = rating;
    }

    get getUsernames () { return this.#usernames}
    set setUsernames(value) { this.#usernames = value}

    get getTxtReview () {return this.#txtReview}
    set setTxtReview(value) { this.#txtReview = value}

    get getRating () {return this.#rating}
    set setRating (value) { this.#rating = value}
 
}