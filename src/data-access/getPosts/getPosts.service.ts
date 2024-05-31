import cleanupGetPosts from "./getPosts.formatter";

const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => cleanupGetPosts(json))
    .catch((error) => {
      throw new Error("Post api failed");
    });

export default getPosts;
