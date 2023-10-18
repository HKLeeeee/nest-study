import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessageController {

    @Get()
    listMessages() {

    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        console.log(body)
    }
    @Get('/:id')
    getMessage(@Param() id: number){
        console.log(id);
    }
    
}
