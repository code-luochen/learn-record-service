import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'
import { ResultUtils } from '@/utils/ResultUtil'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
	) {}

	async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
		const find = await this.userRepository.findOne({
			where: {
				name: createUserDto.name,
			},
		})
		if (find) {
			throw new Error('User name already exists')
		}
		const user = await this.userRepository.create(createUserDto)
		return ResultUtils.Success(user)
	}

	async findOne(id: number): Promise<User> {
		const res = await this.userRepository.findOne({ where: { id: id } })
		return ResultUtils.Success(res)
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		const user = await this.userRepository.findOne({ where: { id: id } })
		if (!user) {
			throw new Error(`User with id ${id} not found`)
		}

		this.userRepository.merge(user, updateUserDto)
		const updateUser = await this.userRepository.save(user)

		return ResultUtils.Success(updateUser)
	}

	async remove(id: number) {
		const res = await this.userRepository.delete(id)
		return ResultUtils.Success(res)
	}
}
