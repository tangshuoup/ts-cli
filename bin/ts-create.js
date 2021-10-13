#!/usr/bin/env node
/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-11 17:19:58
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-13 14:45:47
 */
const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const Generator = require('../lib/generator')

const OverWrite = async(targetAir)=>{
  let { action } = await inquirer.prompt([{
    name: 'action',
    type: 'list',
    message: 'Target directory already exists Pick an action:',
    choices: [{
      name: 'OverWrite',
      value: 'OverWrite'
    }, {
      name:'Cancel',
      value: false
    }]
  }])

  if (!action) return
  console.log('\r\nRemoving...')
  await fs.remove(targetAir)
}


module.exports = async function (name, options) {
  const cwd = process.cwd()
  const targetAir = path.join(cwd, name)
  if (fs.existsSync(targetAir)) {
    if (options.force) {
      await fs.remove(targetAir)
    } else {
      await OverWrite(targetAir)
    }
  }
  const generator = new Generator(name, targetAir)
  generator.create()
}
