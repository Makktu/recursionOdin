"use strict";

const { merge } = require("requirejs");

let needsSorting1 = [3, 60, 16, 1, 15, 18, 802, 6];
let needsSorting2 = [7001, 45, 52, 11, 432, 134, 8];
// let needsSorting3 = [3, 60, 16, 1, 15, 18, 802, 6];

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let half = Math.ceil(arr.length / 2);
    let nextHalf1 = arr.slice(0, half);
    let nextHalf2 = arr.slice(half);
    // console.log(nextHalf1, nextHalf2);
    return mergeThem(mergeSort(nextHalf1), mergeSort(nextHalf2));
}

function mergeThem(nextHalf1, nextHalf2) {
    let sorted = [];

    while (nextHalf1.length > 0 && nextHalf2.length > 0) {
        nextHalf1[0] > nextHalf2[0]
            ? sorted.push(nextHalf2.shift())
            : sorted.push(nextHalf1.shift());
    }

    // return sorted array, concatenated with the leftover elements
    // in either firstArray or secondArray
    return [...sorted, ...nextHalf1, ...nextHalf2];
}

console.log(mergeSort(needsSorting1));
console.log(mergeSort(needsSorting2));
