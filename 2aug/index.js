const n = 7;

for(var i = 2; i < n/2; i++) {
    if(n % i == 0) {
        prime = false; 
        i=n;
    }
    else { 
        prime = true; 
    }

}

if(prime)
    console.log("Prime");
else
    console.log("Not Prime");