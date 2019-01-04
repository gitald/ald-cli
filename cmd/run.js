const inquirer = require('inquirer'),
debug = require('debug'),
chalk = require('chalk'),
ora = require('ora'),
spawn = require('child_process').spawn;


module.exports =async (option)=>{
    if(!option){  //如果没输过目录,就弹提示让他输入
        await inquirer.prompt([ { 
                type: 'Input', 
                name:'folder',
                message: '请输入你要运行的项目名', 
                default: 'activity' 
            }]).then((answers) => { option=answers.folder})
    }
    debug('this'+option+process.cwd())('')
    // try{
    //     const config= await require('./build/webpack.dev.conf.js')
    //     const serveConfig=config.devServer
    // }catch(e){
    //     debug('请在项目根目录执行命令')('')
    //     process.exit(1)
    // }
    let serve = spawn(`node`, ['build/worker.js', option],{encoding: 'utf-8'})
    const spinner = ora('building project').start();

    serve.stdout.on('data', (data) => {
        spinner.stop()
        debug(data.toString())('')
    })

    // serve.stderr.on('data', (data) => {
    // console.log(`${data}`)
    // })

    serve.on('exit', (code) => {
        if(code === 200){
            console.log(chalk.gray(option+'项目已启动'))
        }
    })
}