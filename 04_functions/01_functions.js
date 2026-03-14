function sayMyName(){
    console.log("J");
    console.log("aywardhan")
    
}

// this is reference --> sayMyName,  this is calling the function--> sayMyName()

sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    let result = number1+number2
    return result;
}

function userLoggedIn(username="sam"){
    return `${username} just logged in`
}

console.log(userLoggedIn("Jaywardhan"))
//if nothing is passed and then used it will show undefined and sam is a default value



function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,400))


const user={
    username:"Jaywardhan",
    price:500
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the proce is ${anyObject.price}`)
}

handleObject(user);//two ways to pass as below

handleObject({
    username:"Kya Bhai",
    price:900
})


