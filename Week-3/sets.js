//sets
// 1. Add method

var rollNumbers = new Set([101,102,99,55,200, 99])
console.log(rollNumbers)

rollNumbers.add(44)
console.log(rollNumbers.add(44))
console.log(rollNumbers)

// add new set

var newSet = new Set(["my roll number", "Youur roll number"])
rollNumbers.add(newSet)
console.log(rollNumbers)

// search for an element

console.log(rollNumbers.has(441))


// key, value, entries
console.log("keys", rollNumbers.keys())
console.log("values",rollNumbers.values())

console.log("entries",rollNumbers.entries())
