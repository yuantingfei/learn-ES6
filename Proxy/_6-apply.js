//代理 改写 拦截 函数调用，call，apply
let obj = new Proxy(function(){
    console.log(21)
},{
    apply:(target,thisArg,argArray)=>{
        console.log(target,thisArg,argArray)
        Reflect.apply(target,thisArg,argArray)
    }
})
obj()