/**
 * 网络异常拦截器， 如果出现异常统一走这里处理
 * 只有网络出现异常才会走这个逻辑
 */
import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'
@Catch(HttpException)
export class HttpExceptionFilterTsFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()
		const request = ctx.getRequest<Request>()
		const status = exception.getStatus()

		response.status(status).json({
			code: status,
			timestamp: new Date().toISOString(),
			path: request.url,
		})
	}
}
