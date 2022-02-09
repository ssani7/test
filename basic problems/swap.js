var first = 1;
var second = 2;

let container = first;
first = second;
second = container;

// destructing method 
[first, second] = [second,first];

console.log(first,second);