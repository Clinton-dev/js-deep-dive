import view from "../utils/view.js";
import Story from "../components/Story.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Item() {
  const story = await getStory();
  //   console.log(story);
  view.innerHTML = `<div>
    ${Story(story)}
    <hr />
  </div>`;
}

async function getStory() {
  const id = window.location.hash.split("?id=")[1];
  console.log(id);
  const url = `${baseUrl}/item/${id}`;
  const response = await fetch(url);
  const story = await response.json();

  return story;
}
