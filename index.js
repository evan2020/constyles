import * as TYPE from "./checkType"
// 设置样式(暂时设置文字颜色)
let styleArr = {
    red: `color:#f5576c`,
    blue: `color:#005bea`,
    green: `color:#00e3ae`,
    gray: `color:#485563`,
    pink: `color:#fe5196`
}
// 设置console的类
class Console {
    constructor(isShowGlobalLog) {
        // 定义默认数据
        this.data = []
        // 全局开关
        this.isShowGlobalLog = isShowGlobalLog
    }
    // 最终选择是否打印数据
    isShowLog(...data) {
        if (this.isShowGlobalLog) {
            // 如果开启全局开关，把参数给分个打印出来
            console.log.apply(null, this.data)
        } else {
            // 反之都不打印
            return false
        }
    }
    // 接收数据
    log(...dataArr) {
        // 获取传递来的参数
        this.data = [...dataArr]
        if (this.isShowGlobalLog) {
            console.log(...dataArr)
        }
        return this
    }
    // 接收数据
    logStyle(...dataArr) {
        // 获取传递来的参数
        this.data = [...dataArr]
        return this
    }
    // 数据格式化
    format(type = `string`) {
        if (type === `string`) {
            let dataArr = []
            this.data.forEach((item, index) => {
                if (TYPE.isArray(item) || TYPE.isObj(item)) {
                    // 如果数据为数组和json,那么转化为字符串
                    dataArr.push(JSON.stringify(item))
                } else {
                    // 其他的保持不变
                    dataArr.push(item)
                }
                return item
            })
            this.data = [...dataArr]
        }
    }
    // 将数据字符序列化（主要是把数组和json序列化，其他的暂时不变）
    toString(...data) {
        this.format()
        this.isShowLog()
    }
    // 设置数据显示指定的颜色（数据都得先全部转为字符串才可以）
    toColor(color) {
        this.format()
        if (this.isShowGlobalLog) {
            console.group("带有颜色的数据显示 >>>>>>>>>>")
            this.data.forEach((item, index) => {
                this.color(item, color)
            })
        }
        console.groupEnd()
    }
    // 根据数据类型设置打印形式
    color(item, color) {
        if (typeof item === `string`) {
            console.log(`%c${item}`, styleArr[color])
        } else {
            console.log(`%c${JSON.stringify(item)}`, styleArr[color])
        }
    }
}
// 设置实例初始化
export let init = (isShow = true, type = `log`, dataArr = []) => {
    // 创建一个实例
    let dsxConsole = new Console(isShow)
    // 设置实例方法和传参
    dsxConsole[type].apply(dsxConsole, dataArr)
    // 设置定时器垃圾回收
    let timer = setTimeout(() => {
        dsxConsole = null
        clearTimeout(timer)
    }, 100)
    // 清除定时器
    timer = null
    return dsxConsole
}

// 设置log方法
export let Log = (...dataArr) => {
    return init(true, `log`, dataArr)
}

// 设置logStyle方法
export let LogStyle = (...dataArr) => {
    return init(true, `logStyle`, dataArr)
}
