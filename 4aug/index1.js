const multiply = (a) =>
{
    const second = (b) =>
    {
        const third = (c) =>
        {
            console.log(a*b*c);
        }
        return third;
    }
    return second;
}

multiply(2)(5)(20);