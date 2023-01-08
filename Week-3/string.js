let quote = " 1234567890 abcde123456789"

var len = quote.length
console.log("lenghth of the string is ", len)

// string to array
console.log(quote.split(" "))
console.log(quote.split(" ").toString())

var st =quote.split(" ").toString()
console.log(st.replace("," , " "))

//slice
console.log("slice",quote.slice(9,15))
console.log("slice",quote.slice(-20,15))

//subString
console.log("subString",quote.substring(10,15))
console.log("subString",quote.substring(19,-5))

//substr
// start, length
console.log("subStr",quote.substr(6,15))

// replace replaceAll()
console.log(quote.replace("12", "zz"))
console.log(quote.replaceAll("12", "zz"))


// UPPER lower
console.log(quote.toUpperCase(), quote.toLowerCase())

//trim
console.log(quote.trim())


//++++++++++++++++++++++++++++++++++ STRING SEARCHING +++++++++++++++++++++++++++


// indexOf lastIndexOf
console.log(quote.indexOf("45"))
console.log(quote.charAt(quote.indexOf("45")))

console.log(quote.lastIndexOf("45"))
console.log(quote.charAt(quote.lastIndexOf("45")))

// startsWith
console.log(quote.startsWith("123"))
console.log(quote.startsWith(" "))
console.log(quote.startsWith("wfw"))

//endsWith
console.log(quote.endsWith("89"))
console.log(quote.endsWith("891"))
console.log(quote.endsWith(" "))


//includes ==> contains

console.log(quote.includes("67 "))