var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let cnt = -1;
let n;
let m;
let data = [];
let lNumbers = 0;

rl.on('line', function (line) {

    if (cnt === -1){
        let nm = line.split(' ');
        n = parseInt(nm[0]);
        m = parseInt(nm[1]);
        cnt++;
    }
    else{
        if (cnt < n - 1){
            data[cnt] = line;
            cnt++;
        } else{
            if (n > 0 && m < 101) {
                data[cnt] = line;
                cnt++;
                for (let i = 0; i < n - 1; i++) {
                    for (let j = 0; j < m - 1; j++) {
                        if (data[i][j] === "*") {
                            isL(i, j)
                        }
                    }
                }
            }
            function isL(a,b){
                let k1 = 1;
                for(let i = a; i < n; i++){
                    if (k1 > 0 && data[i][b] === "*") {
                        let k2 = 1;
                        for(let j = b; j < m; j++){
                            if ((k1 === (2*k2)) && (k2 > 1) && (data[i][j] === "*")){
                                lNumbers++
                            }
                            if (k2>1 && data[i][j] === "."){
                                break;
                            }
                            k2++;
                        }
                    }
                    if (k1 > 1 && data[i][b] === "."){
                        break;
                    }
                    k1++;
                }
                return false;
            }
            console.log(lNumbers)
        }
    }
    }
)
