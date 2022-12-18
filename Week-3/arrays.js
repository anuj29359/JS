var dept = ['CS', 'EC', 'ME', 'EN']

var ndept = new Array('CS', 'EC', 'ME', 'EN', 'IT', 'AI')

console.log(dept)
console.log(ndept)
console.log(typeof dept)
console.log(typeof ndept)

dept[1]= true;
dept[10] = false;
console.log("printing each element of the arr-----------------------")
for ( key in dept) {
    if (Object.hasOwnProperty.call(dept, key)) {
        const element = dept[key];
        console.log(key, element)
        
    }
}

console.log("array length is ", dept.length,"-----------------------")

console.log(dept)

// toString
console.log(dept.toString())
console.log(dept[6])

//creating empty array
var testArr = new Array(5);
console.log(testArr)

//check is a variable os Array type
console.log("is it an Array?", Array.isArray(testArr))

// reverse the elements
console.log(dept.reverse())
console.log(dept)

// push the elements at the end of the array
dept.push(10);
dept.push(99);
dept.push(777);
dept.push(555);
dept.push(true);
dept.push(false);
console.log(dept)

// sort the array
// first numbers, then String and then boolean balues, then undefined

dept[dept.length-2] = null;
dept[dept.length-1] = null;

console.log(dept.sort())
console.log(dept)
console.log(typeof dept[0])
dept[dept.length-2] = 11111;
dept[dept.length-2] = null;
dept[dept.length-1] = null;
for ( key in dept) {
    if (Object.hasOwnProperty.call(dept, key)) {
        const element = dept[key];
        console.log(key, element)
        
    }
}

console.log(dept.length)


// concat two arrays

dept.concat(ndept)
dept.push('CS')
console.log(ndept, dept.concat(ndept))
console.log(dept, dept.length)
console.log(dept.concat(ndept).sort().toString())