// 🔹 Object.keys() -> Returns all keys (property names) of an object as an array.

const user = {
  name: "Sujon",
  age: 25,
  role: "Frontend Developer",
};

// const key = Object.keys(user);
// console.log(key);

// 🔁 Loop with keys

Object.keys(user).forEach((key) => {
  //   console.log(key, ":", user[key]);
});

// 🔹 Object.values() -> Returns all values of an object as an array.

const values = Object.values(user);
// console.log(values);

// 🔹 Object.entries() -> Returns key + value pairs as an array of arrays

const entries = Object.entries(user);
// console.log(entries);

// 🔁 Loop with entries

for (const [key, values] of Object.entries(user)) {
//   console.log(`${key}: ${values}`);
}

// 🔹  delete keyword (Avoid)
// ⚠️ Important -> delete changes the original object

//  -> Avoid in React state (use copy instead)

const user2 = {
  name: "Sujon",
  age: 22,
  role: "Frontend Developer",
};

delete user2.age;

// console.log(user2);

// 🔹  Object.seal()
/*
 👉 What it doe
 ❌ Cannot add new propertie
 ❌ Cannot delete propertie
 ✅ Can modify existing values
*/

const person = {
  name: "Sujon",
  age: 22,
};

Object.seal(person);

person.age = 23; // ✅ allowed
person.country = "BD"; // ❌ not allowed
delete person.name; // ❌ not allowed

// console.log(person);

// 🔹 Object.freeze()

/*
 👉 What it does
 ❌ Cannot ad
 ❌ Cannot delet
 ❌ Cannot modif
 🔒 Object becomes fully read-only
 */

 const freeze = Object.freeze(person);
 user.age = 99;      // ❌ ignored
user.country = "BD"; // ❌ ignored
delete user.name;    // ❌ ignored

console.log(person)