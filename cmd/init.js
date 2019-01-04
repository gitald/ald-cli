const inquirer = require('inquirer'),
chalk = require('chalk'),
debug = require('debug'),
exec = require('child_process').exec;


module.exports =async (option)=>{
    if(!option){  //如果没输过目录,就弹提示让他输入
        const defaultName=new Date().getTime();
        await inquirer.prompt([ { 
                type: 'Input', 
                name:'folder',
                message: '请输入你要创建的项目名', 
                default: defaultName 
            }]).then((answers) => { option=answers.folder})
    }
    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`
    console.log(chalk.white('\n Start ...'))
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            debug(error)('')
            process.exit()
        }
        stdout.on('data', (data) => {
            debug(data.toString())('')
        })
        console.log(chalk.green('\n 项目创建完毕'))
        process.exit()
      })
}