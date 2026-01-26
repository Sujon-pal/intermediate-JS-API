// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// 🤷‍♂️ display data on UI
const handleLoadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// 33-4 Load more data, more APIs, send data to function

const handleLoadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUser(data);
    });
};

const displayUser = (users) => {
  console.log(users[0]);
};
