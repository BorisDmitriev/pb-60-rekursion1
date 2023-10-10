function sum(arr) {
    if( arr.length === 0 ) return 0;
    //Funktionslogik
    const n = arr.pop();
    return n + sum(arr);
}



const array = [1, 2, 3, 4, 5, 6]
// const array = [1, 2]
console.log( sum(array ))  // return 21