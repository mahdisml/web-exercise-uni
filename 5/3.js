let readln = require('readline');
let cl = readln.createInterface(process.stdin, process.stdout);

let question = function() {
    return new Promise((res, _) => {
        cl.on('line', answer => {
            res(answer);
        })
    });
};
(async function main() {
    let answer = await question();

    console.log(`Welcome Dear ${answer}`);

    cl.close();

})();
