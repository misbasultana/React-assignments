let a = 0, b = 1;
    function countWords( str)
    {
        let state = a;
        let wc = 0, i = 0;
    
        while (i < str.length)
        {
            if (str[i] == ' ' || str[i] == ' ')
                state = a;       
            else if (state == a){
                state = b;
                ++wc;
            }
            i++;
        }
        return wc;
    }
    const str = "Hello I am Misba";
    console.log(countWords(str));