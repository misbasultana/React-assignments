let p1 = document.getElementById("pass1");
let checkBox = document.getElementById("check");

function checkBox()
{
    if(this.checked)
    {
        p1.setAttribute("type", "text");   
    }
    else
    {
        p1.setAttribute("type", "password"); 
    }
}
checkBox.addEventListener('change', checkBox);