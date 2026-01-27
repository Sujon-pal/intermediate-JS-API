const handlePost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPost(data));
};

const displayPost = (posts) => {
  const postcontainer = document.getElementById("postcontainer");
  for (let post of posts) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <h1>userId : ${post.userId}</h1>
    <h1>ID : ${post.id} </h1>
    <h3>Title : ${post.title} </h3>
    <h2> Body : ${post.body} </h2>
    `;
    postcontainer.appendChild(div);
  }
};
