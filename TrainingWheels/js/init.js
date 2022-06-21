initdata();

function initdata() {
  if (!localStorage.niveis) {
    const niveis = [
      {
        name: "Main Street"
      },
      {
        name: "Complicated Lane"
      },
      {
        name: "Parking Lot Avenue"
      },
      {
        name: "Speedy Road"
      },
      {
        name: "Conquerors Square"
      },
    ];
    console.log("inject");
    localStorage.setItem("niveis", JSON.stringify(niveis));
  }
  if (!localStorage.videos) {
    const videos = [
      {
        url: "../media/videos/Sinalizacao_Luminosa.mp4",
        name:"Sinalização Luminosa",
        level:"Main Street"
      },
      {
        nurl: "../media/videos/Marcas_Rodoviarias.mp4",
        name:"Marcas Rodoviárias",
        level:"Main Street"
      },
      {
        url: "../media/videos/Sinalizacao_Vertical.mp4",
        name:"Sinalização Vertical",
        level:"Complicated Lane"
      },
      {
        url: "../media/videos/Paragem_e_Estacionamento.mp4",
        name:"Paragem e Estacionamento",
        level:"Parking Lot Avenue"
      },
      {
        url: "../media/videos/Cedencia_de_passagem.mp4",
        name:"Cedência de Passagem",
        level:"Parking Lot Avenue"
      },
      {
        url: "../media/videos/Velocidades.mp4",
        name:"Velocidades",
        level:"Speedy Road"
      },
      {
        url: "../media/videos/Vias_de_Transito.mp4",
        name:"Vias de Trânsito",
        level:"Speedy Road"
      },
    ];
    console.log("inject");
    localStorage.setItem("videos", JSON.stringify(videos));
  }
  if (!localStorage.tags) {
    const tags = [
      {
        video: "Sinalização Luminosa",
        tag:"0:20",
        name:"Semaforo"
      },
      {
        tag: "5:01",
        video: "Sinalização Luminosa",
        name: "Diferentes tipos de semáforos",
      },
      {
        tag: "7:14",
        video: "Sinalização Luminosa",
        name: "Luzes amarelas intermitentes",
      },
      {
        tag: "10:34",
        video: "Sinalização Luminosa",
        name: "Sinais para passagens de nível",
      },
      {
        tag: "14:04",
        video: "Sinalização Luminosa",
        name: "Sinais lumisosos de afectação de vias",
      },
      {
        tag: "16:23",
        video: "Sinalização Luminosa",
        name: "Sinais para transporte coletivo passageiros",
      },
      {
        tag: "1:01",
        video: "Marcas Rodoviárias",
        name: "Marcas longitudinais",
      },
      {
        tag: "7:36",
        video: "Marcas Rodoviárias",
        name: "Marcas transversais",
      },
      {
        tag: "10:58",
        video: "Marcas Rodoviárias",
        name: "Marcas reguladoras paragem e estacionamento",
      },
      {
        tag: "12:58",
        video: "Marcas Rodoviárias",
        name: "Marcas orientadoras",
      },
      {
        tag: "14:30",
        video: "Marcas Rodoviárias",
        name: "Diversas",
      },
      {
        tag: "17:38",
        video: "Marcas Rodoviárias",
        name: "Refletores e marcadores",
      },
      {
        tag: "19:01",
        video: "Marcas Rodoviárias",
        name: "Sinais do condutor",
      },
      {
        tag: "1:52",
        video: "Sinalização Vertical",
        name: "Sinais de perigo",
      },
      {
        tag: "2:19",
        video: "Sinalização Vertical",
        name: "Sinais de indicação",
      },
      {
        tag: "5:41",
        video: "Paragem e Estacionamento",
        name: "Precauções",
      },
      {
        tag: "8:50",
        video: "Paragem e Estacionamento",
        name: "Parques e zonas de estacionamento",
      },
      {
        tag: "10:31",
        video: "Paragem e Estacionamento",
        name: "Locais proibidos",
      },
      {
        tag: "21:35",
        video: "Paragem e Estacionamento",
        name: "Estacionamento indevido ou abusivo",
      },
      {
        tag: "24:00",
        video: "Paragem e Estacionamento",
        name: "Remoção do veículo",
      },
      {
        tag: "1:02",
        video: "Cedência de Passagem",
        name: "Situações",
      },
      {
        tag: "3:40",
        video: "Cedência de Passagem",
        name: "Exemplos",
      },
      {
        tag: "1:37",
        video: "Velocidades",
        name: "Veículos ligeiros e pesados",
      },
      {
        tag: "4:03",
        video: "Velocidades",
        name: "Dentro das localidades",
      },
      {
        tag: "7:18",
        video: "Velocidades",
        name: "Fora das localidades",
      },
      {
        tag: "9:20",
        video: "Velocidades",
        name: "Vias reservadas",
      },
      {
        tag: "11:16",
        video: "Velocidades",
        name: "Autoestradas",
      },
      {
        tag: "13:12",
        video: "Velocidades",
        name: "Motociclos, ciclomotores, triciclos…",
      },
      {
        tag: "16:50",
        video: "Velocidades",
        name: "Máquinas industriais/agrícolas",
      },
      {
        tag: "1:11",
        video: "Vias de Trânsito",
        name: "Localidades",
      },
      {
        tag: "3:38",
        video: "Vias de Trânsito",
        name: "Autoestrada",
      },
      {
        tag: "6:40",
        video: "Vias de Trânsito",
        name: "Vias reservadas",
      },
      {
        tag: "7:53",
        video: "Vias de Trânsito",
        name: "Fora localidades",
      },
      
    ];
    console.log("inject");
    localStorage.setItem("tags", JSON.stringify(tags));
  }
  if (!localStorage.popUpQuestions) {
    const popUpQuestions = [
      {
        question: "Qual deve ser o comportamento do condutor perante a seguinte sinalização?",
        image: "../media/images/velhinho_passadeira.svg",
        answers: ['Parar obrigatoriamente', 'Moderar a velocidade', 'Parar, apenas se o conseguir fazer em segurança', 'Avançar'],
        correctAnswer: "Parar, apenas se o conseguir fazer em segurança",
        reward: "../media/stickers/semaforo.svg",
        video: "Sinalização Luminosa",
        tag: "4:47",
        pointsEarned: 10,
      },
      {
        question: "Para quem está destinado o seguinte sinal?",
        image: "../media/images/sinal_peoes_passadeira.svg",
        answers: ['O condutor','O peão','O peão, numa passagem de nível','Apenas os condutores de veículos ligeiros'],
        correctAnswer: "O condutor",
        reward: "../media/stickers/sinal_peoes.svg",
        video: "Sinalização Luminosa",
        tag: "13:10",
        pointsEarned: 20,
      },
      {
        question: "Devo efetuar a manobra de ultrapassagem nesta via?",
        image: "../media/images/linha_continua.svg",
        answers: ['Sim','Não','Sim, se o condutor à minha frente o permitir','Sim, uma vez que não existe fila de trânsito no sentido contrário'],
        correctAnswer: "Não",
        reward: "../media/stickers/manobra.svg",
        video: "Marcas Rodoviárias",
        tag: "7:33",
        pointsEarned: 15,
      },
      {
        question: "Pretendo virar à direita mas as minhas luzes estão avariadas, o que devo fazer?",
        image: "../media/images/mao_carro.svg",
        answers: ['Sinalizar com a palma da minha mão virada para a frente','Sinalizar através do espelho retrovisor','Efetuar a manobra o mais rapidamente possível','Sinalizar com a minha mao virada para cima'],
        correctAnswer: "Sinalizar com a palma da minha mão virada para a frente",
        reward: "../media/stickers/carro_mao.svg",
        video: "Marcas Rodoviárias",
        tag: "21:40",
        pointsEarned: 20,
      },
      {
        question: "Qual é o tipo deste sinal?",
        image: "../media/images/homem_confuso.svg",
        answers: ['Informação','Obrigação','Cedência de passagem','Perigo'],
        correctAnswer: "Obrigação",
        reward: "../media/stickers/sinal_sapos.svg",
        video: "Sinalização Vertical",
        tag: "6:05",
        pointsEarned: 10,
      },
      {
        question: "Perante este sinal devo?",
        image: "../media/images/sinal_passadeira_estrada.svg",
        answers: ['Parar','Avançar com velocidade moderada','Fazer manobra de marcha atrás','Nenhuma das respostas'],
        correctAnswer: "Avançar com velocidade moderada",
        reward: "../media/stickers/sinal_passadeira.svg",
        video: "Sinalização Vertical",
        tag: "11:27",
        pointsEarned: 5,
      },
      
      
    ];
    console.log("inject");
    localStorage.setItem("popUpQuestions", JSON.stringify(popUpQuestions));
  }

    
}