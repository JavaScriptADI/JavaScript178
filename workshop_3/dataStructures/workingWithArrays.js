// Simple operation on array

let nums = [56, 76, 2, 125, -5];

// find length of array
console.log(nums.length); // 5

// find index of an element
console.log(nums.indexOf(3)); // 2

// find index of an element that doesn't exist
console.log(nums.indexOf(10)); // -1

// check if an element exists in an array
console.log(nums.includes(3)); // true


// iterate over an array and print each element
for (let i = 0; i < nums.length; i++) {
    // each execution of a block is called an iteration
    console.log(nums[i]);
}

// sum up all elements in an array
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(`Sum of all elemnts is: ${sum}`);

// find the maximum element in an array
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log(`Largest elemnt of an array is ${max}`);

// find the minimum element in an array
let min = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
}
console.log(`Smallest elemnt of an array is ${min}`);

// use for ... of loop to iterate over an array and print each element
for (const num of nums) {
    console.log(num);
}
