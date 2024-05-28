//map--------------------------------------------------------------

function myMap(arr, callback) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        let newEle = callback(arr[i]);
        newArr.push(newEle);
        i++;
    }
    return newArr;
}
let double = (e) => e * 2;
let upperWhole = (e) => e.toUpperCase();
let upperFirst = (e) => e[0].toUpperCase() + e.slice(1, e.length);

console.log(myMap([1, 2, 3], double));
console.log(myMap(["teller", "gabel", "tisch"], upperWhole));
console.log(myMap(["pizza", "bier", "pommes"], upperFirst));

//filter-----------------------------------------------------------

function myFilter(arr, callback) {
    let newArr = [];
    let i = 0;

    function func(arr, callback) {
        if (i < arr.length && callback(arr[i])) {
            newArr.push(arr[i]);
            i++;
            func(arr, callback);
        } else if (i < arr.length) {
            i++;
            func(arr, callback);
        }
    }
    func(arr, callback);
    return newArr;
}

// function myFilter(arr, callback) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

let includesGreen = (e) => e.includes("green");

console.log(
    myFilter(
        [
            "red t-shirt",
            "blue jeans",
            "green shirt",
            "green hat",
            "red glasses",
        ],
        includesGreen
    )
);

// reduce------------------------------------------------------------- not enough

function reduceFunc(arr, callback) {
    let accu;
    if (typeof arr[0] === "number") {
        accu = 0;
        for (let i = 0; i < arr.length; i++) {
            accu += callback(0, arr[i]);
        }
    } else if (typeof arr[0] === "string") {
        accu = ``;
        for (let i = 0; i < arr.length; i++) {
            accu += callback(``, arr[i]);
        }
    }

    return accu;
}
let arr = ["Alpha", "Beta", "Gamma"];
let nums = [1, 2, 3];

console.log(reduceFunc(arr, (a, n) => a + n));
console.log(reduceFunc(nums, (a, n) => a + n));
