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
    let b = await read();

    console.log(parseInt(a)+parseInt(b));

    cl.close();

})();
