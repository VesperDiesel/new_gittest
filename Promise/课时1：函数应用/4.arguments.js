// 非剩余参数，默认参数，解构赋值的情况下 arguments和参数变化保持一致
function funE(a, b, c) {
    c = 10;
    console.log('传入方法funF前的参数', arguments[0], arguments[1], arguments[2]); //1,1,10
    funF(arguments)
    console.log('传入方法funF后的参数', arguments[0], arguments[1], arguments[2]); //10,1,10
    console.log('传入方法funF后的实数', a, b, c); //10,1,10
}

function funF(arr) {
    arr[0] = arr[2]
}
funE(1, 1, 1)



// 有默认参数的情况下  arguments永远只看调用时的参数 所以arguments永远是[1,1,1]
// arguments改变也不会影响实参
// 但是里面的a,b,c会随着函数内部的赋值有变化 a=1,b=2,c=10; 而括号内c=3 直接被覆盖
function funB(a, b, c = 100) {
    c = 10;
    console.log('调用funA方法之前的arguments', arguments[0], arguments[1], arguments[2]);
    console.log('调用funA方法之前的实参', a, b, c);
    funA(arguments)
    console.log('调用funA方法之后的arguments', arguments[0], arguments[1], arguments[2]);
    console.log('调用funA方法之后的实参', a, b, c)
}

function funA(arr) {
    arr[0] = arr[2]
}
funB(1, 1, 4)