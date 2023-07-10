import view from "../utils/view.js";
import Story from "../component/Story.js";

export default async function Item() {
  const story = await getStory();
  //   console.log(story);
  view.innerHTML = `<div>
    ${Story(story)}
  </div>`;
}

async function getStory() {
  const id = window.location.hash.split("?id=")[1];
  console.log(id);
  const url = `https://node-hnapi.herokuapp.com/item/${id}`;
  const response = await fetch(url);
  const story = await response.json();

  return story;
}
