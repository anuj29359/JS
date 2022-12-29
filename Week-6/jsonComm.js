
const objStr = `[
    {
        "name":"JSON",
        "type":"Exchange format",
        "similar types":["XML","YML","CSV"],
        "rating":10
    }
]`

console.log(objStr);
console.log(typeof objStr);


var obj = JSON.parse(objStr)
console.log(typeof obj);

obj.push({name: "fixed width", type:"TXT"})
console.log(typeof obj);
console.log(obj);

var newStringObj = JSON.stringify(obj)
console.log(typeof newStringObj);
console.log(newStringObj);
