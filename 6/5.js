var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;



rl.on('line', function (line) {

    function fibonacci(num) {
        if (num <= 1) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    let x = 1;
    let y = 1;
    let z;
    let n = parseInt(line);
    if (n > 0 && n < 51) {
        console.log(1)
        if (n >1) {
            console.log(1)
            for (let i = 2; i < n; i++) {
                z = x + y;
                console.log(z);
                x = parseInt(y);
                y = parseInt(z);

            }
        }
    }





    cnt++;
})