const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`)
}

