import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilterTsFilter } from '@/common/filter/http-exception.filter'
import { FormatDataInterceptor } from '@/common/interceptor/format-data.interceptor'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// 配置全局网络异常处理器
	app.useGlobalFilters(new HttpExceptionFilterTsFilter())
	// 配置全局数据格式化拦截器
	app.useGlobalInterceptors(new FormatDataInterceptor())

	await app.listen(3000)
}
bootstrap()
