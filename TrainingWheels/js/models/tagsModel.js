let tags;

export function init() {
    tags = localStorage.tags ? JSON.parse(localStorage.tags) : [];
  }

export function add(video, tag, name) {
    // if (tags.some((tag) => tag.name === name)) {
    //   throw Error(`Tag with name "${name}" already exists!`);
    // } else {
      tags.push(new Tag(video, tag, name));
      localStorage.setItem("tags", JSON.stringify(tags));
    // }
  }

export function getTags() {
  return tags;
}

class Tag{
    video = ''
    tag = ''
    name = ''
  
    constructor(video, tag, name) {
      this.video = video;
      this.tag = tag;
      this.name = name;
    }
  }