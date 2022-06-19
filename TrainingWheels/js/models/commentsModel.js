let comments;

export function init() {
    comments = localStorage.comments ? JSON.parse(localStorage.comments) : [];
  }

export function add(video) {
    comments.push(new Comments(video));
    localStorage.setItem("comments", JSON.stringify(comments));
  }

export function getComments() {
  return comments;
}

export function attCommentsOnStorage(attComment){
  let comments = JSON.parse(localStorage.getItem('comments'))
  comments.forEach((comment,i) => {
      if (comment.video === attComment.video) comment[i] = attComment
  })
  localStorage.setItem('comments', JSON.stringify(comments))
}

class Comments{
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