import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger'

@Controller('user')
@ApiTags('用户')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('create')
	@ApiOperation({ summary: '创建用户' })
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto)
	}

	@Get(':id')
	@ApiParam({ name: 'id', description: '用户id' })
	@ApiOperation({ summary: '获取单个用户' })
	@ApiParam({ name: 'id', description: '用户id' })
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id)
	}

	@Patch(':id')
	@ApiQuery({ name: 'id', description: '用户id' })
	@ApiOperation({ summary: '根据 id 修改用户信息' })
	update(@Query('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto)
	}

	@Delete(':id')
	@ApiQuery({ name: 'id', description: '用户id' })
	@ApiOperation({ summary: '根据 id 删除用户' })
	remove(@Query('id') id: string) {
		return this.userService.remove(+id)
	}
}
