export default class Comments{
    #usernames =""
    #txtComments =""
    #profilePhoto =""
    #video =""

    constructor(usernames, txtComments, profilePhoto, video){
        this.#usernames = usernames;
        this.#txtComments = txtComments;
        this.#profilePhoto = profilePhoto;
        this.#video = video;
    }
}