function arrayManipulation(n, queries) {
    var queries = queries;
    var n = n+1;
    var array = [];
    // set all array elements to 0
    for(let i=0; i<=n; i++){
        array[i] = 0;
    }
    // just set the values of the endpoints, a and b+1(-ve) for optimization
    for(let j=0; j<queries.length; j++){
        array[(queries[j][0])] += queries[j][2];
        array[queries[j][1]+1] -= queries[j][2];
    }
    
    // add all positive(left) endpoints of each query in the array 
    // then store the greatest of max and sum in the max variable
    var max = 0;
    var sum = 0;
    for(let i=1; i<=n; i++){        
        sum += array[i];        
        max = Math.max(max, sum);  
    }
    return max;
}