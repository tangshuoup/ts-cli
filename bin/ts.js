#!/usr/bin/env node

/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-09 16:04:08
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-13 14:40:22
 */


const program = require('commander')

program
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    console.log('name', name)
    console.log('options', options)
    require('./ts-create')(name, options)
  })


program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')
	.parse(process.argv)

  