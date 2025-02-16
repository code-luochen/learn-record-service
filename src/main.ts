import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { HttpExceptionFilterTsFilter } from '@/common/filter/http-exception.filter'
import { FormatDataInterceptor } from '@/common/interceptor/format-data.interceptor'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// 配置全局网络异常处理器
	app.useGlobalFilters(new HttpExceptionFilterTsFilter())
	// 配置全局数据格式化拦截器
	app.useGlobalInterceptors(new FormatDataInterceptor())
	// 配置全局管道， 通过 class-validator 自动进行校验数据正确性
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	)
	// 给所有请求都加上 api 前缀
	app.setGlobalPrefix('/api')

	// 配置 swagger 文档
	const options = new DocumentBuilder()
		.setTitle('luochun')
		.setDescription('笔记记录系统')
		.setVersion(require('../package.json').version) // 获取版本号, 沿用 package 文件中的版本号
		.build()

	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('swagger', app, document)

	await app.listen(3000)
}

bootstrap()
