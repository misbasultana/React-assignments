const arr = [2,5,7,8,9,5,3,4,11,5];
arr.sort();

const sum = arr.reduce((total,num) => total += num);
console.log("Mean = ",sum/10);

const median = (arr[4] + arr[5]) / 2;
console.log("Median = ", median);
const obj = {};
arr.forEach(num => {
    if(!obj[num])
    {
        obj[num] = 1;
    }
    else
    {
        obj[num] += 1;
    }
});

let highestValue = -Infinity;
let digit = 0;

for(let key in obj)
{
    let value = obj[key];
    if(highestValue < value)
    {
        highestValue = value;
        digit = key; 
    }
}
console.log("Mode = ", digit);
