const { PerformanceObserver, performance } = require('perf_hooks');

let data = [1000000];


/////////////////////////////

let allData = []
let isDone = 0;
let max = 1000000;

function jam (number){
    let value = number;
    let sum = 0;

    while (value) {
        sum += value % 10;
        value = ~~(value / 10);
    }
    return number + sum
}

function isOK(number){
    if (isDone === 0) {
        max = Math.max(...data);
        let i = 1;
        while(i < max){
            allData.push(jam(i))
            i = i + 1;
        }
        isDone = 1;
    }
    if (allData.includes(number)){
        return "Yes";
    }
    return "No";
}

////////////////
var t0 = performance.now()

console.log(isOK(1000000))

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

//
// console.log(isOK(10))
// console.log(isOK(100))
// console.log(isOK(2000))
// console.log(isOK(30000))
// console.log(isOK(400000))
// console.log(isOK(1000000))
//
//
// console.log(isOK(97))
// console.log(isOK(119))
// console.log(isOK(1311))