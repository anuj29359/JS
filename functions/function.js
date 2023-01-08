// function is an independent reusable code, designed to performa  specific task.

// two ways of writing a function -
// 1. Function (using function keyword)
// 2. Function expression ( function is assigned to a variable and var-name is used to execute the function. in te function expression the name of the function is optional.)
//      two types-
//      2.1 with function name
//      2.2 without the function name
addition()


function addition(a=0,b=0,c=0){
    console.log(a+b+c)

}


// function addition(){

//     var a = 10;
//     var b = 20;
//     var c = a+ b;
//     console.log(c)
// }

addition(1,3)
addition(30,40)
addition(30,40, 1000)
addition()
