var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;



rl.on('line', function (line) {

    if (cnt === -1){
        let num = parseInt(line)
        if (num >= 15){
            console.log('a');
        }
        else if (num >= 10){
            console.log('b');
        }
        else if (num >= 5){
            console.log('c');
        }else {
            console.log('d');
        }
    }




    cnt++;
})