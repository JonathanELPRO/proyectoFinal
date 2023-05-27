import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService){}

    @Get()
    findAll()
    {
        return this.commentService.showAll();
    }
    @Get(':id')
    findCommentForPostId(
        @Param('id',ParseIntPipe) id:number
    )
    {
        return this.commentService.findCommentForPostId(id);
    }
    @Post()
    create(@Body() createCommentDto:CreateCommentDto) :object
    {
        return this.commentService.create(createCommentDto);
    }

    @Put(':id')
    modifyUser(
        @Param('id',ParseIntPipe) id:number,
        @Body() commentModify:CreateCommentDto
    )
    {
        return this.commentService.modifyComment(id,commentModify);
    }
    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number)
    {
        return this.commentService.deleteComment(id);
    }
}
