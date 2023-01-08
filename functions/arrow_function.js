var a = 10;
var b = 20; 
var c = 30;
var d = 40;

var add_without_param = () => {console.log("adding two numbers without params, 10 + 11 = ", 10+11);}

var add_two_num = (p,q) => {console.log("Adding two numbers", p, "+",q,"=", p+q);}

add_without_param();
add_two_num(c,d);
add_two_num(a,d);
add_two_num(b,d);

// factorial of a number using arrow function

var factorial = (n) =>{
    if(n == 1){
        return 1;
    }

    return n * factorial(n-1);
}

var f = 5;
console.log("factorial of", f, "! is", factorial(f));

var fact = function(n){
    if(n ==1){
        return 1;
    }

    return n * fact(n-1);
}

var y = fact(f);
console.log("factorial of", f, "! is", y);

var k = fact;


console.log(fact===factorial)
console.log(k.name, fact.name, factorial.name, factorial.length)