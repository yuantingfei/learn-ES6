//代理 改写 拦截get
let obj = new Proxy({},{
    get:(target,property)=>{
        console.log(target,property)
        return 21;
    }
})
obj.testProperty = 1
console.log(obj.testProperty)