import { registerAs } from '@nestjs/config'
import { getConfig } from '@/utils/config'

export default registerAs('database', () => {
	const config = getConfig('DATA_BASE')
	return {
		HOST: config.DB_HOST,
		PORT: config.DB_PORT || 5432,
		USERNAME: config.DB_USERNAME,
		PASSWORD: config.DB_PASSWORD,
		DATABASE: config.DB_NAME,
		SCHEMA: config.DB_SCHEMA,
	}
})
