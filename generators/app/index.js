//此文件作为 Generator 的核心入口
//需要导出一个继承自Yeoman Generator的类
//Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法头现一些功能，每如文件与入

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    //yeoman在询问用户环节会自动调用此方法
    //在此方法中可以调用父类的prompt()方法发出对用户的命令行询问
    return this.prompt([
      {
        type: "input",
        name: "name", //得到结果的键名
        message: "Your project name",
        default: this.appname, //appname为项目生成目录名
      },
    ]).then((answers) => {
      //answers = {name:'user input value'}
      this.answers = answers;
    });
  }
  writing() {
    //Yeoman 自动在生成文件阶受调用比方法
    //我们这里尝过往项目目录中写入文件
    this.fs.write(this.destinationPath("temp.txt"), Math.random().toString());

    //通过模版的方式写入文件，适用于有多个文件需要去创建的情况

    //获取模板文件路径
    const tmpl = this.templatePath("bar.html");
    //输出目标路径
    const output = this.destinationPath("bar.html");
    //模板数据上下文
    const context = this.answers;

    //设置参数使用copyTpl映射到输出文件
    this.fs.copyTpl(tmpl, output, context);
  }
};
