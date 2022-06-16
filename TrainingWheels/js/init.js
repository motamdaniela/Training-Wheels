/*
initdata();

function initdata() {
    if (!localStorage.users) {
        const users = [
          {
            username: "user1",
            password: "pass1",
          },
          {
            username: "user2",
            password: "pass2",
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
      }
    
    }
*/

let levelsList = [Nivel1, Nivel2, Nivel3, Nivel4, Nivel5];
let videosList = [
  {
    url: "",
    name: "",
    level: "",
    likes: 0,
    comments: [],
  },
];
let tagsList = [
  {
    video: '',
    tag: '',
    name: '',
  }
];
let popUpsList = [
  {
    question: "",
    image: "",
    answers: [],
    correctAnswer: "",
    reward: "",
    level: "",
    video: "",
    tag: "",
    pointsEarned: 0,
  }
];
let commentsList = [
  {
    video: "",
    usernames: [],
    txtComments: [],
    profilePhoto: [],
  }
];