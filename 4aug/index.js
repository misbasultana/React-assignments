const n = parseInt(prompt("Enter the length of an array"));
const arr = new Array(n);
function array(n)
{
    for(let i =0; i<n ; i++)
    {
        let s = prompt("Enter ",i+1,"string");
        arr.push(s);
    }
}
array(n);
const vowels = ['a','e','i','o','u','A','E','I','O','U'];

let max = 0;
let str = " ";
for(let i of arr)
{
    let c = 0;
    for(let j in i)
    {
        if(vowels.includes(i[j]))
        c++;
    }
    if(c>max)
    {
        max = c;
        str = i;
    }
}
console.log(str);