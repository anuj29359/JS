var workingDays = new Array(5)

workingDays[0] = {day:"Monday", hours:5}
workingDays[1] = {day:"Tuesday", hours:4}
workingDays[2] = {day:"Wednesday", hours:6}
workingDays[3] = {day:"Thurday", hours:7}
workingDays[4] = {day:"Friday", hours:8}
workingDays[5] = {day:"Satday", hours:2.5}

console.log(workingDays);

var hours = workingDays.map(item => item.hours + 100)

var hour = workingDays.map(function(item){
    return item.hours + 1000
})


var hour = workingDays.map(function x(item){
    return item.hours + 1000
})

console.log(hours);
console.log(hour);