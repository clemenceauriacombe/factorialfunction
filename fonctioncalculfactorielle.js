function factorielle(n) {
    if(n == 0) 
    {
    return 1 
    }
    if(n >= 0) 
    {
    return n * factorielle (n-1)
    }

} ;
console.log(factorielle (5));
console.log(factorielle (1));
console.log(factorielle (0));


