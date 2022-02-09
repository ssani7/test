//1. feet to inches
const inches = 56;
function feetToInches(inches){
    const feet = inches / 12;
    return feet;
}
const feets = feetToInches(inches);
console.log(feets);
//2. centemeter to meter
const centemeter = 86; 
function centimeterToMeter(cm){
    const meter  =  cm / 100;
    return meter;
}
console.log(centimeterToMeter(centemeter));

//3
function pageRequirement(input1, input2, input3) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;
    const pagesForFirst = input1 * firstBookPages;
    const pagesForSecond = input2 * secondBookPages;
    const pagesForThird = input3 * thirdBookPages;
    const totalPages = pagesForFirst + pagesForSecond + pagesForThird;
    return totalPages; 
}
console.log(pageRequirement(2,3,1));

// 4. biggest name from array is best friend
const friends = ['rohimuddin', 'korimuddin', 'solimuddin','rifatuuddin'];
function bestFriend(names){
    let biggest = names[0];
    for(const name of names){
        if( name.length > biggest.length){
            biggest = name;
        }
    }
    return biggest;
}
console.log('my best friend is ' + bestFriend(friends));

// 5. stop the loop if array contains a negative number
    const numbers = [5,4,9,-2,8,4,6,15,4,8];
    function onlyPositive(){
        let positives = [];
        for(number of numbers){
            if(number >= 0){
                positives.push(number);
            }
            else{
                break;
            }
        }
        return positives;
}
    console.log(onlyPositive(numbers));
    
// search an item in an array
    const friends1 = ['rohimuddin', 'korimuddin', 'solimuddin','rifatuuddin'];
    function searchItem(items, searchItem){
        const position = items.indexOf(searchItem);
        const error = "nothing found";
        for(const item of items){
                if(position > -1 ){
                return 'item position is ' + position;
            }else{
                return error;
            }
        }
}
    console.log(searchItem(friends1, 'solimu-ddin'));
// recursion */