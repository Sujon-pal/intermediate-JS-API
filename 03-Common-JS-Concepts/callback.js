function user(info,name) {
info(name)
}

const info = function (name) {
  console.log("My Name is " ,name);
};

user(info,"Sujon");
user(info,"Anika");
user(info,"Nimai");
