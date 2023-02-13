//  call backs
/*function one(para){
    console.log("One");
    para();
}
function two(){
    console.log("Two!!")
}
one(two); */


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let order=(call_production)=>{
    console.log("Order placed!!");
    call_production();
}
let production=()=>{
    console.log("Start Production!!");
}
order(production);