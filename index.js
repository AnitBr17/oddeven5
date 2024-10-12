const numbers = [1,2,3,45,6,7];

let evenNum = [];
let oddNum = [];
for(let i = 0; i < numbers.length;i++){
    if(numbers[i] % 2 === 0){
        evenNum.push(numbers[i]);
    }
    else {
        oddNum.push(numbers[i]);
    }
}
console.log(evenNum);
console.log(oddNum);
