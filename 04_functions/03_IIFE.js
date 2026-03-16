//Immediately Invoked Function Expressions (IIFE)

//Reasons: 1. Don't want to get polluted with the global scope 2. And want to immediately to be executed

(function dbconnect(){
    console.log("DB Connected")
})();

(()=>{
    console.log("DB TWO Connected")
})();


((name)=>{
    console.log(`${name} is connected`);
})(`Jaywardhan`)