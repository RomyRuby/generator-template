## 简介

generator 自定义模块的基本使用方式，可以用于 yeoman 自定义脚手架工具

## 基本步骤

1. 创建 generator 文件夹，必须以 generator-<name>命名
2. yarn init 创建 package.json
3. yarn add yeoman-generator
4. 写需求代码
5. yarn link -链接到全局
6. yeoman <name> -使用 generator
