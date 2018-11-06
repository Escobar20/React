export let foo = {
    bar: 1,
    get: () => this && this.bar,
    fn: function (bar) {
        this.bar = bar;
    }
};
export let callback = item => item.guid[0] === '4';
export const bar = val => val;
export const xfz = (xfz) => xfz * 2;