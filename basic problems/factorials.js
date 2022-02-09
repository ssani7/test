var factorial = 1;
for(let i = 1; i <= 7; i++){
    factorial = factorial * i;

}
console.log('basic factorial is', factorial);

// making function for factorials
function getFactorials(input){
    let factorial = 1;
    for(let i = 1; i <= input; i++){
        factorial = factorial * i;
    }
    return factorial
}

var firstInput = 8;
var factorial = getFactorials(firstInput);
console.log('first functional factorial is', factorial);

//using decrement 
let factorial2 = 1;
var str = "";
function decFactorial(input) {
    for(i = input; i > 0; i--){
        if(i!=1){
            str += i + "x";
        }
        else{
            str += i;
        }
        factorial2 = factorial2 * i;        
    }
    return [str,factorial2];
}
var decInput = 5;
var output = decFactorial(decInput);
var decfactorialInfo = output[0];
var decfactorialValue = output[1]; 
console.log('decrement function factorial is', decfactorialInfo, " = ", decfactorialValue);