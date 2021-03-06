var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;
let n;
let data = [];

/////////////////////////////////

let allData = []
let isDone = 0;
let max = 1000000;

function jam (number){
    let value = number;
    let sum = 0;

    while (value) {
        sum += value % 10;
        value = ~~(value / 10);
    }
    return number + sum
}

function isOK(number){
    if (isDone === 0) {
        max = Math.max(...data);
        let i = 1;
        while(i < max){
            allData.push(jam(i))
            i = i + 1;
        }
        isDone = 1;
    }
    if (allData.includes(number)){
        return "Yes";
    }
    return "No";
}

//////////////////////////

rl.on('line', function (line) {

    if (cnt === -1){
        n = parseInt(line)
    }else {
        data.push(parseInt(line))

        if (cnt === n - 1){
            for(let i = 0; i < data.length ; i++){
                console.log(isOK(data[i]));
            }
            cnt = -1;
            data = [];
            isDone = 0;
            allData = []
        }
    }




    cnt++;
})