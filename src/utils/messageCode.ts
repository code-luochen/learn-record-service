export const ResMsgs = {
	// CODE: -1 ~ 999 通用错误
	COMMON_ERROR: { CODE: -1, MESSAGE: '系统错误' },
	COMMON_SUCCESS: { CODE: 0, MESSAGE: '成功' },
	COMMON_UPLOAD_ERROR: { CODE: 1, MESSAGE: '上传失败' },
	COMMON_NOT_EXIST: { CODE: 2, MESSAGE: '数据不存在' },
	COMMON_NO_PERMISSION: { CODE: 3, MESSAGE: '没有权限' },

	// CODE: 1000 ~ 1999 参数错误
	PARAMS_ERROR: { CODE: 1000, MESSAGE: '参数错误' },
	PARAMS_MISSING: { CODE: 1001, MESSAGE: '参数缺失' },
	PARAMS_INVALID: { CODE: 1002, MESSAGE: '参数无效' },
	PARAMS_TYPE_INVALID: { CODE: 1003, MESSAGE: '参数类型无效' },
	PARAMS_VALUE_INVALID: { CODE: 1004, MESSAGE: '参数值无效' },
	PARAMS_FORMAT_INVALID: { CODE: 1005, MESSAGE: '参数格式无效' },
	PARAMS_LENGTH_INVALID: { CODE: 1006, MESSAGE: '参数长度无效' },
	PARAMS_RANGE_INVALID: { CODE: 1007, MESSAGE: '参数范围无效' },
	PARAMS_REPEAT: { CODE: 1008, MESSAGE: '参数重复' },
	PARAMS_EMPTY: { CODE: 1009, MESSAGE: '参数为空' },
	PARAMS_NOT_EXIST: { CODE: 1010, MESSAGE: '参数不存在' },
	PARAMS_NOT_MATCH: { CODE: 1011, MESSAGE: '参数不匹配' },
	PARAMS_NOT_ALLOWED: { CODE: 1012, MESSAGE: '参数不允许' },
	PARAMS_TOO_LONG: { CODE: 1013, MESSAGE: '参数过长' },
	PARAMS_TOO_SHORT: { CODE: 1014, MESSAGE: '参数过短' },
	PARAMS_TOO_BIG: { CODE: 1015, MESSAGE: '参数过大' },
	PARAMS_TOO_SMALL: { CODE: 1016, MESSAGE: '参数过小' },
	PARAMS_TOO_MANY: { CODE: 1017, MESSAGE: '参数过多' },
	PARAMS_TOO_FEW: { CODE: 1018, MESSAGE: '参数过少' },
	PARAMS_TOO_OLD: { CODE: 1019, MESSAGE: '参数过旧' },
	PARAMS_TOO_NEW: { CODE: 1020, MESSAGE: '参数过新' },
	PARAMS_TOO_EARLY: { CODE: 1021, MESSAGE: '参数过早' },
	PARAMS_TOO_LATE: { CODE: 1022, MESSAGE: '参数过晚' },
	PARAMS_TOO_EASY: { CODE: 1023, MESSAGE: '参数过简单' },
	PARAMS_TOO_DIFFICULT: { CODE: 1024, MESSAGE: '参数过复杂' },
	PARAMS_TOO_WEAK: { CODE: 1025, MESSAGE: '参数过弱' },
	PARAMS_TOO_STRONG: { CODE: 1026, MESSAGE: '参数过强' },

	// CODE: 2000-2999 用户相关
	USER_NOT_LOGIN: { CODE: 2000, MESSAGE: '用户未登录' },
	USER_NOT_EXIST: { CODE: 2001, MESSAGE: '用户不存在' },
	USER_NOT_MATCH: { CODE: 2002, MESSAGE: '用户不匹配' },
	USER_NOT_ALLOWED: { CODE: 2003, MESSAGE: '用户不允许' },
	USER_NOT_FOUND: { CODE: 2004, MESSAGE: '用户未找到' },
	USER_NOT_AUTHORIZED: { CODE: 2005, MESSAGE: '用户未授权' },
	USER_NOT_VERIFIED: { CODE: 2006, MESSAGE: '用户未验证' },
	USER_NOT_ACTIVATED: { CODE: 2007, MESSAGE: '用户未激活' },
	USER_NOT_DISABLED: { CODE: 2008, MESSAGE: '用户未禁用' },
	USER_NOT_ENABLED: { CODE: 2009, MESSAGE: '用户未启用' },
	USER_NOT_DELETED: { CODE: 2010, MESSAGE: '用户未删除' },
	USER_NOT_EXPIRED: { CODE: 2011, MESSAGE: '用户未过期' },
	USER_NOT_LOCKED: { CODE: 2012, MESSAGE: '用户未锁定' },
	USER_NOT_BANNED: { CODE: 2013, MESSAGE: '用户未封禁' },
	USER_NOT_UPDATE_SELF_STATUS: { CODE: 2014, MESSAGE: '不能修改自己的状态' },
	USER_NAME_EMPTY: { CODE: 2015, MESSAGE: '请输入用户名' },

	// CODE: 3000-3999 应用相关
	APP_NOT_FOUND: { CODE: 3000, MESSAGE: '应用未找到' },
	APP_NOT_EXIST: { CODE: 3001, MESSAGE: '应用不存在' },
	APP_NOT_MATCH: { CODE: 3002, MESSAGE: '应用不匹配' },
	APP_NOT_ALLOWED: { CODE: 3003, MESSAGE: '应用不允许' },
	APP_NAME_EXIST: { CODE: 3004, MESSAGE: '应用名称已存在' },

	// CODE: 4000-4999 资源相关
	RESOURCE_NOT_FOUND: { CODE: 4000, MESSAGE: '资源未找到' },

	// CODE: 5000-5999 页面相关
	PAGE_NOT_FOUND: { CODE: 5000, MESSAGE: '页面未找到' },
	PAGE_NOT_SUPPORT: { CODE: 5001, MESSAGE: '不支持多级目录' },

	// CODE: 6000-6999 历史相关
	HISTORY_NOT_FOUND: { CODE: 6000, MESSAGE: '历史记录不存在' },
	HISTORY_NOT_PUBLISH: { CODE: 6001, MESSAGE: '当前不是待发布状态无法发布' },
	HISTORY_NOT_DEVELOP: {
		CODE: 6002,
		MESSAGE: '当前不是开发中状态无法扭转状态',
	},
	HISTORY_NOT_PEDDING: { CODE: 6003, MESSAGE: '状态不是待发布无法扭转状态' },
	HISTORY_NOT_PEDDING_OR_DEVELOP: {
		CODE: 6004,
		MESSAGE: '状态不是待发布和开发中无法删除',
	},
	HISTORY_NOT_PUBLISHED: {
		CODE: 6005,
		MESSAGE: '当前不是已发布状态无法使用',
	},
}

export type ResMsgKey = keyof typeof ResMsgs

export type ResMsgType = (typeof ResMsgs)['COMMON_ERROR']

export type ResMsgCode = (typeof ResMsgs)[ResMsgKey]['CODE']

export type ResMsgMessage = (typeof ResMsgs)[ResMsgKey]['MESSAGE']
