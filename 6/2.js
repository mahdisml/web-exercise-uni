var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;



rl.on('line', function (line) {

    if (cnt === -1){
        let nm = line.split(' ');
        let n = parseInt(nm[0]);
        let m = parseInt(nm[1]);
        if (n > m){
            console.log(m);
            console.log(n);
        }else{
            console.log(n);
            console.log(m);
        }

    }




    cnt++;
})