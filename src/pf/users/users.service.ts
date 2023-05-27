import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
        ) {}
    
    
        async showAll():  Promise<User[]>
        {
           return this.userRepository.find();
        }
        create(createUserDto:CreateUserDto){
            
            return this.userRepository.save(createUserDto)
            
        }
    
        async modifyUser(id:number,createUserDto:CreateUserDto)
        {
            const userFound=await this.userRepository.findOne({
                where:{
                    id,
                },
            });
            if(!userFound)
            {
                return new HttpException('User not found',HttpStatus.NOT_FOUND);
            }
    
    
    
            // UserFound.nombre=createUserDto.nombre;
            // UserFound.apellido=createUserDto.apellido;
            // UserFound.passsword=createUserDto.password;
            
            

            return this.userRepository.update({id},createUserDto)
    
            
            // return this.UserRepository.save(UserFound)
        }
    
    
        async deleteUser(id:number)
        {
            const userFound=await this.userRepository.findOne({
                where:{
                    id,
                },
            });
            if(!userFound)
            {
                return new HttpException('User not found',HttpStatus.NOT_FOUND);
            }
            return this.userRepository.delete(id);
        }
}
