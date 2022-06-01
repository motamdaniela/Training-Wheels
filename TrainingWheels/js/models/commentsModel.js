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

    get getUsernames(){return this.#usernames};
    get getTxtComments(){return this.#txtComments};
    get getProfilePhoto(){return this.#profilePhoto};
    get getVideo(){return this.#video};

    set setUsernames(value){this.#usernames = value};
    set setTxtComments(value){this.#txtComments = value};
    set setProfilePhoto(value){this.#profilePhoto = value};
    set setVideo(value){this.#video = value};
}