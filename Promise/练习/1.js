// var value1 = 0,
//     value2 = 0,
//     value3 = 0;
// for (var i = 1; i <= 3; i++) {
//     var i2 = i;
//     (function () {
//         var i3 = i;
//         setTimeout(function () {
//             value1 += i;
//             value2 += i2;
//             value3 += i3;
//         }, 0)
//     })();
// }
// setTimeout(function () {
//     console.log(value1, value2, value3);
// }, 100);

// let a = 0;
// var obj = {
//     a: 10,
//     b() {
//         var a = 20;
//         console.log(this);

//         console.log(this.a);
//     }, //ES6中对象的新语法
//     c: () => {
//         var a = 30;
//         console.log(this);

//         console.log(this.a);
//     }
// }
// let d = {
//     a: 40
// };
// obj.b(); //10 对象中的方法this指向调用者
// obj.c(); //undefined
// obj.b.bind(d)(); //40
// obj.c.bind(d)(); //undefined



// var s='sss'
// var d = (a = 3, b = "asdfasfsd", false)
// console.log(d)

var a = 1;

console.log(a+++a)


// var a=1;
// console.log(a++)


// f=function(){return true};
// g=function(){return false};
// (function(){
//     if(g&&[]==![]){
//         f=function f(){return false;}
//     }
// })();
// console.log(f())


// var num = 10;
// var obj={
//     num:8,
//     inner:{
//         num:6,
//         print:function(){
//             console.log(this.num)
//         }
//     }
// }
// num = 888;

// obj.inner.print();
// var fn = obj.inner.print;
// fn();
// (obj.inner.print)();
// (obj.inner.print = obj.inner.print)()



// // curry
// const add = (a,b,c,d,e)=>{
//     return a+b+c+d+e
// };

// const curry = (fn,arr=[])=>{
//     let len = fn.length;
//     return (...args)=>{
//         arr = arr.concat(args);
//         if(arr.length<len){
//             return curry(fn,arr)
//         }
//         return fn(...arr)
//     }
// }

// console.log(curry(add)(1, 2)(3)(4, 5))
// console.log(curry(add)(1)(2)(3)(4)(5))




const add = (a,b,c,d,e)=>{
    
}