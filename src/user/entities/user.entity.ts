import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn({
		type: 'bigint',
		comment: '用户 id',
	})
	@ApiProperty({ type: Number, description: '用户id' })
	id: number

	@Column({ type: 'varchar', comment: '用户的名称' })
	@ApiProperty({ type: String, description: '用户名称' })
	name: string

	@Column({ type: 'varchar', comment: '密码' })
	@ApiProperty({ type: String, description: '密码' })
	password: string

	@Column({ type: 'varchar', comment: '邮箱' })
	@ApiProperty({ type: String, description: '邮箱' })
	email: string

	@Column({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP',
		comment: '创建时间',
	})
	@ApiProperty({ type: Date, description: '创建时间' })
	created_at: Date

	@Column({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP',
		comment: '更新时间',
	})
	@ApiProperty({ type: Date, description: '更新时间' })
	updated_at: Date
}
