// 返回值工具类
import { ResMsgs } from './messageCode'

export class ResultUtils {
	data = null

	constructor(data: any) {
		this.data = data
	}

	static Success(data: any) {
		return Object.assign(ResMsgs.COMMON_SUCCESS, data)
	}

	static Error(data: any) {
		return Object.assign(ResMsgs.COMMON_ERROR, data)
	}
}
