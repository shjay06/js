const user = {
    name: "jaywardhan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log('Username: ${this.username}');
        console.log(this);
        
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this)
//Global context differs as per the env

// const promiseOne = new Promise()
// //this new keyword is a constructor function

function User(username, loginCount,isLoggedin){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedin = isLoggedin

    return this
}

const userOne = new User("Jaywardhan",12,true)
const userTwo = new User("Jaywardhan",12,true)
console.log(userOne);
// this new is a constructor function and it gives new instance 