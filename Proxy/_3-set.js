//代理 改写 拦截set
let obj = new Proxy({
    testProperty:32
},{
    // get:(target,property)=>{
    //     console.log(target,property)
    //     return 21;
    // },
    set:(target,key,value,receiver)=>{
        console.log(target,key,value,receiver);
        return Reflect.set(target,key,43,receiver)
        // return Reflect.set(target,key,value,receiver)
    }
})
obj.testProperty = 1
console.log(obj.testProperty)