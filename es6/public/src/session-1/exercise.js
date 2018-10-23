export const PHI = (1 + Math.sqrt(5)) / 2;

export const obj = {
    generateArray(n) {
        let array = [];
        if (n > 0) {
            for (let i = 0; i < n; i += 1) {
                array.push(i);
            }
        }
        return array;
    }
}