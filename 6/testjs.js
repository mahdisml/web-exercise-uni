const { PerformanceObserver, performance } = require('perf_hooks');


/////////////////////////////
function getSum(n)
{
    let sum = 0;
    while (n !== 0)
    {
        sum = sum + n % 10;
        n = n / 10;
    }
    return sum;
}

function isOK(number){
    for(let m = 1; m <= number; m++)
    {
        if (m + getSum(m) === number)
            return "Yes";
    }
    return "No";
}

////////////////
var t0 = performance.now()

console.log(isOK(1000000))

var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

console.log(isOK(515))
console.log(isOK(97))
console.log(isOK(119))
console.log(isOK(1311))
