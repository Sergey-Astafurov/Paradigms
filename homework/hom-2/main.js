

const tableMultiply = (n) => {
    let count = 10
    for (let i = 1; i <= count; i++) {
        console.log(' ');
        for(let j = 1; j <= n; j++)
        console.log(`${i} * ${j} = ${j*i}`);

    }
}
console.log(tableMultiply(3));