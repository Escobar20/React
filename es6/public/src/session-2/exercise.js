export const sports = ['football', 'basketball', 'baseball', 'voleyball', 'hockey', 'chess', 'texas poker'];
export const numbers = [0, 'f', {}, NaN, Infinity];
export const clauses = {
    startsWith: value => item => item,
    endsWith: value => item => item,
    isNaN: v => v,
    isFinite: v => v
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
