import * as Levels from '../models/levelModel.js';
import * as Videos from '../models/videoModel.js';
import * as Tags from '../models/tagsModel.js';
import * as PopUpQuestions from '../models/PopUpModel.js';
Levels.init()
Videos.init()
Tags.init()
PopUpQuestions.init()

let levelsList = ['Main Street', 'Complicated lane', 'Parking Lot Avenue', 'Speedy Road', 'Conquerors Square'];
document.querySelector('#btn').addEventListener('click',()=>{
  levelsList.forEach((level) => {
    Levels.add(level)
  });
  btn.disabled = true
});

//-----------------------------------videos
let videosList = [
  {
    url: "../media/videos/Sinalizacao_Luminosa.mp4",
    name: "Sinalização Luminosa",
    level: "Main Street",
  },
  {
    url: "../media/videos/Marcas_Rodoviarias.mp4",
    name: "Marcas Rodoviárias",
    level: "Main Street",
  },
  {
    url: "../media/videos/Sinalizacao_Vertical.mp4",
    name: "Sinalização Vertical",
    level: "Complicated lane",
  },
];
document.querySelector('#btnV').addEventListener('click',()=>{
  videosList.forEach((video) => {
    Videos.add(video.url, video.name, video.level)
  });
  btn.disabled = true
});


//-----------------------------------tags
let tagsList = [
    {
      tag: '0:20',
      name: 'Semaforo',
      video: 'Sinalizacao Luminosa',
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
document.querySelector('#btnT').addEventListener('click',()=>{
  tagsList.forEach((tag) => {
    Tags.add(tag.video, tag.tag, tag.name)
  });
  btn.disabled = true
});

//-----------------------------------tags
let popUpsList = [
  {
    question: "Qual deve ser o comportamento do condutor perante a seguinte sinalização?",
    image: "../media/stickers/semaforo.svg",
    answers: ['Parar obrigatoriamente', 'Moderar a velocidade', 'Parar, apenas se o conseguir fazer em segurança', 'Avançar'],
    correctAnswer: "Parar, apenas se o conseguir fazer em segurança",
    reward: "../media/stickers/semaforo.svg",
    video: "Sinalização Luminosa",
    tag: "4:47",
    pointsEarned: 10,
  },
  {
    question: "Para quem está destinado o seguinte sinal?",
    image: "../media/stickers/sinais_peoes.svg",
    answers: ['O condutor','O peão','O peão, numa passagem de nível','Apenas os condutores de veículos ligeiros'],
    correctAnswer: "O condutor",
    reward: "../media/stickers/sinais_peoes.svg",
    video: "Sinalização Luminosa",
    tag: "13:10",
    pointsEarned: 20,
  },
];

document.querySelector('#btnP').addEventListener('click',()=>{
  popUpsList.forEach((popUp) => {
    PopUpQuestions.add(popUp.question, popUp.image, popUp.answers, popUp.correctAnswer, popUp.reward, popUp.video, popUp.tag, popUp.pointsEarned)
  });
  btn.disabled = true
});