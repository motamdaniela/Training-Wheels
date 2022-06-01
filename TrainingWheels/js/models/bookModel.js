export default class Book{
    #username =""
    #stickersLvl =""
    #stickersBuy =""

    constructor(username, stickersLvl, stickersBuy){
        this.#username = username;
        this.#stickersLvl = stickersLvl;
        this.#stickersBuy = stickersBuy;
    }
}