/////////////////////////////tasks
// function sumOfArray(arr) {
//     let sum = null;
//     for (const element of arr) {
//         sum += element
//     }
//     return sum;
// }
// console.log(sumOfArray([2, 4, 6, 8]));

// function maxNum(a) {
//     let max = -Infinity;
//     for (const element of a) {
//         if (element > max) max = element;
//     }
//     return max;
// }
// console.log(maxNum([3, 8, 1, 6, 2]));
// console.log(maxNum([1, 2, 5, 7, 9]));
// console.log(maxNum([1, 2, 3, 4, 5]));

// function evenCount(a) {
//     let cnt = 0;
//     for (const element of a) {
//         if(element % 2 == 0){
//             cnt++;
//         }
//     }
//     return cnt;
// }
// console.log(evenCount([1, 2, 3, 4, 5, 6]));
// console.log(evenCount([2, 4, 6, 8]));
// console.log(evenCount([1, 3, 5, 7, 9]));

// function isPresent(a, b) {
//     return a.includes(b)
// }
// console.log(isPresent([10, 20, 30, 40, 50], 30));
// console.log(isPresent([1, 2, 3, 4, 5], 7));
// console.log(isPresent([123, 222, 321], 321));

// function arithmetic(a) {
//     let cnt = 0;
//     for (let el of a) {
//         cnt += el;
//     }
//     return cnt/a.length;
// }
// console.log(arithmetic([2, 4, 6, 8]));
// console.log(arithmetic([1, 4, 6, 9, 10]));
// console.log(arithmetic([2, 4]));

// function findIndex(a, b) {
//     return a.indexOf(b);
// }
// console.log(findIndex([1, 2, 3], 2));
// console.log(findIndex([3, 4, 5, 3, 1, 5, 5, 5, 7, 6], 5));

// function removeDuplicates(a) {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a.indexOf(a[i]) == i) {
//             arr.push(a[i]);
//         }
//     }
//     return arr;
// }
// console.log(removeDuplicates([1, 2, 2, 1, 5, 6]));