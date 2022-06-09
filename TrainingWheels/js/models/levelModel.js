let niveis;

export function init() {
    niveis = localStorage.niveis ? JSON.parse(localStorage.niveis) : [];
  }

export function add(name) {
    if (niveis.some((nivel) => nivel.name === name)) {
      throw Error(`Level with name "${name}" already exists!`);
    } else {
      niveis.push(new Level(name));
      localStorage.setItem("niveis", JSON.stringify(niveis));
    }
  }

export function getLevels() {
    return niveis;
  }

class Level{
    name=''
  
    constructor(name) {
      this.name = name;
    }
  }