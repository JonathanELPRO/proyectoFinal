import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
@Module({
    imports:[TypeOrmModule.forFeature([User,Post,Comment])],
    controllers: [UsersController, PostsController, CommentsController],
    providers: [UsersService, PostsService, CommentsService]
})
export class PfModule {}

