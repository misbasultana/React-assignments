function largest(arr, n)
{
    arr.sort();
    return arr[n-1];
}
 
    let arr = [10, 20, 15, 30];
    let n = arr.length;
    
    console.log(largest(arr, n));