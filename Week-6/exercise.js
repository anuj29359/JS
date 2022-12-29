/*

Create an object var obj=[

{name:"One",val:55},
{name:"Two",val:48},
{name:"Three",val:2},
{name:"Four",val:105},
 {name:"Five",val:65},
]
Use forEach method to print only the objects having even val in the above array of objects.
Use Filter method to create a new array of object having val greater than 50. And print that new array of object.
Use the map method to create a new array of objects having val as the square of its initial val and print that new array of objects.

*/

var obj=[

    {name:"One",val:55},
    {name:"Two",val:48},
    {name:"Three",val:2},
    {name:"Four",val:105},
     {name:"Five",val:65},
    ]

// 1 
obj.forEach(element => {
    if(element.val %2 == 0){
        console.log(element);
    }
});


// 2 

var valGreaterThan50 = obj.filter(element =>  element.val > 50 )
console.log(valGreaterThan50);

// 3

var objSquare = obj.map(element => {
    nameVal = {name:element.name, val:element.val*element.val};
    return nameVal;
})

console.log(objSquare);


