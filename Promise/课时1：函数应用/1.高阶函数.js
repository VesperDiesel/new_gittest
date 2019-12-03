//重写数组原型上的方法
Function.prototype.before = function (beforeFn) {
    return (...args) => { //剩余运算符
        beforeFn();
        this(...args); //箭头函数中没有this指向，也没有arguments，所有调用this会向上级作用域查找。
    }
} //重写了一个函数原型上的before函数，调用before函数，相当于先调用传入的参数，然后调用 调用了before函数的函数本身
const say = (...args) => {
    console.log('说话', args);
}

const newSay = say.before(() => {
    console.log('您好');
})

const newSay1 = say.before(() => {
    console.log('天气很好')
})

newSay(1, 2, 3);
newSay1();