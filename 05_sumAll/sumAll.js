const sumAll = function(start,end) {
    let output = 0;
    let temp = 0;
    if(typeof start !== 'number' || typeof end !== 'number'){
        return "ERROR";
    }else{
        if(start>end){
            temp = start;
            start = end;
            end = temp;
        }
        if(start < 0 || end < 0){
            return "ERROR";
        }
        while(start<=end){
            output = output + start;
            start++;
        }
        return output;
    }
}

// Do not edit below this line
module.exports = sumAll;
