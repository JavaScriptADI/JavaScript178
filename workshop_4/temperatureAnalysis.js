/*
Given an array of temperature values and write a program to find the following:
1. Maximum temperature
2. Minimum temperature
3. Average temperature
4. Number of temperatures above 32 degrees
5. Number of temperatures below 0 degrees
6. Number of temperatures between 0 and 15 degrees
7. draw a histogram of temperature values with each * representing 10 degree (round off the temperature values to nearest 10)
8. Convert the temperature values from Fahrenheit to Celsius and draw a histogram of 
temperature values with each * representing 1 degree
*/

let temperatures = [37, 25, 91, 30, 32, 35, 22, 45, 50, 19, 60, 87, 70, 75, 12, 85, 90];

function convert(fahrenheit) {
    return Math.round((fahrenheit - 32) * (5 / 9));
}

for (let i = 0; i < temperatures.length; i++){
    temperatures[i] = convert(temperatures[i]);
}

console.log(temperatures);


// 1

let max = temperatures[0];
for (const temp of temperatures) {
    if (temp > max) {
        max = temp;
    }
}

console.log('Maximum is ', max);
let min = temperatures[0];
for (const temp of temperatures) {
    if (temp < min) {
        min = temp;
    }
}

console.log('Minimum is ', min);

let avg = 0;
for (const temp of temperatures) {
    avg += temp;
}
avg /= temperatures.length;
console.log('Average is ', avg);


let results = {
    '32': 0,
    '0': 0,
    '0-15': 0,
}

for (const temp of temperatures) {
    if (temp > 32) {
        results['32']++;
    }
    if (temp < 0) {
        results['0']++;
    }

    if (0 <= temp && temp <= 15) {
        results['0-15']++;
    }
}

console.log('Above 32 ', results['32']);
console.log('Below 0 ', results['0']);
console.log('In between 0 and 15 ', results['0-15']);
let height = Math.abs(min) + Math.abs(max);
let histogram = [];
for (const temp of temperatures) {
    const bar = [];
    for (let i = 0; i <= height; i++) {
        bar.push(' ');
    }
    const di = temp > 0 ? -1 : 1;
    
    if (temp > 0) {
        for (let i = max; i > max - temp; i += di) {
            bar[i] = '.';
        }
    } else {
        for (let i = max + 1; i < max + 1 + Math.abs(temp); i++) {
            bar[i] = '.';
        }
    }


    // histogram.push(bar.join('\n'));
    histogram.push(bar);
    // console.log(bar.join('\n'));
    console.log(bar.join(''), temp);
    // break;
}

// console.log(histogram.join('\n'));
console.log(histogram);

let drawing = '';
for (let i = 0; i < height; i++) {
    row = '';
    for (const bar of histogram) {
        row += bar[i];
    }
    row += '\n';
    drawing += row;
}
console.log(drawing);