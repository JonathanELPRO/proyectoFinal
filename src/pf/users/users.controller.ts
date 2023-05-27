import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    findAll()
    {
        return this.userService.showAll();
    }
    
    @Post()
    create(@Body() createUserDto:CreateUserDto) :object
    {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    modifyUser(
        @Param('id',ParseIntPipe) id:number,
        @Body() UserModify:CreateUserDto
    )
    {
        return this.userService.modifyUser(id,UserModify);
    }
    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number)
    {
        return this.userService.deleteUser(id);
    }
}
