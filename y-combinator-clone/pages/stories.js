import View from "../utils/view.js";

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  View.innerHTML = `<div>
    ${
      hasStories
        ? stories.map((story) => JSON.stringify(story))
        : "No stories found, try later!!!"
    }
  </div>`;
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  } else if (isNewRoute) {
    path = "/newest";
  }

  const baseUrl = "https://node-hnapi.herokuapp.com";
  const fullUrl = baseUrl + path;

  const response = await fetch(fullUrl);
  const stories = await response.json();

  return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
// /jobs (jobs) -> /jobs
