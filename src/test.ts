/**
 * Function to find the largest sum of digits within a string in the given array.
 * @param arr - Array of strings containing letters and digits
 * @returns The largest sum of digits found in any single string
 */
function findLargestSumOfDigits(arr: string[]): number {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        const str = arr[i];

        for (let j = 0; j < str.length; j++) {
            const char = str[j];

            if (char >= '0' && char <= '9') {           
                currentSum += Number(char);
        }
    }

    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
}

return maxSum;
}

// Example usage:
const inputArray = ["dh7js4jf", "or2rjvn2w", "h1n36mfl", "a7e6fw"];
const result = findLargestSumOfDigits(inputArray);
console.log(result); 