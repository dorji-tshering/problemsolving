// array manipulation
function arrayManipulate(){
    var queries = [[2, 3, 603], [1, 1, 286], [4, 4, 882]];
    var n = 4;
    var array = [];
    // set all array elements to 0
    for(let i=0; i<=n; i++){
        array[i] = 0;
    }
    // manipulate with queries
    for(let j=0; j<queries.length; j++){
        for(let i=queries[j][0]; i<=queries[j][1]; i++){
            array[i] = array[i] + queries[j][2];
        }
    }
    var max = array.reduce((a, b) => Math.max(a,b));
    console.log(array);
    return max;
}
console.log(arrayManipulate());