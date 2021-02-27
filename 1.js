// reverse array

function reverseArray(){
    let array = [1, 2, 3, 4, 5, 6, 7];
    reversed = [];

    for(let i=0; i<array.length; i++){
        reversed.unshift(array[i]);
    }
    return reversed;
}

console.log(reverseArray());
