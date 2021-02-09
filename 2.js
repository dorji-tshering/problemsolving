// hourglass summation

let array2D = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];



function hourGlass(arr){
    var result = [];
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            result.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1]
                + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
        }        
    }
    function maxNum(array){
        let max = array[0];
        for(let i=1; i<array.length; i++){
            if(max < array[i]){
                max = array[i];
            }
        }
        return max;
    }
    const maxHourGlassSum = maxNum(result);
    return maxHourGlassSum;
}

 console.log(hourGlass(array2D));