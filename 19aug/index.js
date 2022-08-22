let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let msg = document.getElementById("msg");
function checkPassword()
{
    if(p1.value === p2.value)
    {
        msg.innerText = "Password Matched ✔";
    }
    else
    {
        msg.innerText = "Password doesn't match 🗙"; 
    }
}
p1.addEventListener('keyup', checkPassword);
p2.addEventListener('keyup', checkPassword);