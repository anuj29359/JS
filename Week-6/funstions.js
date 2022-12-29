/*
Write a program having four methods -

1. One for printing some values say two values one is string and one is number..
2. One for calculating area of square,this method will be expecting two parameter one is edge of square and the other is the print method we created in previous step.Pass the area of square to the print method as second parameter to it,First parameter will be “Area of square is: “. The final output should be “Area of square is : calculatedArea”.
3. One for calculating area of rectangle,this method will be expecting three parameter two are length and width of rectangle and the other is the print method we created in first step.Pass the area of rectangle to the print method as second parameter to it,First parameter will be “Area of rectangle  is: “. The final output should be “Area of rectangle is : calculatedArea”.
4. One for calculating area of circle,this method will be expecting two parameter one is radius of circle and the other is the print method we created in previous step.Pass the area of circle to the print method as second parameter to it,First parameter will be “Area of circle is: “. The final output should be “Area of square is : calculatedArea”.
*/

function printTwoValues(str, num){

    console.log(str + ":" + num);
    
}


printTwoValues("Hello",10)


function areaOfSquare(sideLen, printTwoValues){
    var area = sideLen * sideLen;
    printTwoValues("Area of the square is",area)
}


function areaOfRect(sideA, sideB, printTwoValues){
    var area = sideA * sideB;
    printTwoValues("Area of the rectangle is",area)
}

function areaOfCircle(rad, printTwoValues){
    let PI = eval(22/7);
    var area = rad * rad * PI;
    printTwoValues("Area of the circle is",Math.round(area))
}

areaOfSquare(10, printTwoValues);
areaOfRect(10, 20, printTwoValues);
areaOfCircle(10, printTwoValues);
