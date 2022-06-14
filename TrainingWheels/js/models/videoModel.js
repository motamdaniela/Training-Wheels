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
    videos.push(new Video(url, tags, name, level));
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
export function getVideos(filterName = "", filterLevel = "", isSorted = false) {
  let filteredVideos = videos.filter(
    (video) =>
      (video.name.toLowerCase().includes(filterName.toLowerCase()) ||
        filterName === "") &&
      (video.genre == filterLevel || filterLevel === "")
  );

  filteredVideos = isSorted
    ? filteredVideos.sort((a, b) => a.name.localeCompare(b.name))
    : filteredVideos;

  return filteredVideos;
}

class Video{
    url =""
    tags = []
    name =""
    level = ""
    likes =0
    comments =[]

    constructor(url, tags, name,level,likes=0, comments=[]) {
        this.url = url;
        this.tags = tags;
        this.name = name;
        this.level = level;
        this.likes = likes
        this.comments = comments;
    }
}