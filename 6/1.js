var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;

let h;
let w;
let p;


rl.on('line', function (line) {

    if(cnt === -1){
        h = parseInt(line)
    }
    else if(cnt === 0){
        w = parseInt(line)
    }
    else {
        p = parseInt(line)
        console.log(h*w*p);
    }




    cnt++;
})