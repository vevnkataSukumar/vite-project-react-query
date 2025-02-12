const APP_URL = 'http://localhost:3000';
const fetchPosts = async (page) => {
  const api = page ? `${APP_URL}/posts?_sort=-id&_page=${page}&_per_page=5`: `${APP_URL}/posts`;
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }
  const postsData = await response.json();

  return postsData;
};

const fetchTags = async () => {
  const response = await fetch(`${APP_URL}/tags`);
  const tagsData = await response.json();
  return tagsData;
};

const addPost = async (post) => {
  const response = await fetch(`${APP_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { fetchPosts, fetchTags, addPost };
