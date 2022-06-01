export default class Video{
    #url =""
    #tags =""
    #name =""
    #likes =0
    #comments =""
    #level =0

    constructor(url, tags, name, likes, comments, level) {
        this.#url = url;
        this.#tags = tags;
        this.#name = name;
        this.#comments = comments;
        this.#level = level;
    }
}