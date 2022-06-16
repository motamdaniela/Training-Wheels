let testes

export function init() {
    testes = localStorage.testes ? JSON.parse(localStorage.testes) : [];
  }

export function add(name, level, sticker) {
    testes.push(new Test(name, level, sticker));
    localStorage.setItem("testes", JSON.stringify(testes));
}

export function getTests() {
    return testes;
}

class Test{
    name=''
    level=''
    sticker=''

    constructor(name, level, sticker) {
        this.name = name;
        this.level = level;
        this.sticker = sticker;
    }
}
