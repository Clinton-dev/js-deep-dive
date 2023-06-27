// function getData(baseUrl, route) {
//   fetch(`${baseUrl}${route}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
// getData("https://jsonplaceholder.typicode.com", "/posts");
// getData("https://jsonplaceholder.typicode.com", "/comments");

function getData(baseUrl) {
  return function (route) {
    return function (callback) {
      fetch(`${baseUrl}${route}`)
        .then((response) => response.json())
        .then((data) => callback(data));
    };
  };
}

const getSocialMediaData = getData("https://jsonplaceholder.typicode.com");
const getSocialMediaPosts = getSocialMediaData("/posts");
const getSocialMediaComments = getSocialMediaData("/comments");

getSocialMediaPosts((posts) => {
  posts.forEach((post) => console.log("Title: ", post.title));
});
