// sparse arrays
function sparseArray(){
    var strings = ["aba", "baba", "aba", "xzxb"];
    var queries = ["aba", "xzxb", "ab"];
    var result = [];

    for(let j=0; j<queries.length; j++){
        var count = 0;
        for(let i=0; i<strings.length; i++){
            if(strings[i] == queries[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

console.log(sparseArray());