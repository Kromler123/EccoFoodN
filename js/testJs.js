let arr = [1, 2, 3, 4, 5, 55, 8, 0, 8];

let oddEveArr = (arr) =>
{
    let odd = [];
    let even = [];

    for (let index = 0; index < arr.length; index++) {
        (arr[index] % 2 === 0) ?
            even.push(arr[index]) :
            odd.push(arr[index]);
    }

    console.log('even = ', even);
    console.log('odd = ', odd);
}

oddEveArr(arr);