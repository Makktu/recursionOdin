const fibs = (n) => {
    let fibArr = [0, 1];
    for (let a = 1; a < n - 1; a++) {
        fibArr.push(fibArr[a - 1] + fibArr[a]);
    }
    return fibArr;
};

console.log(fibs(17));

////////////////////////////////////////
