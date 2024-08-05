function memoize(fn) {
    const cache = {};
    return function(...args) {
        let temp = String(args);

        if(temp in cache){
            return cache[temp];
        }
        
        return cache[temp] = fn(...args);
    }
}