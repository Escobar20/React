export const title = 'captain';
export function salute(title) { return `I salute you, ${title}`}
export const coordinate = {
    x: 0,
    y: 0,
    getPosition() {
        return `(${this.x},${this.y})`
    }
}
export const quoting = (strings, quote, author) => `<p><q>${quote}</q>${strings[1]}<cite>${author}</cite></p>`;