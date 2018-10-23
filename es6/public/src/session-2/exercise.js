import { average } from "./spread-operator";

export const standardDeviation = (...sample) => {
    if (sample.length === 0) {
        return 0;
    }

    const avg = average(...sample);

    const dist = sample.reduce((sum, x) => sum + Math.pow(x - avg, 2), 0)

    return Math.sqrt(dist / sample.length);
}
export const sports = ['football', 'basketball', 'baseball', 'voleyball', 'hockey', 'chess', 'texas poker'];
export const numbers = [0, 'f', {}, NaN, Infinity];
export const select = (data, clause) => data.filter(clause)
export const clauses = {
    startsWith: value => item => item.startsWith(value),
    endsWith: criteria => item => item.endsWith(criteria),
    isNaN,
    isFinite
}
export const radioMenuBuilder = (name, values = []) => {
    if (values.length === 0) {
        return '';
    }
    return `
        <fieldset>
            <legend>${name}'s Menu</legend>
            ${values.reduce((compiled, value, index) => compiled + radioBuilder(name, value, index, index === 0), '')}
        </fieldset>
    `;
}

const radioBuilder = (name, value, index = 0, checked = false) => {
    return `
            <div>
                <input type="radio" name="${name}" value="${value}" id="${name}-${index}"${checked ? ' checked' : ''}>
                <label for="${name}-${index}">${value}</label>
            </div>
            `
}
