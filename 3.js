// rotating array elements by given figure

function rotateArray(){
    var arr = [1, 2, 3, 4];
    var rotated = [];
    var d = 12;

    for(let i=0; i<arr.length; i++){
        let idx = i-d;
        if(idx < 0){
            if((idx + arr.length) >= 0){
                idx = arr.length + idx;
            }
            if((idx + arr.length) < 0){
                while (true){
                    idx = idx + arr.length;
                    if((idx + arr.length) >= 0){
                        idx = idx + arr.length;
                        break;
                    }
                }
            }

        }
        rotated[idx] = arr[i];
    }
    return rotated;
}
console.log(rotateArray());