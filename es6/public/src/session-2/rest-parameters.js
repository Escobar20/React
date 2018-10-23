export const sum = (...elements) => elements.reduce((a, b) => a + b, 0);

export const multiplier = (n, ...elements) => elements.map(element => element * n);
