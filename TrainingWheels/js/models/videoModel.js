let videos;

// CARREGAR BANDAS DA LOCALSTORAGE
export function init() {
  videos = localStorage.videos ? JSON.parse(localStorage.videos) : [];
}

// ADICIONAR BANDA
export function add(url, tags, name, level) {
  if (videos.some((video) => video.name === name)) {
    throw Error(`Band with name "${name}" already exists!`);
  } else {
    videos.push(new Band(url, tags, name, level));
    localStorage.setItem("videos", JSON.stringify(videos));
  }
}

// REMOVER BANDA
export function removeVideo(name) {
  videos = videos.filter((band) => band.name !== name);
  localStorage.setItem("videos", JSON.stringify(videos));
}

// DEFINIR A BANDA ATUAL (AQUELA QUE SERÁ VISTA NO DETALHE DA BANDA)
export function setCurrentVideo(name) {
  localStorage.setItem("video", name);
}

// OBTER A BANDA ATUAL (TODO O OBJETO)
export function getCurrentVideo() {
  return videos.find((band) => band.name === localStorage.getItem("band"));
}

// ORDENAR BANDAS
export function sortVideos() {
  videos.sort((a, b) => a.name.localeCompare(b.name));
  //localStorage.setItem("videos", JSON.stringify(videos));
}

// OBTER BANDAS (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function getVideos(filterName = "", filterGenre = "", isSorted = false) {
  let filteredVideos = videos.filter(
    (band) =>
      (band.name.toLowerCase().includes(filterName.toLowerCase()) ||
        filterName === "") &&
      (band.genre == filterGenre || filterGenre === "")
  );

  filteredVideos = isSorted
    ? filteredVideos.sort((a, b) => a.name.localeCompare(b.name))
    : filteredVideos;

  return filteredVideos;
}

class Video{
    url =""
    tags =""
    name =""
    likes =0
    comments =""
    level =0

    constructor(url, tags, name, likes, comments, level) {
        this.url = url;
        this.tags = tags;
        this.name = name;
        this.comments = comments;
        this.level = level;
    }

    // get getUrl () { return this.#url }
    // set setUrl (value) { this.#url = value}

    // get getTags () { return this.#tags }
    // set setTags (value) { this.#tags = value}

    // get getName () { return this.#name }
    // set setName (value) {this.#name = value}

    // get getLikes () {return this.#likes}
    // set setLikes (value) {this.#likes = value}

    // get getComments () { return this.#comments}
    // set setComments (value) {this.#comments = value}

    // get getLevel () {return this.#level}
    // set setLevel (value) {this.#level = value}

}