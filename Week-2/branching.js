// You want to buy a smartphone having cost price of 30,000 rupees. But have 25,000 rupees in your account.
// Form a program with the above data and print "I can buy the phone"  if you are able to buy the phone else print ."I can't buy the phone"



// Now say you also have a credit card of limit 3000 rupees. Which you can use along with your account balance to purchase the phone.
// Use this data in the program and print if you are able to buy the phone now.
// If not how much extra money is still required to buy it ,print the money.

var cost = 30000;
var savings = 25000;
var credit_card_limit = 3000

function can_buy(price, savings, credit){
    if(price > (savings + credit)){
        console.log("I can't buy the phone. Need ",(savings + credit)-price , "rupees more ")
    
    }
    else
    console.log("I can buy the phone")

}

can_buy(cost, savings, credit_card_limit)
