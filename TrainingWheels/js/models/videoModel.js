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

    get getUrl () { return this.#url }
    set setUrl (value) { this.#url = value}

    get getTags () { return this.#tags }
    set setTags (value) { this.#tags = value}

    get getName () { return this.#name }
    set setName (value) {this.#name = value}

    get getLikes () {return this.#likes}
    set setLikes (value) {this.#likes = value}

    get getComments () { return this.#comments}
    set setComments (value) {this.#comments = value}

    get getLevel () {return this.#level}
    set setLevel (value) {this.#level = value}

}