function printTwoValues(val1, val2){
 console.log(val1 +":"+ val2);
}


Object.setPrototypeOf(areaOfSquare, printTwoValues)
Object.setPrototypeOf(areaOfRect, printTwoValues)
Object.setPrototypeOf(areaOfCircle, printTwoValues)

function areaOfSquare(sideLen){
    var area = sideLen * sideLen;
    printTwoValues("Area of the square is",area)
}


function areaOfRect(sideA, sideB){
    var area = sideA * sideB;
    printTwoValues("Area of the rectangle is",area)
}

function areaOfCircle(rad){
    let PI = eval(22/7);
    var area = rad * rad * PI;
    printTwoValues("Area of the circle is",Math.round(area))
}

areaOfSquare(5)
areaOfRect(5,4)
areaOfCircle(5)

console.log(Object.getPrototypeOf(areaOfCircle))

var obj={

    Name: "Temp",
    
    Price: 70,
    
    increasePrice: function(){
    
    console.log(this.Name);
    
    }
    
    }
    
     
    
    var secondObj=obj.increasePrice;
    
    secondObj();
    
    obj.increasePrice();


    var one={

        val: 10
        
        }
        
         
        
        var proto={
        
        protoVal: 100
        
        }
        
        var two={
        
        val: 100
        
        }
        
         
        
        one.__proto__=proto;
        
        two.__proto__=proto;
        
        two.__proto__.protoVal=50;
        
        console.log(one.protoVal);
        
        console.log(two.protoVal);


        var one={

            val: 10
            
            }
            
             
            
            var proto={
            
            protoVal: 100
            
            }
            
            var two={
            
            val: 100
            
            }
            
             
            
            Object.setPrototypeOf(one,proto)
            
            Object.setPrototypeOf(two,proto)
            
            two.protoVal=50
            
            console.log(one.protoVal);
            
                 console.log(two.protoVal)


                 var objs=[

                    {name: "One", val:1},
                
                    {name: "Two", val:3},
                
                    {name: "Three", val:5}
                
                ]
                
                objs.forEach(function(item){
                
                    console.log(item.val);
                
                });
                
                var mapObj=objs.map(function(item){
                
                   return item.val*item.val*item.val;
                
                })
                
                 
                
                mapObj.forEach(function(item){
                
                    console.log(item);
                
                });



                