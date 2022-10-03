// * Part 1

const fibs = (n) => {
    let fibArr = [0, 1];
    for (let a = 1; a < n - 1; a++) {
        fibArr.push(fibArr[a - 1] + fibArr[a]);
    }
    return fibArr;
};

console.log(fibs(8));

////////////////////////////////////////

// * Part 2

const fibsRec = (n, arr2 = [0, 1]) => {
    if (arr2.length == n) return arr2;
    return fibsRec(n, [...arr2, arr2[arr2.length - 2] + arr2[arr2.length - 1]]);
};

console.log(fibsRec(8));
