//代理 改写 拦截 delete
let obj = new Proxy({},{
    /**
     * 
     * @param {*} target 
     * @param {*} propKey 
     * @returns 
     */
    deleteProperty:(target,propKey)=>{
        console.log(target,propKey);
        delete target[propKey];
        return true
    }
})
obj.testProperty = 1
delete obj.testProperty
console.log(obj)