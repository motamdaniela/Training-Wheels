let users;

// CARREGAR UTILIZADORES DA LOCALSTORAGE
export function init() {
  users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

export function remove(username) {
  users = users.filter((user) => user.username !== username);
  localStorage.setItem("users", JSON.stringify(users));
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
    if (users.some((user) => user.type === "user")){
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
  if (user) {
    if(user.type === "admin") {
      setTimeout(() => {
        location.replace("/html/admin.html");
      }, 1000);
    }
    else{
      if(user.state==="unblocked") {
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        return true; 
      }else{
        return('User bloqueado!');
      }
       
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

// OBTER lista de Users 
export function getUsers() {
  console.log(users)
  return users;
}

export function attUserOnStorage(attUser){
  let users = JSON.parse(localStorage.getItem('users'))
  users.forEach((user,i) => {
      if (user.username === attUser.username) users[i] = attUser
  })
  localStorage.setItem('users', JSON.stringify(users))
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
    clues = 0
    points = 0
    book = {} 
    stickersLvl = []
    stickersBuy = []
    state = ''

    constructor(username, type = 'user', password, name, email, sex, bday, place='Portugal', photo = '../media/images/default.svg', ranking = [0, 0], progress={}, clues=0, points=0, stickersLvl =[], stickersBuy =[], state = 'unblocked'){
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
        this.clues = clues;
        this.points = points;
        this.stickersLvl = stickersLvl;
        this.stickersBuy = stickersBuy;
        this.state=state;
    }
}
