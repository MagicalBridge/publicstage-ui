<!--
 * @Author: your name
 * @Date: 2020-05-10 09:06:36
 * @LastEditTime: 2020-06-10 08:47:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts/react-with-ts/README.md
--> 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## npx 是什么？
  npx 避免全局安装模块 使用的时候临时安装，调用项目内置安装的模块

## 函数型组件


## hooks解决的痛点：
组件状态逻辑很难复用的痛点，一般使用 HOC  render Props

生命周期函数难以理解。

hooks 完全拥抱了函数。

## 什么时候使用 useState Hook？


## 给useEffect 返回一个函数清除副作用
react 会在组件卸载的时候执行清除操作。react 会在当前这个effct 执行之前对上一个effect 进行清除操作。


## 自定义hooks

## 样式解决方案

## 组件的需求分析

## 组件测试用例和编码

## 


## 样式规则
styles/
  _variables.scss(各种变量以及可配置设置 色彩、字体、字号)
  _mixins.scss(全局 mixins 全局的一些重用的属性)
  _functions.scss(全局 functions 用于计算并且返回一个值)
components/
  Button/
  style.scss(组件 单独的样式)

create-react-app 天生不支持这个 scss 需要安装 node-sass 这个依赖

## 组件库样式变量分类
* 基础色彩系统
* 字体系统
* 表单
* 按钮
* 边框和阴影
* 可配置开关


## 关于字体大小的涉及
* 字体大小 这里使用 rem作为单位，默认的浏览器的 1rem 是 16px


## 了解下normalize.css

[normalize.css](https://github.com/necolas/normalize.css)
它有什么作用呢？
* 与许多CSS重置不同，保留有用的默认值。
* 规范各种元素的样式。
* 更正错误和常见的浏览器不一致问题。
* 通过细微的修改来提高可用性。
* 使用详细注释说明代码的作用。


## 首先考虑是button组件
不同的Button Type
primary Default Danger link Button

不同的Button size
Normal small Large

disabled 状态
Disabled  link button

```js
<Button
  size="lg"
  type="primary"
  disabled
  href=""?
  className=""?
  autoFocus=""?
  ...
>
  我是按钮
</Button>
```

scss 的作用域也是从上到下的









