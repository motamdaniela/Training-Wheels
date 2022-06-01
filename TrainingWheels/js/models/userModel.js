export default class User {
    #name = ''
    #username = ''
    #password = ''
    #email = ''
    #sex = ''
    #birthday = ''
    #place = ''
    #photo = ''
    #ranking = 0 
    #type = ''
    #progress = 0
    #points = ''
    #clues = 0
    #stickers = []

    constructor(name, username, password, email, sex, birthday, place, photo, ranking, type, progress, points,clues, stickers){
        this.#name = name;
        this.#username = username;
        this.#password = password;
        this.#email = email;
        this.#sex = sex;
        this.#birthday = birthday;
        this.#place = place;
        this.#photo = photo;
        this.#ranking = ranking;
        this.#type = type;
        this.#progress = progress;
        this.#points = points;
        this.#clues = clues;
        this.#stickers = stickers;

        

    }
}