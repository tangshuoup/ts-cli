#!/usr/bin/env node

/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-09 16:04:08
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-12 15:36:27
 */


const program = require('commander')
program
  .version(require('../package.json').version)
  .option('-v, --version', 'the version number')
  .usage('<command> [options]')  // 帮助信息首行提示
	.command('create', '创建新项目') // 使用独立的可执行文件作为子命令
  .description('create a new project')
	.parse(process.argv) // 按照 node约定解析