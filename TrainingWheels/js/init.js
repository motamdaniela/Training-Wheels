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
    
    localStorage.setItem("niveis", JSON.stringify(niveis));
  }
  if (!localStorage.videos) {
    const videos = [
      {
        url: "../media/videos/Sinalizacao_Luminosa.mp4",
        name:"Sinalização Luminosa",
        level:"Main Street",
        likes: 0
      },
      {
        nurl: "../media/videos/Marcas_Rodoviarias.mp4",
        name:"Marcas Rodoviárias",
        level:"Main Street",
        likes: 0
      },
      {
        url: "../media/videos/Sinalizacao_Vertical.mp4",
        name:"Sinalização Vertical",
        level:"Complicated Lane",
        likes: 0
      },
      {
        url: "../media/videos/Paragem_e_Estacionamento.mp4",
        name:"Paragem e Estacionamento",
        level:"Parking Lot Avenue",
        likes: 0
      },
      {
        url: "../media/videos/Cedencia_de_passagem.mp4",
        name:"Cedência de Passagem",
        level:"Parking Lot Avenue",
        likes: 0
      },
      {
        url: "../media/videos/Velocidades.mp4",
        name:"Velocidades",
        level:"Speedy Road",
        likes: 0
      },
      {
        url: "../media/videos/Vias_de_Transito.mp4",
        name:"Vias de Trânsito",
        level:"Speedy Road",
        likes: 0
      },
    ];
    
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
        tag: "0:38",
        video: "Paragem e Estacionamento",
        name: "Diferença entre paragem e estacionamento",
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
      {
        question: "Este carro está parado ou estacionado?",
        image: "../media/images/carro_estacionado.svg",
        answers: ['Estacionado','Parado','Avariado, uma vez que se encontra na berma da estrada','Parado, porque tem as luzes desligadas'],
        correctAnswer: "Estacionado",
        reward: "../media/stickers/parking.svg",
        video: "Paragem e estacionamento",
        tag: "1:58",
        pointsEarned: 20,
      },
      {
        question: "O condutor deste veículo comete uma contraordenação ao estacioná-lo neste local?",
        image: "../media/images/estacionado_2fila.svg",
        answers: ['Sim, pois está estacionado em 2a fila','Não','Sim, apenas se houver trânsito no sentido contrário','Não, pois está dentro de uma localidade'],
        correctAnswer: "Sim, pois está estacionado em 2a fila",
        reward: "../media/stickers/wheel_clamp.svg",
        video: "Paragem e estacionamento",
        tag: "27:01",
        pointsEarned: 10,
      },
      {
        question: "Qual é a ordem de correta de passagem destes veículos?",
        image: "../media/images/situacao_3d.png",
        answers: ['Motociclo','Automóvel pesado','Automóvel ligeiro','Motociclo e automóvel pesado em simultâneo e automóvel ligeiro de seguida'],
        correctAnswer: "Motociclo",
        reward: "../media/stickers/cruzamento.svg",
        video: "Cedência de Passagem",
        tag: "4:55",
        pointsEarned: 15,
      },
      {
        question: "Qual a velocidade máxima que este veículo pode circular nesta via?",
        image: "../media/images/camiao_porto.svg",
        answers: ['50 km/h','90 km/h','30 km/h','120 km/h'],
        correctAnswer: "50 km/h",
        reward: "../media/stickers/acidente.svg",
        video: "Velocidades",
        tag: "19:06",
        pointsEarned: 25,
      },
      {
        question: "Qual a velocidade máxima nesta via de trânsito?",
        image: "../media/images/cartaxo.svg",
        answers: ['50 km/h','90 km/h','30 km/h','120 km/h'],
        correctAnswer: "90 km/h",
        reward: "../media/stickers/racecar.svg",
        video: "Vias de Trânsito",
        tag: "8:24",
        pointsEarned: 20,
      },
      
    ];
    
    localStorage.setItem("popUpQuestions", JSON.stringify(popUpQuestions));
  }
  if (!localStorage.testes) {
    const testes = [
      {
        level: "Conquerors Square",
        name: "Finish line",
        sticker: "../media/stickers/green_gilf.svg",
      },
    ];
    localStorage.setItem("testes", JSON.stringify(testes));
  }
  if (!localStorage.perguntas) {
    const perguntas = [
      {
        test_name: 'Finish line',
        question: 'Quando a sinalização luminosa muda para a cor verde…',
        answers: ['Sou obrigado a avançar','Estou autorizado a avançar, porém apenas devo fazê-lo nas condições certas','Devo parar, desde que consiga fazê-lo em condições de segurança','Devo parar obrigatóriamente'],
        right_answer: 'Estou autorizado a avançar, porém apenas devo fazê-lo nas condições certas',
        points: 5,
      },
      {
        test_name: 'Finish line',
        question: 'Qual das seguintes é uma consequência da fadiga?',
        answers: ['Aumento do tempo de travagem','Diminuição do tempo de reacção','Aumento da atenção do condutor','Sonolência'],
        right_answer: 'Sonolência',
        points: 10,
      },
      {
        test_name: 'Finish line',
        question: 'Após a ingestão de bebidas alcoólicas, quando se começam a manifestar os efeitos do álcool?',
        answers: ['Depois de 3 horas','Durante a 2ª hora','No dia seguinte','Muito rapidamente'],
        right_answer: 'Muito rapidamente',
        points: 5,
      },
      {
        test_name: 'Finish line',
        question: 'Em situação de perigo iminente posso utilizar os sinais sonoros?',
        answers: ['Sim','Não'],
        right_answer: 'Sim',
        points: 10,
      },
      {
        test_name: 'Finish line',
        question: 'Que tipo de veículo pode conduzir um titular da carta de condução de automóveis ligeiros?',
        answers: ['Peso bruto até 500kg','Lotação máxima de 9 lugares','Lotação de 6 lugares e peso bruto de 3500kg','Lotação de 6 lugares e peso bruto de 5000kg'],
        right_answer: 'Lotação de 6 lugares e peso bruto de 3500kg',
        points: 20,
      },
      {
        test_name: 'Finish line',
        question: 'Fora das localidades é proibido estacionar nas faixas de rodagem. Esta afirmação é verdadeira?',
        answers: ['Não','Sim'],
        right_answer: 'Sim',
        points: 15,
      },
      {
        test_name: 'Finish line',
        question: 'A que distância de uma curva de visibilidade reduzida é proibido parar?',
        answers: ['150 metros','50 metros','80 metros','30 metros'],
        right_answer: '30 metros',
        points: 20,
      },
      {
        test_name: 'Finish line',
        question: 'O que implica a prática de uma condução defensiva?',
        answers: ['Que o condutor abdique dos seus direitos a fim de evitar um acidente','Que o condutor se foque no seu destino, ignorando a sinalização, se for necessário','Que o condutor não ceda a passagem, porque tem sempre o direito de avançar','Que o condutor aumente a velocidade para ser o primeiro a avançar'],
        right_answer: 'Que o condutor abdique dos seus direitos a fim de evitar um acidente',
        points: 5,
      },
      {
        test_name: 'Finish line',
        question: 'Quais as luzes  que devo utilizar dentro de um túnel?',
        answers: ['Luzes de nevoeiro','Luzes mínimas','Luzes de cruzamento','Luzes de estrada'],
        right_answer: 'Luzes de cruzamento',
        points: 10,
      },
      {
        test_name: 'Finish line',
        question: 'Sempre que a iluminação de um local não é suficiente, posso utilizar as luzes de estrada?',
        answers: ['Sim','Não'],
        right_answer: 'Não',
        points: 20,
      },
    ];
    localStorage.setItem("perguntas", JSON.stringify(perguntas));
  }
    
}