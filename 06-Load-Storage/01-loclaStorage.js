let name = 'Sujon'
let age = 25;

localStorage.setItem("AGE" , age);
localStorage.setItem("Name" , name);
console.log(localStorage.getItem('AGE'));
localStorage.removeItem("AGE");
