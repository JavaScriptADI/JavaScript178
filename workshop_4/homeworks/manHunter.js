let str = "";
for (let i = 0; i < 10; i++) {
    if (str.includes('?')){
        str += ' ';
        continue;
    }
    str += Math.random() > 0.5 ? " " : "?";
}


str = "          ?";
console.log(`"${str}"`);
for (let i = 0; i < str.length; i++) {
    if (str[i] === '?') {
        console.log('Found a question mark at index', i);
    }
}
