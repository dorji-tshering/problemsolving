// dynamic arrays

var queries = ["105", "117", "103", "210", "211"];

function dynamicArray(n, queries){
    var queries = queries;
    var n = n;
    var numOfQueries = queries.length;
    var result = [];
    var arr = [];
    var lastAnswer = 0;
    // create n empty arrays
    for(let i=1; i <= n; i++){
        arr.push([]);
    }

    // evaluate each queries based on its type
    for(let i=1; i<= numOfQueries; i++){        
        if(parseInt((queries[i-1].split(''))[0], 10) == 1){
            let temp = queries[i-1];
            let idx = ((((temp.split(''))[1] ^ lastAnswer)) % n);
            arr[idx].push((temp.split(''))[2]);            
        }
        
        if(parseInt((queries[i-1].split(''))[0], 10) == 2){
            let temp = queries[i-1];
            let idx = ((((temp.split(''))[1] ^ lastAnswer)) % n);
            let value = (temp.split(''))[2] % arr[idx].length;
            let element = arr[idx][value];
            lastAnswer = parseInt(element);
            result.push(lastAnswer);
        }
    }
    return result;
}
console.log(dynamicArray(2, queries));
