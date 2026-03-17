// for of

// ["","",""]
// [{},{},{}]

const arr = [1,23,4,5,5,6]

for (const num of arr) {
    console.log(num);
}

//Maps

const map = new Map()
map.set("IN","INDIA")
map.set("FR","FRANCE")
map.set("USA","UNITED STATEs")

console.log(map)

for(const [key, value] of map){
    console.log(key, ":-",value)
}