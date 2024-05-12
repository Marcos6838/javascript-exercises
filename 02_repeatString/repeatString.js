const repeatString = function(string,amount) {
    let i = 0;
    let phrase = '';
    while(i < amount){
        phrase += string;
        i++;
    }
    if(amount < 0){
        phrase = "ERROR";
    }
    return phrase;
    
};

// Do not edit below this line
module.exports = repeatString;
