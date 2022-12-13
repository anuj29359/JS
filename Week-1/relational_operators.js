// Create a program to perform various operation on given data- 40, 58

// Compare and check if the given number are equal and have same data type.
// Print true if first number is greater then second, else print false.
// Print whether second number is greater or not.

let num1 = 40, num2= 58;
let fname = "Anuj"
let num1_clone = 40;

function is_equal(num1, num2){
    if(num1==num2){
        console.log("the two numbers are same")
    }
    else
    console.log("Numbers are not same")
}

function is_same_datatype(var1, var2){
    if(var1===var2){
        console.log("same data type")
    }
    else
    console.log("different datatype")
}

console.log("comparing loose equality")

is_equal(num1, num2);
is_equal(num1,num1_clone)
is_equal(num1, fname)


is_same_datatype(num1, num2);
is_same_datatype(num1,num1_clone)
is_same_datatype(num1, fname)

console.log("comparing loose equality", 5=='5')
console.log("strict equality", num1===num1_clone)