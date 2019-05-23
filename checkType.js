export let isString = o => {
    //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === "String"
}

export let isNumber = o => {
    //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === "Number"
}

export let isBoolean = o => {
    //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === "Boolean"
}

export let isFunction = o => {
    //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === "Function"
}

export let isNull = o => {
    //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === "Null"
}

export let isUndefined = o => {
    //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === "Undefined"
}

export let isObj = o => {
    //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Object"
}

export let isArray = o => {
    //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === "Array"
}

export let isDate = o => {
    //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === "Date"
}

export let isRegExp = o => {
    //是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === "RegExp"
}

export let isError = o => {
    //是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Error"
}

export let isSymbol = o => {
    //是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === "Symbol"
}

export let isPromise = o => {
    //是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Promise"
}

export let isSet = o => {
    //是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === "Set"
}

export let isFalse = o => {
    if (!o || o === "null" || o === "undefined" || o === "false" || o === "NaN")
        return true
    return false
}

export let isTrue = o => {
    return !this.isFalse(o)
}
