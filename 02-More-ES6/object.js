// 🤷‍♂️ Access Nested Object Values

const user = {
  name: "Sujon",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user.address.city); //Dot Notation
console.log(user["address"]["country"]); //Bracket Notation

// 🤷‍♂️ Problem Without Optional Chaining ❌

// console.log(user.profile.bio); // ❌ TypeError: Cannot read properties of undefined
console.log(user.profile?.bio); // undefined (NO ERROR)



// An object with different types of keys
const person = {
  name: "Sujon",            // normal key
  age: 24,                  // normal key
  "full name": "Sujon Pal",  // key with space
  "user-role": "Frontend",  // key with special character
};

// Dot Notation (.)
console.log(person.age);
// console.log(person."full name") // Error


// Bracket Notation ([])
console.log(person['full name'])
console.log(person['user-role'])
