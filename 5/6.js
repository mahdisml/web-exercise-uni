let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let read = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};
(async function main() {
    let nm = (await read()).split(" ");
    let n = parseInt(nm[0]);
    let m = parseInt(nm[1]);
    let data = [];
    let lNumbers = 0;

    for(let i = 0; i < n; i++){
        data[i] = await read();
    }
    if (n > 0 && m < 101) {
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
    cl.close();
})();
