//代理 改写 拦截 propKey in proxy
let obj = new Proxy({},{
    /**
     * 
     * @param {*} target 
     * @param {*} propKey 
     * @returns 返回一个bool值，
     */
    has:(target,propKey)=>{
        console.log(target,propKey);
        return propKey in target                                                                                                                
    }
})
console.log("a" in  obj)