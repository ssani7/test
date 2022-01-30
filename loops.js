// while loops 
var i = 0;
while( i < 10){
    console.log(i);
    i++;
}

// for loops
for(i = 10; i >= 0; i--){
    console.log(i);
}

//using loops in arrays

var loopArray = [2,4,3,5,6,7,9,8,10,27,78,30];

for(i = 0; i < loopArray.length; i++){
    console.log(loopArray[i])
}

// using break for stopping a loop 
for(i = 0; i < loopArray.length; i++){
    if(i == 10){
        break       //loop will stop after showing 10 items
    }
    console.log(loopArray[i])
}

//using continue to skip one step of a loop
for(i = 0; i < loopArray.length; i++){
    if(loopArray[i] == 10){     //will skip showing 10
        continue
    }
    console.log(loopArray[i])
}