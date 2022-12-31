/**
 * Proxy概述
 * Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”,即对编程语言进行编程
 * Proxy可以理解成在目标对象前架设一“拦截”层，外界对该对象的访问都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * Proxy 接收2个参数：第一个参数是所要代理的目标对象，下列例子是一个空对象，如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。
 */

/**
 * get()
 * set()
 * has() 拦截 propKey in proxy
 * deleteProperty() 拦截 delete   
 * apply() 拦截函数的调用，call，apply
 * construct() 拦截 new 命令
 */

/**
 * 1.deleteProperty()该方法用于拦截delete操作，如果这个方法返回false或者是抛出错误当前属性就被delete命令删除
2.defineProperty()该方法拦截了Object.defineProperty操作
3.enumerate()该方法用于拦截for...in循环，注意不可与has()方法弄混（has方法用于拦截in操作符）。
4.has()该方法用于拦截in操作符
5.construct()方法用于拦截new命令
6.getOwnPropertyDescriptor()该方法用于拦截Object.getOwnPropertyDescriptor返回一个属性描述对象或者是undefined。
7.getPrototypeOf()该方法用于拦截Object.getPrototypeOf()运算符以及一些其他操作。
8.isExtensible()该方法用于拦截Object.isExtensible操作。
9.ownKeys()该方法用于拦截Object.keys()操作。
10.preventExtensions()方法该方法用于拦截Object.preventExtensions()操作。
11.setPrototypeOf()方法该方法用于拦截Object.setPrototypeOf()操作。
 */

