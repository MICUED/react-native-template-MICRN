# ReactNative前端开发者

文档版本0.0.2

[Author: Necfol](https://github.com/necfol)

说明: 本文档用于指导前端React Native的开发，如需开发其他其他框架应用，不适用本文档
## 前期准备
1. ReactNative 的基本概念[ReactNative文档](https://facebook.github.io/react-native/docs/getting-started.html)
2. es6 开发基本知识 [es6 基本文档](http://es6.ruanyifeng.com/)
3. Node 环境(Node >=5.0.0，Yarn)[下载地址](https://nodejs.org/zh-cn/)
4. Android Studio环境[Android Studio](https://developer.android.com/studio/install.html?hl=zh-cn)
5. Xcode 环境（Mac适用）

## 1、搭建脚手架
### 1.1、安装脚手架工具
通过 npm 安装 React Native 脚手架命令行工具

```
npm install -g yarn react-native-cli

```
### 1.2、初始化脚手架

由于官方RN0.45版本有问题，推荐使用0.44.3稳定版本
```
$ react-native init ${your_project} --template micrn --version 0.44.3

```
如果需要特定版本则：

```
$ react-native init ${your_project} --template micrn --version ${version}

```

如果需要最新版本则：

```
$ react-native init ${your_project} --template micrn --version

```

例如: react-native init test --template micrn --version 0.44.3

命令会在当前的文件夹下生成一个文件夹，这个文件夹就是我们的项目文件夹
## 2、 运行项目
1.进入上一步创建的文件夹，运行命令(初次运行此项目时需要输入)

```
node script/addDev.js
```
命令运行后，会去下载相关的dev依赖，并且替换包名称。这是由于React Native官方提供的构建模板生成工具不支持devDependencies，所以自定义devDependencies.json文件，项目生成之后，通过脚本把devDependencies.json中的依赖依次安装并且添加到package.json中；官方提供的构建模板生成工具也不支持自动在template构建的项目中替换应用名称，这个脚本也达到了自动替换应用名称的目的。<br>
2.然后启动项目

```
ios(Mac环境): react-native run-ios
android: react-native run-android

```
安卓在运行项目之前，需要先打开Android Studio运行安卓模拟器！！!即AVD Manager.
安卓第一次运行的时候，命令行下载依赖可能比较慢，可以参考[安装](https://reactnative.cn/docs/0.46/getting-started.html#content)，通过Android Studio进行快速安装依赖。
项目启动在ios模拟器，或者安卓模拟器上，并且会打开命令行运行构建服务，⚠️不能把进程杀掉！
可以通过chrome 安装调试工具，或者[安装react-native-debugger](https://github.com/jhen0409/react-native-debugger)，再或者[React Developer Tools](https://facebook.github.io/react-native/docs/debugging.html)。

## 3、项目基本结构
### 3.1、目录说明
```
my-project
├── __tests__
├── android //安卓工程项目
├── ios //ios工程项目
├── script //脚本文件存放处
├── src //项目源代码，开发人员编写的源代码都在这个目录下
│   └── action //redux中放置action的文件夹
│   │     └── home.js //home的action
│   │     └── type //存放action type的文件夹
│   └── components //页面级别的公用组件, 例如在某个项目里共同使用的用户信息展示, 某些共用的复杂弹窗等等
│   │     └── QRScan.js //二维码/条形码扫描
│   └── container //业务模块文件夹, 按照业务逻辑区分的业务模块文件夹
│   │     └── Home.js //首页
│   └── reducer //redux中放置reducer的文件夹
│   │     └── index.js //combine所有reducer
│   │     └── nav.js //navigation的reducer
│   │     └── home.js //home页面的reducer
│   └── app.js //入口
│   └── routerConfig.js //路由
│   └── configStore.js //redux中间件添加，调试工具配置
│   └── root.js //navigation根页面
├── .buckconfig
├── .flowconfig
├── .gitattributes
├── .npmignore
├── jsconfig.json
├── app.json
├── .babelrc //babel配置
├── .gitignore
├── README.md
├── index.android.js //android应用入口
├── index.ios.js //ios应用入口
├── package.json
├── yarn.lock
```
### 3.2、目录规范
1. container 目录下有一个业务建一个子文件夹, 文件夹以驼峰命名, 其他文件也以驼峰命名
2. components 目录下也分别建子文件夹, 文件夹以驼峰命名,其他文件也以驼峰命名

## 4、我要开发Template

如果我们想要开发或者更新Template该怎么办？<br>
1.通过Template构建测试项目，在这个项目中开发您的代码<br>
2.开发完之后，将测试项目所有的依赖正确添加到Template项目的dependencies.json和devDependencies.json中，如果需要增加测试页面，请将相关文件也拷贝到Template项目中，⚠️一定要确认无误方可提交，并且发布。<br>
3.更新package.json中的版本号，提交代码<br>
4.命令行执行

```
npm publish

```
5.enjoy it

