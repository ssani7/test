let namesArray = ['rofiq', 'shofiq','rofiq', 'shofiq', 'sogir', 'roijja', 'dulal', 'shofiq','sogir', 'shofiq']

function removeDuplicate(input){
    let uniqueConatiner =[];
    for(let element of input){
        if(uniqueConatiner.indexOf(element) == -1){
            uniqueConatiner.push(element);
        }
    }
    return uniqueConatiner;
}
var uniqueArray = removeDuplicate(namesArray);
console.log(uniqueArray);

