const arr = [1, 3, 454, 6, 7, 7, 8, 423, 4, 2]
const sort_list_imperative = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(sort_list_imperative(arr));

const sort_list_declarative = arr => arr.sort((a, b) => a + b)
console.log(sort_list_declarative(arr));
