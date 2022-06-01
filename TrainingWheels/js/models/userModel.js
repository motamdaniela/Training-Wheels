export default class User {
    #username = ''
    #type = ''
    #password = ''
    #name = ''
    #email = ''
    #sex = ''
    #birthday = ''
    #place = ''
    #photo = ''
    #ranking = 0 
    #progress = 0
    #points = 0
    #clues = 0
    #book = {}

    constructor(username, type,  password, name, email, sex, birthday, place, photo, ranking, progress, points,clues, book){
        this.#username = username;
        this.#type = type;
        this.#name = name;
        this.#password = password;
        this.#email = email;
        this.#sex = sex;
        this.#birthday = birthday;
        this.#place = place;
        this.#photo = photo;
        this.#ranking = ranking;
        this.#progress = progress;
        this.#points = points;
        this.#clues = clues;
        this.#book = book;
    }

    get getUsername(){return this.#username}
    get getType(){return this.#type}
    get getName(){return this.#name}
    get getPassword(){return this.#password}
    get getEmail(){return this.#email}
    get getSex(){return this.#sex}
    get getBirthday(){return this.#birthday}
    get getPlace(){return this.#place}
    get getPhoto(){return this.#photo}
    get getRanking(){return this.#ranking}
    get getProgress(){return this.#progress}
    get getPoints(){return this.#points}
    get getClues(){return this.#clues}
    get getBook(){return this.#book}
}