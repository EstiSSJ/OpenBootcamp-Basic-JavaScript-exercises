function fibonacci(num) {
    let result = [];

        for (let i = 0; i < num; i++) {
            if (i === 0 || i === 1) {
                result.push(1)
            } else {
                result.push(result[i - 1] + result[i - 2])
            }
        }

    return result;
}

console.log(fibonacci(6))
