let videos;

// CARREGAR BANDAS DA LOCALSTORAGE
export function init() {
  videos = localStorage.videos ? JSON.parse(localStorage.videos) : [];
}

// ADICIONAR BANDA
export function add(url, tags, name, level) {
  if (videos.some((video) => video.name === name)) {
    throw Error(`Video with name "${name}" already exists!`);
  } else {
    videos.push(new Band(url, tags, name, level));
    localStorage.setItem("videos", JSON.stringify(videos));
  }
}

// REMOVER BANDA
export function removeVideo(name) {
  videos = videos.filter((video) => video.name !== name);
  localStorage.setItem("videos", JSON.stringify(videos));
}

// DEFINIR A BANDA ATUAL (AQUELA QUE SERÁ VISTA NO DETALHE DA BANDA)
export function setCurrentVideo(name) {
  localStorage.setItem("video", name);
}

// OBTER A BANDA ATUAL (TODO O OBJETO)
export function getCurrentVideo() {
  return videos.find((video) => video.name === localStorage.getItem("video"));
}

// ORDENAR BANDAS
export function sortVideos() {
  videos.sort((a, b) => a.name.localeCompare(b.name));
  //localStorage.setItem("videos", JSON.stringify(videos));
}

// OBTER BANDAS (COM SUPORTE A FILTROS E ORDENAÇÕES)
export function getVideos(filterName = "", filterGenre = "", isSorted = false) {
  let filteredVideos = videos.filter(
    (video) =>
      (video.name.toLowerCase().includes(filterName.toLowerCase()) ||
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
    level =0
    likes =0
    comments =""

    constructor(url, tags, name,level,likes, comments) {
        this.url = url;
        this.tags = tags;
        this.name = name;
        this.level = level;
        this.comments = comments;
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