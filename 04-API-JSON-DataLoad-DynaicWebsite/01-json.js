const user = {
  name: "Sujon",
  age: 25,
  address: {
    country: "Bangladesh",
    city: "Sylhet",
  },
  marks: [12, 20, 30, 45],
};

// Object ➜ JSON
const userJSON = JSON.stringify(user);
console.log("JSON:", userJSON);

// JSON ➜ Object
const userObject = JSON.parse(userJSON);
console.log("Object:", userObject);
