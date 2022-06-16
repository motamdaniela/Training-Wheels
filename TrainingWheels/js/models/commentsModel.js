let comments;

export function init() {
    comments = localStorage.comments ? JSON.parse(localStorage.comments) : [];
  }

export function add(video) {
    comments.push(new Progress(video));
    localStorage.setItem("progress", JSON.stringify(comments));
  }

export function getProgress() {
  return comments;
}

export default class Comments{
    video = ""
    usernames = []
    txtComments = []
    profilePhoto = []

    constructor(video, usernames = [], txtComments= [], profilePhoto= []){
        this.video = video;
        this.usernames = usernames;
        this.txtComments = txtComments;
        this.profilePhoto = profilePhoto;
    }
}