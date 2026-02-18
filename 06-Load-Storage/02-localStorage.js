const handleLocalStorage = () => {
  const person = {
    name: "Sujon",
    age: 25,
    address: {
      country: "BD",
      city: "Sylhet",
    },
  };
  const convertedToString = JSON.stringify(person);
  localStorage.setItem("info", convertedToString);
};

const data = localStorage.getItem("info");
const convertObject = JSON.parse(data);
console.log(convertObject);






