const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const arr = text.split(" ");
let word = "";
let max = -Infinity;
const vowels = ['a','e','i','o','u','A','E','I','O','U'];
for(let i of arr)
{
    let c = 0;
    for(let j in i)
    {
        if(vowels.includes(i[j]))
        {
            c++;
        }
        if(c > max)
        {
            max = c;
            word = i;
        }
    }
}
console.log(word);