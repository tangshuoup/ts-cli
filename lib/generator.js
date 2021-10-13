/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-13 11:44:30
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-13 14:58:16
 */
const ora = require('ora')
const util = require('util')
const path = require('path')
const downloadGitRepo = require('download-git-repo')
const chalk = require('chalk')

const wrapLoading = async(fn, message, ...args)=> {
  const spinner = ora(message)
  spinner.start()
  try {
    await fn(...args)
    spinner.succeed()
  } catch(error) {
    spinner.fail('Request failed')
    throw error
  }
}



class Generator {
  constructor (name, targetDir) {
    this.name = name
    this.targetDir = targetDir
    this.downloadGitRepo = util.promisify(downloadGitRepo)
  }

  async dowload() {
    const templateUrl = 'tangshuoup/ts-formwork'
    await wrapLoading(
      this.downloadGitRepo,
      'download template...',
      templateUrl,
      path.resolve(process.cwd(), this.targetDir)
    )
  }

  async create() {
    await this.dowload()
    console.log(`\r\nSuccessfully created project ${chalk.cyan(this.name)}`)
  }
}

module.exports = Generator