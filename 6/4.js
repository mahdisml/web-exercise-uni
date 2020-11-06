var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;
let m ;
let n ;


rl.on('line', function (line) {

    if (cnt === -1){
        m = parseInt(line)
    }else{
        n = parseInt(line)
        if ((n - m) > 1 || (n - m) < -1){
            if (n > m){
                for (let i = m ; i <= n ; i++){
                    console.log(i)
                }
            }else {
                for (let i = n ; i <= m ; i++){
                    console.log(i)
                }
            }
        }else{
            console.log("equal")
        }
    }




    cnt++;
})