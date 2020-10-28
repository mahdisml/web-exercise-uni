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
    let a = await read();
    if (parseInt(a) >= 10) {
        console.log("Pass");
    }else{
        console.log("Fail");
    }
    cl.close();

})();
