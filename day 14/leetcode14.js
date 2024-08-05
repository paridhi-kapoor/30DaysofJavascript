//Ques 1
async function sleep(millis) {
    await Promise.resolve().then(() => new Promise(resolve => setTimeout(resolve, millis)));
}

//Ques 2
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args).then(resolve).catch(reject)
        })
    }
};