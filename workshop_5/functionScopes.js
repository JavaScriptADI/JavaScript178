// Function Scopes

let number = 5;


function sum(nums) {
    let s = 0;

    for (let i = 0; i < nums.length; i++) {
        s += nums[i] + number;
    }
    return s;
}

const nums = [5, 25, 55, 75, 15];
console.log(sum(nums));

console.log(sum([1, 2, 3, 4, 5]));