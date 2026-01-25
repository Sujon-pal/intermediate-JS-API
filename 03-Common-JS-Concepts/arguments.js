// Pass by Value
function changeNumber(num) {
  num = 99;
  console.log("Inside function:", num);
}

let myNumber = 69;
changeNumber(myNumber);
console.log("Outside function:", myNumber);

// Pass by Reference

function changeObject(obj) {
  obj.name = "Anika";
  console.log("Inside function:", obj);
}

let person = { name: "Sujon", age: 25 };
changeObject(person);
console.log("Outside function:", person);

// The person object changes because obj points to the same memory reference.



function replaceObject(obj) {
  obj = { name: "Bob" }; // trying to replace
}

let person2 = { name: "Alice" };
replaceObject(person2);
console.log(person2); // { name: 'Alice' } → unchanged
