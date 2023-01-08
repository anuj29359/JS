var arr = [10,11,12,13,14,15]

// find an array of even numbers given an array 

var evenNumArr= arr.filter(function(item){
    return item %2 == 0
})

console.log(evenNumArr);