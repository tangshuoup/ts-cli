/*
 * @Descripttion: 
 * @version: 
 * @Author: tangshuo
 * @Date: 2021-10-09 16:21:27
 * @LastEditors: tangshuo
 * @LastEditTime: 2021-10-11 17:14:12
 */
const { prompt } = require('inquirer')

const questions = [
	{
		name: 'name',
		type: 'string',
		required: true,
		message: 'Project name'
	},
	{
		name: 'description',
		type: 'string',
		required: false,
		message: 'Project description'
	}, {
		name: 'author',
		type: 'string',
		message: 'Author',
	},
	{
		name: 'UI',
		type: 'list',
		message: 'Pick a UI library to install',
		choices: [{
			name: 'Ant Design',
			value: 'ant-design',
			short: 'Ant'
		}]
	},
]
  
  module.exports = function ask () {
    return prompt(questions).then(answers => {
      return answers
    })
  }
  