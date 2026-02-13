// object using literal is normal but with the constructor is of singleton type

//singleton
// Object.create


//object literals

const JsUser = {
  "full name":"Jaywardhan Sharma",
  name:"Hitesh",
  age: 18,
  location: "Jaipur",
  email: "jaywardhan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["full name"]);//this is useful when key is declared as string


JsUser.name="JS"
Object.freeze(JsUser);//to stop changing values of any object

JsUser.greeting = function(){
    console.log("Hello JS User");
}
