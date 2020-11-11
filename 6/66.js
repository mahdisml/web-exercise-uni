function jaam(number) {
    let result = 0;
    while(number) {

        result = result + number % 10;
        number = parseInt(number / 10);

    }
    return result;
}
function isOk(number) {
    if(number<=100) {
        for(let i=0;i<=number;i++) {
            if (allData[i] == number)
                return "Yes";
        }
        return "No";
    }
    else{
        for(let i=number-54;i<=number;i++) {
            if (i + jaam(i) == number)
                return "Yes";
        }
        return "No";
    }
}

allData=[]
for(let i=1;i<101;i++) {
    allData[i] = i + jaam(i);
}
let fs = require("fs");
let {parse}=require("path");
let stdinBuffer = fs.readFileSync(0);
let lines = stdinBuffer.toString().split('\n');
let n = parseInt(lines[0]);
let allNumbers = [];
for(let i=0;i<n;i++) {
    allNumbers[i]=parseInt(lines[i+1]);
}
for(let i=0;i<n;i++) {
    console.log(isOk(allNumbers[i]))
}