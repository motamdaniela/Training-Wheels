let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

// ADICIONAR UTILIZADOR
export function add(username, type, pass ,name, email, sex, bday) {
  if (users.some((user) => user.username === username)) {
    return('Esse username já existe. Por favor tente outro!')
    //throw Error(`User with username "${username}" already exists!`);
  } else if(users.some((user) => user.email === email)){
    return('Esse email já tem uma conta associada. Por favor tente outro!')
  }else {
    users.push(new User(username, type, pass, name, email, sex, bday));
    localStorage.setItem("users", JSON.stringify(users));
    if (user.type === "user"){
      setTimeout(() => {
        location.replace("../index.html");
      }, 1000);
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
    }
  }
}

// LOGIN DO UTILIZADOR
export function login(username, password) {
  const user = users.find(

    (user) => user.username === username && user.password === password
  );
  if (user == true) {
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    if(user.type === "admin") {
      setTimeout(() => {
        location.replace("/html/admin.html");
      }, 1000);
    }
    else{
      return true;  
    }
  } else {
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

// OBTER lista de Users 
export function getUsers() {
  console.log(users)
  return users;
}

class User {
    username = ''
    type = ''
    password = ''
    name = ''
    email = ''
    sex = ''
    bday = ''
    place = ''
    photo = ''
    ranking = []
    progress = {}
    points = 0
    clues = 0
    book = {}

    constructor(username, type = 'user', password, name, email, sex, bday, place, photo = '../media/default.svg', ranking = [0, 0], progress={}, points=0, clues=0, book={}){
        this.username = username;
        this.type = type;
        this.name = name;
        this.password = password;
        this.email = email;
        this.sex = sex;
        this.bday = bday;
        this.place = place;
        this.photo = photo;
        this.ranking = ranking;
        this.progress = progress;
        this.points = points;
        this.clues = clues;
        this.book = book;
    }

    // get getUsername(){return this.#username};
    // get getType(){return this.#type};
    // get getName(){return this.#name};
    // get getPassword(){return this.#password};
    // get getEmail(){return this.#email};
    // get getSex(){return this.#sex};
    // get getBday(){return this.#bday};
    // get getPlace(){return this.#place};
    // get getPhoto(){return this.#photo};
    // get getRanking(){return this.#ranking};
    // get getProgress(){return this.#progress};
    // get getPoints(){return this.#points};
    // get getClues(){return this.#clues};
    // get getBook(){return this.#book};

    // set setUsername(value){this.#username = value};
    // set setType(value){this.#type = value};
    // set setName(value){this.#name = value};
    // set setPassword(value){this.#password = value};
    // set setEmail(value){this.#email = value};
    // set setSex(value){this.#sex = value};
    // set setBday(value){this.#bday = value};
    // set setPlace(value){this.#place = value};
    // set setPhoto(value){this.#photo = value};
    // set setRanking(value){this.#ranking = value};
    // set setProgress(value){this.#progress = value};
    // set setPoints(value){this.#points = value};
    // set setClues(value){this.#clues = value};
    // set setBook(value){this.#book = value}
}

// users.push(new User('bea','admin','123','Beatriz','bea@admin.com', 'f', '2003-10-23'));
// localStorage.setItem("users", JSON.stringify(users));