const user = {
    username: "Jaywardhan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// console.log(this)
// user.welcomeMessage()

// function print(){
//     let username="Jyawardhan"
//     console.log(this.username);
// }

// print()

//this can only get context in object, not in function


// const print = function(){
//     let username="Jawywardhan"
//     console.log(this.username);
// }


// const print = () => {
//     let username="Jawywardhan"
//     console.log(this.username);
//     console.log(this)
// }

// print()

// const AddTwo = (num1,num2)=>{
//     return num1+num2
// }


//One another way to return as same as above is called as implicit return

// const AddTwo = (num1,num2) => num1+num

//same can be done in below format also
const AddTwo = (num1,num2) => (num1+num)


console.log(AddTwo(3,4))