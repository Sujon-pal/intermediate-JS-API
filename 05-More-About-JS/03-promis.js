const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((ref) => ref.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

loadData();

const myPromise = () => {
  return new Promise((reslove, reject) => {
    const success = true;

    if (success) {
      reslove("Task completed");
    } else {
      reject("Task failed");
    }
  });
};

myPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 🖍️ Promise Chaining

const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/2",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

