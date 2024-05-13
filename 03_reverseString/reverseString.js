const reverseString = function(string) {
    let reverse = string.split("");
    let sizeReverse = reverse.length - 1;
    let i = 0;
    let output = "";
    while(sizeReverse >=0){
        output+= reverse[sizeReverse];
        sizeReverse--;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
