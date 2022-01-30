// variables
var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = true;

// array 
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('candy'); //this will be -1
items.push('envelop');
items.push('watch');
items.pop;

// conditions
if(items.length >= 4){
    console.log("You have many items on your desk");
}
else if(items.length == 4){
    console.log("You have only 4 itmes");
}
else{
    console.log('you have less than 4 items on your desk');
}

//loops

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