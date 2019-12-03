const add = (a, b, c, d, e) => {
    return a + b + c + d + e
}
//将add函数柯理化怎么实现？
const curring = (fn, arr = []) => {
    let len = fn.length;
    return (...args) => {
        arr = arr.concat(args);
        if (arr.length < len) {
            return curring(fn, arr)
        }
        return fn(...arr)
    }
}


let r = curring(add)(1)(2, 3)(4)(5);
console.log(r)