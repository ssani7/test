
function checkLeapYear(input) {
    if(input % 4 == 0 && input % 400 == 0 || input % 100 != 0){
        return true
    }
    else
    return false
}

let inputYear = 1900;
let isLeapYear = checkLeapYear(inputYear);
console.log(isLeapYear);
