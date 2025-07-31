const name = "jaywwardhan"
const repoCount = 51

// console.log(name+repoCount+" Value");

//Using string interpolation as it is the new way of writing

// console.log(`Hello my name is ${name} and have ${repoCount}`)

const gameName = new String(`Jaywardhan`)

// console.log(gameName);
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`t`));

const newString = gameName.substring(0,4)
console.log(newString);

const url = "https://hitesh.com/hitesh%20choudhary"

conaole.log(url.replace(`%20`,`-`))
