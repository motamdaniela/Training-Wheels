export default class Book{
    #username =""
    #stickersLvl =[]
    #stickersBuy =[]

    constructor(username, stickersLvl, stickersBuy){
        this.#username = username;
        this.#stickersLvl = stickersLvl;
        this.#stickersBuy = stickersBuy;
    }

    get getUsername(){return this.#username};
    get getStickersLvl(){return this.#stickersLvl};
    get getStickersBuy(){return this.#stickersBuy};

    set setUsername(value){this.#username = value};
    set setStickersLvl(value){this.#stickersLvl = value};
    set setStickersBuy(value){this.#stickersBuy = value};
}

