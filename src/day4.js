import React from "react";
var a=50;
var b=60;
let sum=a+b;
if (sum>50){
    var c=4;
    switch(c){
        case 1:console.log("Monday");
        break;
        case 2:console.log("Tuesday");
        break;
        case 3:console.log("Wednesday");
        break;
        case 4:console.log("Thursday");
        break;
        case 5:console.log("Friday");
        break;
        case 6:console.log("Saturday");
        break;
        case 7:console.log("Sunday");
        break;
        default:console.log("Invalid");
        break;
    }
}
else{
    console.log("the sum is not greater than 50");
}



// var a=5;
// function add(a,Welcome){
//     console.log("The call's answer is",a);
//     Welcome();
// }
// add(a,Welcome);
// function Day4(){
//     return(
//     <div>
//         hello world
//     </div>
//     )
// }
// function Welcome(){
//     console.log("Welcome");
// }

// function greet(name,callback){
//     console.log("Hello "+name);
//     callback();
// }
// function sayBye(){
//     console.log("GoodBye!");
// }
// greet("rosie",sayBye);
// export default greet;