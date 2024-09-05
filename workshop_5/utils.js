export function getRandom(a = 0, b = 100) {
    const max = a > b ? a : b;
    const min = a < b ? a : b;
    return Math.round((Math.random() * (max - min)) + min);
}

export function prompNumber(message) {
    return Number(prompt(message));
}