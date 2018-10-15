export const sports = ['football', 'basketball', 'baseball', 'voleyball', 'hockey', 'chess', 'texas poker'];
export const numbers = [0, 'f', {}, NaN, Infinity];
export const clauses = {
    startsWith: value => item => item,
    endsWith: value => item => item,
    isNaN: v => v,
    isFinite: v => v
}
export const radioMenuBuilder = (name, values = []) => radioBuilder(name, values[0]);

const radioBuilder = (name, value, index = 0, checked = false) => `${name} ${value} ${index} ${checked}`;
