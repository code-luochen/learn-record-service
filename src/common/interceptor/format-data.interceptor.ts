/**
 * 数据拦截器， 将返回的数据格式统一处理成一个格式
 */

import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class FormatDataInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		return next.handle().pipe(
			map(value => {
				return {
					code: 0,
					data: value,
					message: 'success',
				}
			}),
		)
	}
}
