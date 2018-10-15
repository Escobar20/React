export function finalPrice(sum, tax = 0.16) {
    return sum * (1 + tax);
}

export function formatResponse(response = { sum: 10, tax: 0.16 }) {
    return Object.assign(
        response, {
            finalPrice: finalPrice(response.sum, response.tax)
        }
    );
}

export function salute(name, isWoman = true, age = 18) {
    let title = '';

    if (age >= 18) {
        title += `M${(isWoman) ? 's' : 'r'}`;
    }

    return `Hello ${title}. ${name || ''}`
}