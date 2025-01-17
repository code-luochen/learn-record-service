import * as fs from 'fs'
import * as path from 'path'
import { TConfigType } from './data.d'

/**
 * 获取项目运行环境
 */
export function getEnv() {
	return process.env.NODE_ENV_RUNNING
}

export const isDev = getEnv() === 'dev'

const parse = file => {
	try {
		return JSON.parse(file)
	} catch (e) {
		throw new TypeError('file is not a valid JSON')
	}
}

/**
 * 获取配置文件
 */
export function getConfig(type: TConfigType) {
	// 读取配置文件
	const file = fs.readFileSync(path.join(process.cwd(), 'config.json'), 'utf8')
	const configFile = parse(file)

	return configFile[type]
}
