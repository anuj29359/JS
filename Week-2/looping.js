// print following pattern
// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****

var col = 5;

for(var i =0; i < col; i++){
    var s ="";
    for (let index = col; index > i; index--) {
        s+="*"
    }
    console.log(s)
}

for(var i =0; i < col; i++){
    if(i == 0){
        continue;
    }
    var s ="";
    for (let index = 0; index <= i; index++) {
        s+="*"
    }
    console.log(s)
}


console.log()
console.log()
console.log()


for(var i=5;i>0;i--){var s='';for(var j=i;j>0;j--){s+='*';}console.log(s);}for(var i=0;i<5;i++){var s='';for(var j=0;j<=i;j++){s+='*';}console.log(s);}