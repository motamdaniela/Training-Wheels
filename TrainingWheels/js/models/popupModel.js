let popUpQuestions;


// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
    popUpQuestions = localStorage.popUpQuestions ? JSON.parse(localStorage.popUpQuestions) : [];
}

// ADICIONAR UTILIZADOR
export function add(question, image, answers, correctAnswer, reward, level, video, tag, pointsEarned) {
    popUpQuestions.push(new popUp(question, image, answers, correctAnswer, reward, level, video, tag, pointsEarned));
    localStorage.setItem("popUpQuestions", JSON.stringify(popUpQuestions));
}

/*

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(

    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    if(user.type === "admin") {
      setTimeout(() => {
        location.replace("/html/admin.html");
      }, 1000);
    }
    else{
      return true;  
    }
  } else if(user != true) {
    return('Username ou password errados');
  }
}

// LOGOUT DO UTILIZADOR
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFICA EXISTÊNCIA DE ALGUÉM AUTENTICADO
export function isLogged() {
  return sessionStorage.getItem("loggedUser") ? true : false;
}

// DEVOLVE UTILZIADOR AUTENTICADO
export function getUserLogged() {
  return JSON.parse(sessionStorage.getItem("loggedUser"));
}
*/

// OBTER lista de perguntas 
export function getPopUp() {
  return popUpQuestions;
}

class popUp{
    question =""
    image =""
    answers =[]
    correctAnswer =""
    reward =""
    level = ""
    video =""
    tag =""
    pointsEarned =0

    constructor(question, image, answers, correctAnswer, reward, level, video, tag, pointsEarned) {
        this.question = question;
        this.image = image;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.reward = reward;
        this.level = level;
        this.video = video;
        this.tag = tag;
        this.pointsEarned = pointsEarned;
    }

}