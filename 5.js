// stacks

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {   
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

function processData(){
    var primes = primeFactorsTo(1000000);
    var numbers = [3, 4, 7, 6, 5];
    var iterations = 1;
    var answers = [];

    for(let i=0; i<iterations; i++){
        var A = [];
        var B = [];

        for(let k=numbers.length-1; k>=0; k--){
            if((numbers[k] % primes[i]) == 0){
                B.unshift(numbers[k]);
            }else{
                A.push(numbers[k]);
            }
        }
        for(let i=0; i<B.length; i++){
            answers.push(B[i]);
        }
        numbers = A;
    }
    for(let i=A.length-1; i>=0; i--){
        answers.push(A[i])
    }
    return answers;
}

console.log(processData());