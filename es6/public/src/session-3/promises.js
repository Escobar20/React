export const delay = function (time) {
    return new Promise((complete) => {
        let id = setTimeout(function () {
            clearTimeout(id);

            complete();
        }, time);
    })
}
export const failDelay = function (time) {
    return new Promise((complete, fail) => {
        let id = setTimeout(function () {
            clearTimeout(id);

            fail(new Error('Failure'))
        }, time);
    })
}
export const createRacer = function (name) {
    let time = Math.floor(Math.random() * 10);

    return delay(time).then(() => Promise.resolve(name));
}
export const createIneptRacer = function (name) {
    return failDelay(0).catch(() => Promise.reject(new Error(name)));
}
export const onFailure = function () { }
export const onDelay = function () { };