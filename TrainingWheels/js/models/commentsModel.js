let comments;

export function init() {
    comments = localStorage.comments ? JSON.parse(localStorage.comments) : [];
  }

export function add(video,username,txtComments,profilePhoto) {
    comments.push(new Comments(video,username,txtComments,profilePhoto));
    localStorage.setItem("comments", JSON.stringify(comments));
  }

export function getComments() {
  return comments;
}

export function remove(username) {
  comments = comments.filter((comment) => comment.usernames !== username);
  localStorage.setItem("comments", JSON.stringify(comments));
}

// export function attCommentsOnStorage(attComment){
//   let comments = JSON.parse(localStorage.getItem('comments'))
//   comments.forEach((comment,i) => {
//       if (comment.video === attComment.video) comment[i] = attComment
//   })
//   localStorage.setItem('comments', JSON.stringify(comments))
// }

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