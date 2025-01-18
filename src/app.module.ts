import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserModule } from './modules/user/user.module'
import databaseConfig from './config/database.config'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig],
			ignoreEnvFile: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get<string>('database.HOST'),
				port: +configService.get<number>('database.PORT'),
				username: configService.get<string>('database.USERNAME'),
				password: configService.get<string>('database.PASSWORD'),
				database: configService.get<string>('database.DATABASE'),
				schema: configService.get<string>('database.SCHEMA'),
				entities: [],
				synchronize: true,
				autoLoadEntities: true, // 自动加载实体
			}),
			inject: [ConfigService],
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
