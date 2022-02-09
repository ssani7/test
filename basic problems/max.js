const first = 56;
const second = 85;
const third = 125;

function getBiggest(input1, input2, input3) {
    if (input1 > input2 && input1 > input3){
        return input1;
    }else if(input2 > input1 && input2 > input3){
        return input2;
    }else{
        return input3
    }
}
var biggestNumber = getBiggest(first, second, third);
var biggestMath = Math.max(first,second,third);
console.log(biggestMath);
