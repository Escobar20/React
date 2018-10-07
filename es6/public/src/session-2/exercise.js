import { average } from './spread-operator';

export const standardDeviation = (...sample) => {
    let sd = 0;

    if (sample.length > 0) {
        let avg = average(...sample);

        let deviation = sample.map(v => Math.pow(v - avg, 2))

        sd = Math.sqrt(average(...deviation));
    }
    return sd;
}

export const sports = ['football', 'basketball', 'baseball', 'voleyball', 'hockey', 'chess', 'texas poker'];
export const numbers = [0, 'f', {}, NaN, Infinity];
export const clauses = {
    startsWith: value => item => item,
    endsWith: value => item => item,
    isNaN: v => v,
    isFinite: v => v
}
