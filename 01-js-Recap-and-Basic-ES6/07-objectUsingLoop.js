const user = {
  name: "Sujon Pal",
  age: 25,
  city: "sylhet",
};

// for in loop
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}


// for of loop
for(let [key,value] of Object.entries(user)){
    console.log(`${key} : ${user[key]}`);
}