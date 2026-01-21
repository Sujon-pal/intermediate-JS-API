class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  login() {
    console.log(this.name, "logged in");
  }
}

class Admin1 extends user {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
}

const user1 = new Admin1("Sujon", 25, 2132020121);
console.log(user1);
user1.login();
