#!/usr/bin/env node
/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-11 17:19:58
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-12 15:30:22
 */
const program = require('commander')
// const chalk = require('chalk')
const path = require('path')
// const home = require('user-home')
const fs = require('fs')
// const inquirer = require('inquirer')
// const ora = require('ora')
// const rm = require('rimraf')
const ask = require('../lib/ask')
// const download = require('download-git-repo')


program
  .usage('[project-name]')
  .parse(process.argv)
  
// const rawName = program.args[0]

// const projectName = rawName
  



function run () {
  ask().then(answers => {
    console.log('answers', answers)
  })
}


run()