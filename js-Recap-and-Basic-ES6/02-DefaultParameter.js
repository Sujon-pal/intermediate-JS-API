// ❌ Problem Without Default Parameter

function greet(name) {
  console.log("Hello " + name);
}

greet(); // Output: Hello undefined

//  Solution: Default Parameter

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest
greet("Sujon"); // Hello Sujon
