import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>
        ) {}
    
    
        async showAll():  Promise<Post[]>
        {
        //    return this.postRepository.find();
            return this.postRepository.find({ relations: ['user'] });
           
        }
        // async showAll(): Promise<Post[]> {
        //     return this.postRepository.find({ relations: ['foreignKeyEntity'] });
        //   }
        
        // En este ejemplo, debes reemplazar 'foreignKeyEntity' con el nombre de la relación de clave externa que deseas cargar en tu entidad Post osea el nombre de la foranea en el entity Post. Al pasar { relations: ['foreignKeyEntity'] } como opción en el método find(), le indicas a TypeORM que cargue la relación de clave externa especificada junto con tus entidades Post.
        create(createPostDto:CreatePostDto){
            
            return this.postRepository.save(createPostDto)
            
        }
    
        async modifyPost(id:number,createPostDto:CreatePostDto)
        {
            const postFound=await this.postRepository.findOne({
                where:{
                    id,
                },
            });
            if(!postFound)
            {
                return new HttpException('post not found',HttpStatus.NOT_FOUND);
            }
    
    
    
            // UserFound.nombre=createUserDto.nombre;
            // UserFound.apellido=createUserDto.apellido;
            // UserFound.passsword=createUserDto.password;
            
            

            return this.postRepository.update({id},createPostDto)
    
            
            // return this.UserRepository.save(UserFound)
        }
    
    
        async deletePost(id:number)
        {
            const postFound=await this.postRepository.findOne({
                where:{
                    id,
                },
            });
            if(!postFound)
            {
                return new HttpException('post not found',HttpStatus.NOT_FOUND);
            }
            return this.postRepository.delete(id);
        }
}
