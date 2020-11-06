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

    if (cnt === -1){
        let n = parseInt(line);
        if (n !== 0){
            console.log(1);
            if (n > 1) {
                console.log(1);
            }
            for (let i = 2; i < n;i++){
                console.log(fibonacci(i));
        }
        }
    }




    cnt++;
})