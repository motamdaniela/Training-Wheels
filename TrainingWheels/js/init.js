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

{
  question:"Qual deve ser o comportamento do condutor perante esta situação?",
  image:"../media/stickers/semaforo.svg",
  answers:['Parar','Acelerar','Abrandar','Mudar de via'],
  correctAnswer:"Parar",
  reward:"../media/stickers/semaforo.svg",
  level: '',
  video:"Sinalizacao_Luminosa.mp4",
  tag:"4:47",
  pointsEarned:10,
},

let levelsList = ['Main Street', 'Complicated lane', 'Parking Lot Avenue', 'Speedy Road', 'Conquerors Square'];
let videosList = [
  {
    url: "../media/videos/Sinalizacao_Luminosa.mp4",
    name: "Sinalização Luminosa",
    level: "Main Street",
    likes: 0,
    comments: [],
  },
  {
    url: "../media/videos/Marcas_Rodoviarias.mp4",
    name: "Marcas Rodoviárias",
    level: "Main Street",
    likes: 0,
    comments: [],
  },
  {
    url: "../media/videos/Sinalizacao_Vertical.mp4",
    name: "Sinalização Vertical",
    level: "Complicated lane",
    likes: 0,
    comments: [],
  },
];

let tagsList = [
  {
    video: 'Sinalização Luminosa',
    tag: '0:20',
    name: 'Semáforo',
  },
  {
    video: 'Sinalização Luminosa',
    tag: '5:01',
    name: 'Diferentes tipos de semáforos',
  },
  {
    video: 'Sinalização Luminosa',
    tag: '7:14',
    name: 'luzes amarelas intermitentes',
  },
  {
    video: 'Sinalização Luminosa',
    tag: '10:34',
    name: 'Sinais para passagens de nível',
  },
  {
    video: 'Sinalização Luminosa',
    tag: '14:04',
    name: 'Sinais lumisosos de afectação de vias',
  },
  {
    video: 'Sinalização Luminosa',
    tag: '16:23',
    name: 'Sinais para transporte coletivo passageiros',
  },
];

let popUpsList = [
  {
    question: "Qual deve ser o comportamento do condutor perante a seguinte sinalização?",
    image: "",
    answers: [],
    correctAnswer: "",
    reward: "../media/stickers/semaforo.svg",
    video: "",
    tag: "4:47",
    pointsEarned: 0,
  },
  {
    question: "",
    image: "",
    answers: [],
    correctAnswer: "",
    reward: "",
    video: "",
    tag: "13:10",
    pointsEarned: 0,
  },
];


let commentsList = [
  {
    video: "",
    usernames: [],
    txtComments: [],
    profilePhoto: [],
  }
];