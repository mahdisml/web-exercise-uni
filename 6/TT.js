function jam (number){
    let result = number;
    let num = number.toString()
    for (let i = 0; i < num.length; i++) {
        result = result + parseInt(num[i]);
    }
    return result;
}
function isOK(number){

    for (let i = 1; i < 1000000; i++){
        if (jam(i) === number){
            return "Yes";
        }
    }
    return "No";
}
let data = [];
for (let i = 1; i < 1000000; i++){
    if (isOK(i) === "No"){
        data.push(i)
    }
    console.log(i)
}
console.log(data)
