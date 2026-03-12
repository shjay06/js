//Object can be declared in Literal format and as well as in singleton format, Here we will use singleton format

// const tinderUser1 = new Object();
// console.log(tinderUser1);  // below and this code will give us the same output, only this one is singleton object and below one is not

const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Jaywardhan"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        username:{
            firstname:"Jaywardhan",
            lastname:"Sharma"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"d",6:"h"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

// console.log(obj4);

const obj4 = {...obj1,...obj2} //this is spread operator and will work same as above

// console.log(obj4);


const users=[
    {
        id:1,
        email:"one@gmail.com"
    },
    {
        id:2,
        email:"two@gmail.com"
    },
    {
        id:3,
        email:"three@gmail.com"
    },
    {
        id:4,
        email:"four@gmail.com"
    },
    {
        id:5,
        email:"five@gmail.com"
    },
    {
        id:6,
        email:"six@gmail.com"
    }
]


users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));  //this will return arrays of keys and that can be used as per our requirement by looping and other stuffs
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

