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
function getSum(n)
{
    let sum = 0;
    while (n !== 0)
    {
        sum = sum + n % 10;
        n = n / 10;
    }
    return sum;
}

function isOK(number){
    for(let m = 1; m <= number; m++)
    {
        if (m + getSum(m) === number)
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
        }
    }




    cnt++;
})