##### 安装`constyles`

```
npm install constyles
```

##### 使用`constyles`

引入`constyles`

```
import * as constyles from "constyles"
```

`方法列表`

- `log` ：正常控制台打印`console`，可通过全局开关关闭打印信息
- `logStyle` : 带有样式的`console`信息，目前仅为带有颜色的文字（会把`array`和`json`转为字符串，其他不变）

初始化方法

```javascript
//定义log开关
let isShowLog=true
//指定方法名称
let name=`log`
//初始化log设置
let log=(...dataArr)=>{
	return constyles.init(`${isShowLog}`,`${name}`, dataArr)
}
```

使用方法

参数正常输入即可

```
log（...info）
```

##### 方法说明

如果使用`logStyle`，则可以通过链式调用，选择对应的样式

初始化

```javascript
//定义log开关
let isShowLog=true
//指定方法名称
let name=`logStyle`
//初始化log设置
let logStyle=(...dataArr)=>{
	return constyles.init(`${isShowLog}`,`${name}`, dataArr)
}
```

样式方法

- `toString`：将`array`和`json`数据序列化为字符串显示（`logStyle.toString()`）
- `toColor `  ：将`array`和`json`指定颜色显示(`logStyle.toColor(color)`)
  - `color` ：`string `可选颜色`red/blue/green/gray/pink`